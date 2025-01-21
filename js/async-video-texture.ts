import { Component, type Texture, type Material, ImageBitmapProvider } from '@wonderlandengine/api';
import { property } from '@wonderlandengine/api/decorators.js';

class BasicImageBitmapProvider extends ImageBitmapProvider {
    private data: ImageBitmap;
    private updateQueue: (() => void)[] | null = null;

    constructor(readonly source: ImageBitmapSource, initialData: ImageBitmap, width: number, height: number) {
        super(width, height);
        this.data = initialData;
    }

    private static async createImageBitmap(source: ImageBitmapSource): Promise<ImageBitmap> {
        return await createImageBitmap(source, {
            premultiplyAlpha: 'none',
            colorSpaceConversion: 'none',
            imageOrientation: 'none',
        });
    }

    static async fromImageBitmapSource(source: ImageBitmapSource, width: number, height: number) {
        const initialData = await BasicImageBitmapProvider.createImageBitmap(source);
        return new BasicImageBitmapProvider(source, initialData, width, height);
    }

    static async fromImage(image: HTMLImageElement) {
        return BasicImageBitmapProvider.fromImageBitmapSource(image, image.width, image.height);
    }

    static async fromVideo(video: HTMLVideoElement) {
        return BasicImageBitmapProvider.fromImageBitmapSource(video, video.videoWidth, video.videoHeight);
    }

    getData(): ImageBitmap {
        return this.data;
    }

    private async doActualUpdate() {
        try {
            const newData = await BasicImageBitmapProvider.createImageBitmap(this.source);
            this.data.close();
            this.data = newData;
        } finally {
            const callbacks = this.updateQueue!;
            this.updateQueue = null;
            for (const callback of callbacks) {
                callback();
            }
        }
    }

    update() {
        return new Promise<void>((resolve, _reject) => {
            if (this.updateQueue === null) {
                this.updateQueue = [resolve];
                this.doActualUpdate();
            } else {
                this.updateQueue.push(resolve);
            }
        });
    }
}

/**
 * Downloads a video from URL and applies it with `setDiffuseTexture` or a
 * specific texture setter on the given material.
 *
 * Video textures need to be updated regularly whenever
 * a new frame is available. This component handles the
 * detection of a new frame and updates the texture to
 * reflect the video's current frame.
 *
 * The video can be accessed through `this.video`:
 *
 * ```js
 *   let videoTexture = this.object.getComponent('video-texture');
 *   videoTexture.video.play();
 *   videoTexture.video.pause();
 * ```
 *
 * See [Video Example](/showcase/video).
 */
export class AsyncVideoTexture extends Component {
    static TypeName = 'async-video-texture';

    /** URL to download video from */
    @property.string()
    url!: string;
    /** Material to apply the video texture to */
    @property.material()
    material!: Material;
    /** Whether to loop the video */
    @property.bool(true)
    loop!: boolean;
    /** Whether to automatically start playing the video */
    @property.bool(true)
    autoplay!: boolean;
    /** Whether to mute sound */
    @property.bool(true)
    muted!: boolean;
    /** Name of the texture property setter */
    @property.string('setDiffuseTexture')
    textureSetter!: string;

    private frameUpdateRequested!: boolean;
    private video!: HTMLVideoElement;
    private provider: BasicImageBitmapProvider | undefined;
    private texture: Texture | undefined;

    init() {
        if (!this.material) {
            throw Error('video-texture: material property not set');
        }
        this.frameUpdateRequested = true;
    }

    start() {
        this.video = document.createElement('video');
        this.video.src = this.url;
        this.video.crossOrigin = 'anonymous';
        this.video.playsInline = true;
        this.video.loop = this.loop;
        this.video.muted = this.muted;
        // see https://issues.chromium.org/issues/40133966
        this.video.preload = 'auto';
        let makingProvider = false;
        this.video.addEventListener('loadeddata', () => {
            if (makingProvider) return;
            makingProvider = true;
            BasicImageBitmapProvider.fromVideo(this.video).then((provider) => {
                this.provider = provider;
            });
        });

        if (this.autoplay) {
            const playAfterUserGesture = () => {
                this.video.play();

                window.removeEventListener('click', playAfterUserGesture);
                window.removeEventListener('touchstart', playAfterUserGesture);
            };
            window.addEventListener('click', playAfterUserGesture);
            window.addEventListener('touchstart', playAfterUserGesture);
        }
    }

    applyTexture() {
        const mat = this.material;
        const texture = (this.texture = this.engine.textures.create(this.video));
        mat[this.textureSetter](texture);

        if ('requestVideoFrameCallback' in this.video) {
            this.video.requestVideoFrameCallback(this.updateVideo.bind(this));
        } else {
            (this.video as HTMLVideoElement).addEventListener('timeupdate', () => {
                this.provider.update().then(() => {
                    this.frameUpdateRequested = true;
                });
            });
        }
    }

    update(dt) {
        if (this.provider && this.frameUpdateRequested) {
            if (this.texture) {
                this.texture.update();
            } else {
                /* Apply texture on first frame update request */
                this.applyTexture();
            }
            this.frameUpdateRequested = false;
        }
    }

    updateVideo() {
        this.provider.update().then(() => {
            this.frameUpdateRequested = true;
        });
        this.video.requestVideoFrameCallback(this.updateVideo.bind(this));
    }
}
