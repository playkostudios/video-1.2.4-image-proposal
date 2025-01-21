var instantiateWonderlandRuntime =
    function(instantiateWonderlandRuntime = {}) {
        let callTotal = 0;
        let totalTime = 0;
        window.measureUploadAverage = function () {
            console.log(`Average texture upload time: ${totalTime / callTotal}ms (${callTotal} calls measured)`);
        }

        var Module = instantiateWonderlandRuntime;
        var readyPromiseResolve, readyPromiseReject;
        Module["ready"] = new Promise((resolve, reject) => {
            readyPromiseResolve = resolve;
            readyPromiseReject = reject
        });
        ["_ntohs", "_malloc", "_main", "_htons", "_free", "_wl_set_error_callback", "_wl_nextUpdate", "_wl_nextFrame", "_wl_deactivate_activeScene", "_wl_reset", "_wl_reset_context", "_wl_set_loading_screen_progress", "_wl_scene_set_sky_material", "_wl_scene_get_sky_material", "_wl_scene_environment_set_intensity", "_wl_scene_environment_get_intensity", "_wl_scene_environment_set_tint", "_wl_scene_environment_get_tint", "_wl_scene_environment_set_coefficients", "_wl_scene_environment_get_coefficients", "_wl_scene_set_clearColor", "_wl_scene_enableColorClear", "_wl_object_id", "_wl_object_index", "_wl_object_name", "_wl_object_set_name", "_wl_object_remove", "_wl_object_markedDestroyed", "_wl_object_clone", "_wl_object_trans_local", "_wl_object_trans_world", "_wl_object_trans_world_to_local", "_wl_object_scaling_world_to_local", "_wl_object_get_translation_local", "_wl_object_get_translation_world", "_wl_object_set_translation_local", "_wl_object_set_translation_world", "_wl_object_set_rotation_local", "_wl_object_set_rotation_world", "_wl_object_transformVectorWorld", "_wl_object_transformPointWorld", "_wl_object_transformVectorInverseWorld", "_wl_object_transformPointInverseWorld", "_wl_object_transformVectorLocal", "_wl_object_transformPointLocal", "_wl_object_transformVectorInverseLocal", "_wl_object_transformPointInverseLocal", "_wl_object_toWorldSpaceTransform", "_wl_object_toObjectSpaceTransform", "_wl_object_scaling_local", "_wl_object_scaling_world", "_wl_object_set_scaling_local", "_wl_object_set_scaling_world", "_wl_object_parent", "_wl_object_set_parent", "_wl_object_reset_translation_rotation", "_wl_object_reset_translation", "_wl_object_reset_rotation", "_wl_object_reset_scaling", "_wl_object_translate", "_wl_object_translate_obj", "_wl_object_translate_world", "_wl_object_rotate_axis_angle", "_wl_object_rotate_axis_angle_rad", "_wl_object_rotate_quat", "_wl_object_rotate_axis_angle_obj", "_wl_object_rotate_axis_angle_rad_obj", "_wl_object_rotate_quat_obj", "_wl_object_scale", "_wl_object_lookAt", "_wl_object_set_dirty", "_wl_object_get_children_count", "_wl_object_findByName", "_wl_object_findByNameRecursive", "_wl_object_get_children", "_wl_object_get_components", "_wl_object_get_component_types", "_wl_object_add_component", "_wl_object_add_js_component", "_wl_object_is_changed", "_wl_get_component_id", "_wl_component_get_object", "_wl_component_setActive", "_wl_component_isActive", "_wl_component_remove", "_wl_component_manager_name", "_wl_get_js_component_index", "_wl_get_js_component_index_for_id", "_wl_collision_component_get_collider", "_wl_collision_component_get_extents", "_wl_collision_component_get_group", "_wl_collision_component_set_collider", "_wl_collision_component_set_group", "_wl_collision_component_query_overlaps", "_wl_text_component_get_horizontal_alignment", "_wl_text_component_get_vertical_alignment", "_wl_text_component_get_character_spacing", "_wl_text_component_get_line_spacing", "_wl_text_component_get_effect", "_wl_text_component_get_wrapMode", "_wl_text_component_get_wrapWidth", "_wl_text_component_get_text", "_wl_animation_component_play", "_wl_animation_component_pause", "_wl_animation_component_stop", "_wl_animation_component_state", "_wl_animation_component_get_animation", "_wl_animation_component_set_animation", "_wl_animation_component_get_playCount", "_wl_animation_component_set_playCount", "_wl_animation_component_get_speed", "_wl_animation_component_set_speed", "_wl_animation_component_getGraphParamValue", "_wl_animation_component_setGraphParamValue", "_wl_animation_component_getGraphParamIndex", "_wl_animation_component_get_rootMotionMode", "_wl_animation_component_set_rootMotionMode", "_wl_animation_component_get_rootMotion_translation", "_wl_animation_component_get_rootMotion_rotation", "_wl_animation_component_get_iteration", "_wl_animation_component_get_position", "_wl_animation_component_get_duration", "_wl_animation_get_duration", "_wl_animation_get_trackCount", "_wl_animation_retarget", "_wl_animation_retargetToSkin", "_wl_text_component_set_horizontal_alignment", "_wl_text_component_set_vertical_alignment", "_wl_text_component_set_character_spacing", "_wl_text_component_set_line_spacing", "_wl_text_component_set_effect", "_wl_text_component_set_wrapMode", "_wl_text_component_set_wrapWidth", "_wl_text_component_set_text", "_wl_text_component_get_material", "_wl_text_component_get_boundingBox", "_wl_text_component_set_material", "_wl_view_component_get_projectionType", "_wl_view_component_set_projectionType", "_wl_view_component_get_projection_matrix", "_wl_view_component_get_near", "_wl_view_component_set_near", "_wl_view_component_get_far", "_wl_view_component_set_far", "_wl_view_component_get_fov", "_wl_view_component_set_fov", "_wl_view_component_get_extent", "_wl_view_component_set_extent", "_wl_input_component_get_type", "_wl_input_component_set_type", "_wl_light_component_get_color", "_wl_light_component_get_type", "_wl_light_component_set_type", "_wl_light_component_get_intensity", "_wl_light_component_set_intensity", "_wl_light_component_get_outerAngle", "_wl_light_component_set_outerAngle", "_wl_light_component_get_innerAngle", "_wl_light_component_set_innerAngle", "_wl_light_component_get_shadows", "_wl_light_component_set_shadows", "_wl_light_component_get_shadowRange", "_wl_light_component_set_shadowRange", "_wl_light_component_get_shadowBias", "_wl_light_component_set_shadowBias", "_wl_light_component_get_shadowNormalBias", "_wl_light_component_set_shadowNormalBias", "_wl_light_component_get_shadowTexelSize", "_wl_light_component_set_shadowTexelSize", "_wl_light_component_get_cascadeCount", "_wl_light_component_set_cascadeCount", "_wl_mesh_component_get_material", "_wl_mesh_component_set_material", "_wl_mesh_component_get_mesh", "_wl_mesh_component_set_mesh", "_wl_mesh_component_get_skin", "_wl_mesh_component_set_skin", "_wl_mesh_component_get_morph_targets", "_wl_mesh_component_set_morph_targets", "_wl_mesh_component_get_morph_target_weight", "_wl_mesh_component_get_morph_target_weights", "_wl_mesh_component_set_morph_target_weight", "_wl_mesh_component_set_morph_target_weights", "_wl_material_definition_get_param_count", "_wl_material_definition_get_param_name", "_wl_material_definition_get_param_type", "_wl_material_create", "_wl_material_clone", "_wl_material_get_definition", "_wl_material_get_param_value", "_wl_material_set_param_value_float", "_wl_material_set_param_value_uint", "_wl_material_get_pipeline", "_wl_mesh_destroy", "_wl_mesh_get_indexData", "_wl_mesh_get_vertexCount", "_wl_mesh_update", "_wl_mesh_create", "_wl_mesh_get_attribute", "_wl_mesh_set_attribute_values", "_wl_mesh_get_attribute_values", "_wl_mesh_get_boundingSphere", "_wl_font_get_emHeight", "_wl_font_get_capHeight", "_wl_font_get_xHeight", "_wl_font_get_outlineSize", "_wl_skin_joint_ids", "_wl_skin_inverse_bind_transforms", "_wl_skin_inverse_bind_scalings", "_wl_skin_get_joint_count", "_wl_morph_targets_get_target_count", "_wl_morph_targets_get_target_name", "_wl_morph_targets_get_target_index", "_wl_load_main_scene", "_wl_scene_create_chunked_start", "_wl_scene_create_chunked_end_main", "_wl_scene_create_chunked_next", "_wl_scene_create_chunked_abort", "_wl_scene_initialize", "_wl_get_images", "_wl_get_material_definition_count", "_wl_get_material_definition_index", "_wl_scene_create", "_wl_scene_create_chunked_end_prefab", "_wl_scene_create_chunked_buffer_size", "_wl_scene_create_chunked_end_queued", "_wl_scene_create_empty", "_wl_scene_destroy", "_wl_scene_instantiate", "_wl_scene_activate", "_wl_scene_queued_bin_count", "_wl_scene_queued_bin_path", "_wl_scene_clear_queued_bin_list", "_wl_scene_load_queued_bin", "_wl_scene_activatable", "_wl_scene_active", "_wl_scene_get_baseURL", "_wl_scene_get_filename", "_wl_scene_get_component_manager_index", "_wl_scene_get_active_views", "_wl_scene_ray_cast", "_wl_scene_add_object", "_wl_scene_add_objects", "_wl_scene_reserve_objects", "_wl_renderer_set_mesh_layout", "_wl_renderer_reserveImage", "_wl_renderer_updateImage", "_wl_renderer_streaming_idle", "_wl_image_create", "_wl_image_size", "_wl_image_get_jsImage_index", "_wl_texture_create", "_wl_texture_destroy", "_wl_texture_get_image_index", "_wl_i18n_setLanguage", "_wl_i18n_currentLanguage", "_wl_i18n_currentLanguageIndex", "_wl_i18n_translate", "_wl_i18n_languageCount", "_wl_i18n_languageIndex", "_wl_i18n_languageCode", "_wl_i18n_languageName", "_wl_i18n_languageFile", "_wl_math_cubicHermite", "_wl_application_version", "_wl_application_start", "_wl_application_stop", "_wl_application_resize", "_fflush", "onRuntimeInitialized"].forEach(prop => {
            if (!Object.getOwnPropertyDescriptor(Module["ready"], prop)) {
                Object.defineProperty(Module["ready"], prop, {
                    get: () => abort("You are getting " + prop + " on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js"),
                    set: () => abort("You are setting " + prop + " on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                })
            }
        });
        var ENVIRONMENT_IS_NODE = typeof process == "object";
        if (ENVIRONMENT_IS_NODE) {
            var fs = require("fs");
            Module["wasm"] = fs.readFileSync(__dirname + "/WonderlandRuntime-simd.wasm")
        }
        var out = text => console.log(text);
        var err = text => console.error(text);

        function ready() {
            readyPromiseResolve(Module);
            run()
        }
        Module.printErr = function(message) {
            const m = Array.prototype.slice.call(arguments).join(" ");
            if (m.startsWith("[w")) {
                console.warn(m)
            } else {
                console.error(m)
            }
        };
        Module.print = function(message) {
            console.log(Array.prototype.slice.call(arguments).join(" "))
        };
        if (typeof document !== "undefined") {
            if (!Module.canvas) {
                Module.canvas = document.getElementById("canvas");
                Module.canvas.addEventListener("webglcontextlost", function(e) {
                    console.error("Context lost:" + e)
                }, false)
            }
            Module.totalDependencies = 0;
            Module.monitorRunDependencies = function(left) {
                this.totalDependencies = Math.max(this.totalDependencies, left)
            }
        }

        function assert(condition, text) {
            if (!condition) throw text
        }

        function abort(what) {
            throw new Error(what)
        }
        var UTF8Decoder = typeof TextDecoder != "undefined" ? new TextDecoder("utf8") : undefined;

        function UTF8ArrayToString(heapOrArray, idx, maxBytesToRead) {
            var endIdx = idx + maxBytesToRead;
            var endPtr = idx;
            while (heapOrArray[endPtr] && !(endPtr >= endIdx)) ++endPtr;
            if (endPtr - idx > 16 && heapOrArray.buffer && UTF8Decoder) {
                return UTF8Decoder.decode(heapOrArray.subarray(idx, endPtr))
            }
            var str = "";
            while (idx < endPtr) {
                var u0 = heapOrArray[idx++];
                if (!(u0 & 128)) {
                    str += String.fromCharCode(u0);
                    continue
                }
                var u1 = heapOrArray[idx++] & 63;
                if ((u0 & 224) == 192) {
                    str += String.fromCharCode((u0 & 31) << 6 | u1);
                    continue
                }
                var u2 = heapOrArray[idx++] & 63;
                if ((u0 & 240) == 224) {
                    u0 = (u0 & 15) << 12 | u1 << 6 | u2
                } else {
                    if ((u0 & 248) != 240) warnOnce("Invalid UTF-8 leading byte " + ptrToString(u0) + " encountered when deserializing a UTF-8 string in wasm memory to a JS string!");
                    u0 = (u0 & 7) << 18 | u1 << 12 | u2 << 6 | heapOrArray[idx++] & 63
                }
                if (u0 < 65536) {
                    str += String.fromCharCode(u0)
                } else {
                    var ch = u0 - 65536;
                    str += String.fromCharCode(55296 | ch >> 10, 56320 | ch & 1023)
                }
            }
            return str
        }

        function UTF8ToString(ptr, maxBytesToRead) {
            assert(typeof ptr == "number");
            return ptr ? UTF8ArrayToString(HEAPU8, ptr, maxBytesToRead) : ""
        }

        function stringToUTF8Array(str, heap, outIdx, maxBytesToWrite) {
            if (!(maxBytesToWrite > 0)) return 0;
            var startIdx = outIdx;
            var endIdx = outIdx + maxBytesToWrite - 1;
            for (var i = 0; i < str.length; ++i) {
                var u = str.charCodeAt(i);
                if (u >= 55296 && u <= 57343) {
                    var u1 = str.charCodeAt(++i);
                    u = 65536 + ((u & 1023) << 10) | u1 & 1023
                }
                if (u <= 127) {
                    if (outIdx >= endIdx) break;
                    heap[outIdx++] = u
                } else if (u <= 2047) {
                    if (outIdx + 1 >= endIdx) break;
                    heap[outIdx++] = 192 | u >> 6;
                    heap[outIdx++] = 128 | u & 63
                } else if (u <= 65535) {
                    if (outIdx + 2 >= endIdx) break;
                    heap[outIdx++] = 224 | u >> 12;
                    heap[outIdx++] = 128 | u >> 6 & 63;
                    heap[outIdx++] = 128 | u & 63
                } else {
                    if (outIdx + 3 >= endIdx) break;
                    if (u > 1114111) warnOnce("Invalid Unicode code point " + ptrToString(u) + " encountered when serializing a JS string to a UTF-8 string in wasm memory! (Valid unicode code points should be in range 0-0x10FFFF).");
                    heap[outIdx++] = 240 | u >> 18;
                    heap[outIdx++] = 128 | u >> 12 & 63;
                    heap[outIdx++] = 128 | u >> 6 & 63;
                    heap[outIdx++] = 128 | u & 63
                }
            }
            heap[outIdx] = 0;
            return outIdx - startIdx
        }

        function stringToUTF8(str, outPtr, maxBytesToWrite) {
            assert(typeof maxBytesToWrite == "number", "stringToUTF8(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!");
            return stringToUTF8Array(str, HEAPU8, outPtr, maxBytesToWrite)
        }

        function lengthBytesUTF8(str) {
            var len = 0;
            for (var i = 0; i < str.length; ++i) {
                var c = str.charCodeAt(i);
                if (c <= 127) {
                    len++
                } else if (c <= 2047) {
                    len += 2
                } else if (c >= 55296 && c <= 57343) {
                    len += 4;
                    ++i
                } else {
                    len += 3
                }
            }
            return len
        }
        var HEAP8, HEAP16, HEAP32, HEAPU8, HEAPU16, HEAPU32, HEAPF32, HEAPF64, wasmMemory, wasmTable;

        function updateMemoryViews() {
            var b = wasmMemory.buffer;
            HEAP8 = new Int8Array(b);
            HEAP16 = new Int16Array(b);
            HEAP32 = new Int32Array(b);
            HEAPU8 = new Uint8Array(b);
            HEAPU16 = new Uint16Array(b);
            HEAPU32 = new Uint32Array(b);
            HEAPF32 = new Float32Array(b);
            HEAPF64 = new Float64Array(b)
        }

        function writeStackCookie() {
            var max = _emscripten_stack_get_end();
            assert((max & 3) == 0);
            if (max == 0) {
                max += 4
            }
            HEAPU32[max >> 2] = 34821223;
            HEAPU32[max + 4 >> 2] = 2310721022;
            HEAPU32[0] = 1668509029
        }

        function checkStackCookie() {
            var max = _emscripten_stack_get_end();
            if (max == 0) {
                max += 4
            }
            var cookie1 = HEAPU32[max >> 2];
            var cookie2 = HEAPU32[max + 4 >> 2];
            if (cookie1 != 34821223 || cookie2 != 2310721022) {
                abort("Stack overflow! Stack cookie has been overwritten at " + ptrToString(max) + ", expected hex dwords 0x89BACDFE and 0x2135467, but received " + ptrToString(cookie2) + " " + ptrToString(cookie1))
            }
            if (HEAPU32[0] !== 1668509029) {
                abort("Runtime error: The application has corrupted its heap memory area (address zero)!")
            }
        }(function() {
            var h16 = new Int16Array(1);
            var h8 = new Int8Array(h16.buffer);
            h16[0] = 25459;
            if (h8[0] !== 115 || h8[1] !== 99) throw "Runtime error: expected the system to be little-endian! (Run with -sSUPPORT_BIG_ENDIAN to bypass)"
        })();
        var runtimeInitialized = false;
        assert(Math.imul, "This browser does not support Math.imul(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill");
        assert(Math.fround, "This browser does not support Math.fround(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill");
        assert(Math.clz32, "This browser does not support Math.clz32(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill");
        assert(Math.trunc, "This browser does not support Math.trunc(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill");

        function ignoredModuleProp(prop) {
            if (Object.getOwnPropertyDescriptor(Module, prop)) {
                abort("`Module." + prop + "` was supplied but `" + prop + "` not included in INCOMING_MODULE_JS_API")
            }
        }

        function isExportedByForceFilesystem(name) {
            return name === "FS_createPath" || name === "FS_createDataFile" || name === "FS_createPreloadedFile" || name === "FS_unlink" || name === "addRunDependency" || name === "FS_createLazyFile" || name === "FS_createDevice" || name === "removeRunDependency"
        }

        function missingGlobal(sym, msg) {
            if (typeof globalThis !== "undefined") {
                Object.defineProperty(globalThis, sym, {
                    configurable: true,
                    get: function() {
                        warnOnce("`" + sym + "` is not longer defined by emscripten. " + msg);
                        return undefined
                    }
                })
            }
        }
        missingGlobal("buffer", "Please use HEAP8.buffer or wasmMemory.buffer");

        function missingLibrarySymbol(sym) {
            if (typeof globalThis !== "undefined" && !Object.getOwnPropertyDescriptor(globalThis, sym)) {
                Object.defineProperty(globalThis, sym, {
                    configurable: true,
                    get: function() {
                        var msg = "`" + sym + "` is a library symbol and not included by default; add it to your library.js __deps or to DEFAULT_LIBRARY_FUNCS_TO_INCLUDE on the command line";
                        var librarySymbol = sym;
                        if (!librarySymbol.startsWith("_")) {
                            librarySymbol = "$" + sym
                        }
                        msg += " (e.g. -sDEFAULT_LIBRARY_FUNCS_TO_INCLUDE=" + librarySymbol + ")";
                        if (isExportedByForceFilesystem(sym)) {
                            msg += ". Alternatively, forcing filesystem support (-sFORCE_FILESYSTEM) can export this for you"
                        }
                        warnOnce(msg);
                        return undefined
                    }
                })
            }
            unexportedRuntimeSymbol(sym)
        }

        function unexportedRuntimeSymbol(sym) {
            if (!Object.getOwnPropertyDescriptor(Module, sym)) {
                Object.defineProperty(Module, sym, {
                    configurable: true,
                    get: function() {
                        var msg = "'" + sym + "' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)";
                        if (isExportedByForceFilesystem(sym)) {
                            msg += ". Alternatively, forcing filesystem support (-sFORCE_FILESYSTEM) can export this for you"
                        }
                        abort(msg)
                    }
                })
            }
        }
        var ASM_CONSTS = {
            913300: () => {
                if (Module._loadingScreen === null) return 0;
                return Module._loadingScreen.byteLength
            },
            913390: $0 => {
                HEAP8.set(new Int8Array(Module._loadingScreen), $0);
                delete Module._loadingScreen
            },
            913477: ($0, $1) => {
                let image = new Image;
                image.crossOrigin = "anonymous";
                image.src = UTF8ToString($0, $1);
                const index = Module._images.length;
                Module._images.push(image);
                Module._imageTypes.push(1);
                return index
            },
            913654: () => {
                return parseInt(window.location.port || 80)
            },
            913705: () => {
                if (window.location.protocol === "https:") {
                    Module["websocket"] = Module["websocket"] || {};
                    Module["websocket"]["url"] = "wss://"
                }
            },
            913845: ($0, $1) => {
                const projectName = UTF8ToString($0, $1);
                const oldScript = document.getElementById("bundle");
                oldScript.parentElement.removeChild(oldScript);
                const jsFile = `${projectName}-bundle.js?t=${Date.now()}`;
                console.log("Reloading JavaScript", jsFile);
                const newScript = document.createElement("script");
                newScript.src = jsFile;
                newScript.id = "bundle";
                newScript.onload = function() {
                    Module._engine.scene.load(projectName + ".bin")
                };
                document.body.appendChild(newScript)
            },
            914323: () => {
                if (Module.webxr_session) Module.webxr_session.end().then(() => location.reload());
                else location.reload()
            },
            914434: $0 => {
                return stringToUTF8(window.location.hostname, $0, 64)
            },
            914495: () => {
                Module.webxr_textureType = "texture"
            },
            914539: () => {
                Module._engine.scene.onPreRender.notify()
            },
            914586: ($0, $1) => {
                setTimeout(() => dynCall("vi", $0, [$1]), 0)
            },
            914636: () => {
                Module._engine.scene.onPostRender.notify()
            },
            914684: ($0, $1) => {
                Module.webxr_session.addEventListener("visibilitychange", event => {
                    wasmTable.get($0).apply(null, [$1, {
                        "visible": 1
                    } [event.session.visibilityState]])
                })
            },
            914847: () => {
                return !Module.webxr_frame.baseLayer
            },
            914890: ($0, $1) => {
                const image = Module._images[$1];
                const imgType = Module._imageTypes[$1];
                const onLoad = function() {
                    if (_wl_renderer_reserveImage($0, $1)) {
                        _wl_renderer_updateImage($0, 0, 0)
                    }
                };
                if (imgType === 2) {
                    if (image.readyState >= 2) {
                        onLoad()
                    } else {
                        obj.addEventListener("loadeddata", () => {
                            if (obj.readyState >= 2) onLoad()
                        })
                    }
                    return
                }
                if (imgType === 3 || imgType === 4 || image.complete) {
                    onLoad();
                    return
                }
                image.onload = onLoad
            },
            915327: () => {
                const xr = Module._engine.xr;
                return xr && xr.frame && xr.frame.predictedDisplayTime || performance.now() || Date.now()
            },
            915456: ($0, $1, $2, $3, $4) => {
                performance.mark('tex-upload-start');
                const originalTex = GLctx.getParameter(GLctx.TEXTURE_BINDING_2D_ARRAY);
                const img = Module._images[$3];
                const w = img.videoWidth || img.width;
                const h = img.videoHeight || img.height;
                _glBindTexture(GLctx.TEXTURE_2D_ARRAY, $4);
                GLctx.pixelStorei(GLctx.UNPACK_FLIP_Y_WEBGL, true);
                GLctx.texSubImage3D(GLctx.TEXTURE_2D_ARRAY, 0, $0, $1, $2, w, h, 1, GLctx.RGBA, GLctx.UNSIGNED_BYTE, Module._imageTypes[$3] === 4 ? img.getData() : img);
                GLctx.pixelStorei(GLctx.UNPACK_FLIP_Y_WEBGL, false);
                GLctx.bindTexture(GLctx.TEXTURE_2D_ARRAY, originalTex);
                performance.mark('tex-upload-end');
                callTotal++;
                totalTime += performance.measure('tex-upload-duration', 'tex-upload-start', 'tex-upload-end').duration;
            },
            915959: ($0, $1) => {
                const s = UTF8ToString($0, $1);
                Module._log.info(0, s)
            },
            916021: ($0, $1) => {
                const s = UTF8ToString($0, $1);
                Module._log.warn(0, s)
            },
            916083: ($0, $1) => {
                const s = UTF8ToString($0, $1);
                Module._log.error(0, s)
            },
            916146: () => {
                if (!Module._log) {
                    Module._log = {};
                    Module._log.error = (_, message) => {
                        console.error(message)
                    };
                    Module._log.info = (_, message) => {
                        console.log(message)
                    };
                    Module._log.warn = (_, message) => {
                        console.warn(message)
                    }
                }
            },
            916378: () => {
                var match = navigator.userAgent.match(/Firefox\/(\d+)/);
                if (match) return match[1] | 0;
                return 0
            }
        };

        function getImageSize(i, dest) {
            HEAP32[dest >> 2] = Module._images[i].videoWidth || Module._images[i].width;
            HEAP32[(dest >> 2) + 1] = Module._images[i].videoHeight || Module._images[i].height
        }

        function ptrToString(ptr) {
            assert(typeof ptr === "number");
            return "0x" + ptr.toString(16).padStart(8, "0")
        }

        function warnOnce(text) {
            if (!warnOnce.shown) warnOnce.shown = {};
            if (!warnOnce.shown[text]) {
                warnOnce.shown[text] = 1;
                if (ENVIRONMENT_IS_NODE) text = "warning: " + text;
                err(text)
            }
        }

        function ExceptionInfo(excPtr) {
            this.excPtr = excPtr;
            this.ptr = excPtr - 24;
            this.set_type = function(type) {
                HEAPU32[this.ptr + 4 >> 2] = type
            };
            this.get_type = function() {
                return HEAPU32[this.ptr + 4 >> 2]
            };
            this.set_destructor = function(destructor) {
                HEAPU32[this.ptr + 8 >> 2] = destructor
            };
            this.get_destructor = function() {
                return HEAPU32[this.ptr + 8 >> 2]
            };
            this.set_refcount = function(refcount) {
                HEAP32[this.ptr >> 2] = refcount
            };
            this.set_caught = function(caught) {
                caught = caught ? 1 : 0;
                HEAP8[this.ptr + 12 >> 0] = caught
            };
            this.get_caught = function() {
                return HEAP8[this.ptr + 12 >> 0] != 0
            };
            this.set_rethrown = function(rethrown) {
                rethrown = rethrown ? 1 : 0;
                HEAP8[this.ptr + 13 >> 0] = rethrown
            };
            this.get_rethrown = function() {
                return HEAP8[this.ptr + 13 >> 0] != 0
            };
            this.init = function(type, destructor) {
                this.set_adjusted_ptr(0);
                this.set_type(type);
                this.set_destructor(destructor);
                this.set_refcount(0);
                this.set_caught(false);
                this.set_rethrown(false)
            };
            this.add_ref = function() {
                var value = HEAP32[this.ptr >> 2];
                HEAP32[this.ptr >> 2] = value + 1
            };
            this.release_ref = function() {
                var prev = HEAP32[this.ptr >> 2];
                HEAP32[this.ptr >> 2] = prev - 1;
                assert(prev > 0);
                return prev === 1
            };
            this.set_adjusted_ptr = function(adjustedPtr) {
                HEAPU32[this.ptr + 16 >> 2] = adjustedPtr
            };
            this.get_adjusted_ptr = function() {
                return HEAPU32[this.ptr + 16 >> 2]
            };
            this.get_exception_ptr = function() {
                var isPointer = ___cxa_is_pointer_type(this.get_type());
                if (isPointer) {
                    return HEAPU32[this.excPtr >> 2]
                }
                var adjusted = this.get_adjusted_ptr();
                if (adjusted !== 0) return adjusted;
                return this.excPtr
            }
        }
        var exceptionLast = 0;
        var uncaughtExceptionCount = 0;

        function ___cxa_throw(ptr, type, destructor) {
            var info = new ExceptionInfo(ptr);
            info.init(type, destructor);
            exceptionLast = ptr;
            uncaughtExceptionCount++;
            throw ptr + " - Exception catching is disabled, this exception cannot be caught. Compile with -sNO_DISABLE_EXCEPTION_CATCHING or -sEXCEPTION_CATCHING_ALLOWED=[..] to catch."
        }
        var PATH = {
            isAbs: path => path.charAt(0) === "/",
            splitPath: filename => {
                var splitPathRe = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
                return splitPathRe.exec(filename).slice(1)
            },
            normalizeArray: (parts, allowAboveRoot) => {
                var up = 0;
                for (var i = parts.length - 1; i >= 0; i--) {
                    var last = parts[i];
                    if (last === ".") {
                        parts.splice(i, 1)
                    } else if (last === "..") {
                        parts.splice(i, 1);
                        up++
                    } else if (up) {
                        parts.splice(i, 1);
                        up--
                    }
                }
                if (allowAboveRoot) {
                    for (; up; up--) {
                        parts.unshift("..")
                    }
                }
                return parts
            },
            normalize: path => {
                var isAbsolute = PATH.isAbs(path),
                    trailingSlash = path.substr(-1) === "/";
                path = PATH.normalizeArray(path.split("/").filter(p => !!p), !isAbsolute).join("/");
                if (!path && !isAbsolute) {
                    path = "."
                }
                if (path && trailingSlash) {
                    path += "/"
                }
                return (isAbsolute ? "/" : "") + path
            },
            dirname: path => {
                var result = PATH.splitPath(path),
                    root = result[0],
                    dir = result[1];
                if (!root && !dir) {
                    return "."
                }
                if (dir) {
                    dir = dir.substr(0, dir.length - 1)
                }
                return root + dir
            },
            basename: path => {
                if (path === "/") return "/";
                path = PATH.normalize(path);
                path = path.replace(/\/$/, "");
                var lastSlash = path.lastIndexOf("/");
                if (lastSlash === -1) return path;
                return path.substr(lastSlash + 1)
            },
            join: function() {
                var paths = Array.prototype.slice.call(arguments);
                return PATH.normalize(paths.join("/"))
            },
            join2: (l, r) => {
                return PATH.normalize(l + "/" + r)
            }
        };

        function getRandomDevice() {
            if (typeof crypto == "object" && typeof crypto["getRandomValues"] == "function") {
                var randomBuffer = new Uint8Array(1);
                return () => {
                    crypto.getRandomValues(randomBuffer);
                    return randomBuffer[0]
                }
            } else if (ENVIRONMENT_IS_NODE) {
                try {
                    var crypto_module = require("crypto");
                    return () => crypto_module["randomBytes"](1)[0]
                } catch (e) {}
            }
            return () => abort("no cryptographic support found for randomDevice. consider polyfilling it if you want to use something insecure like Math.random(), e.g. put this in a --pre-js: var crypto = { getRandomValues: function(array) { for (var i = 0; i < array.length; i++) array[i] = (Math.random()*256)|0 } };")
        }
        var PATH_FS = {
            resolve: function() {
                var resolvedPath = "",
                    resolvedAbsolute = false;
                for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
                    var path = i >= 0 ? arguments[i] : FS.cwd();
                    if (typeof path != "string") {
                        throw new TypeError("Arguments to path.resolve must be strings")
                    } else if (!path) {
                        return ""
                    }
                    resolvedPath = path + "/" + resolvedPath;
                    resolvedAbsolute = PATH.isAbs(path)
                }
                resolvedPath = PATH.normalizeArray(resolvedPath.split("/").filter(p => !!p), !resolvedAbsolute).join("/");
                return (resolvedAbsolute ? "/" : "") + resolvedPath || "."
            },
            relative: (from, to) => {
                from = PATH_FS.resolve(from).substr(1);
                to = PATH_FS.resolve(to).substr(1);

                function trim(arr) {
                    var start = 0;
                    for (; start < arr.length; start++) {
                        if (arr[start] !== "") break
                    }
                    var end = arr.length - 1;
                    for (; end >= 0; end--) {
                        if (arr[end] !== "") break
                    }
                    if (start > end) return [];
                    return arr.slice(start, end - start + 1)
                }
                var fromParts = trim(from.split("/"));
                var toParts = trim(to.split("/"));
                var length = Math.min(fromParts.length, toParts.length);
                var samePartsLength = length;
                for (var i = 0; i < length; i++) {
                    if (fromParts[i] !== toParts[i]) {
                        samePartsLength = i;
                        break
                    }
                }
                var outputParts = [];
                for (var i = samePartsLength; i < fromParts.length; i++) {
                    outputParts.push("..")
                }
                outputParts = outputParts.concat(toParts.slice(samePartsLength));
                return outputParts.join("/")
            }
        };

        function intArrayFromString(stringy, dontAddNull, length) {
            var len = length > 0 ? length : lengthBytesUTF8(stringy) + 1;
            var u8array = new Array(len);
            var numBytesWritten = stringToUTF8Array(stringy, u8array, 0, u8array.length);
            if (dontAddNull) u8array.length = numBytesWritten;
            return u8array
        }
        var TTY = {
            ttys: [],
            init: function() {},
            shutdown: function() {},
            register: function(dev, ops) {
                TTY.ttys[dev] = {
                    input: [],
                    output: [],
                    ops: ops
                };
                FS.registerDevice(dev, TTY.stream_ops)
            },
            stream_ops: {
                open: function(stream) {
                    var tty = TTY.ttys[stream.node.rdev];
                    if (!tty) {
                        throw new FS.ErrnoError(43)
                    }
                    stream.tty = tty;
                    stream.seekable = false
                },
                close: function(stream) {
                    stream.tty.ops.fsync(stream.tty)
                },
                fsync: function(stream) {
                    stream.tty.ops.fsync(stream.tty)
                },
                read: function(stream, buffer, offset, length, pos) {
                    if (!stream.tty || !stream.tty.ops.get_char) {
                        throw new FS.ErrnoError(60)
                    }
                    var bytesRead = 0;
                    for (var i = 0; i < length; i++) {
                        var result;
                        try {
                            result = stream.tty.ops.get_char(stream.tty)
                        } catch (e) {
                            throw new FS.ErrnoError(29)
                        }
                        if (result === undefined && bytesRead === 0) {
                            throw new FS.ErrnoError(6)
                        }
                        if (result === null || result === undefined) break;
                        bytesRead++;
                        buffer[offset + i] = result
                    }
                    if (bytesRead) {
                        stream.node.timestamp = Date.now()
                    }
                    return bytesRead
                },
                write: function(stream, buffer, offset, length, pos) {
                    if (!stream.tty || !stream.tty.ops.put_char) {
                        throw new FS.ErrnoError(60)
                    }
                    try {
                        for (var i = 0; i < length; i++) {
                            stream.tty.ops.put_char(stream.tty, buffer[offset + i])
                        }
                    } catch (e) {
                        throw new FS.ErrnoError(29)
                    }
                    if (length) {
                        stream.node.timestamp = Date.now()
                    }
                    return i
                }
            },
            default_tty_ops: {
                get_char: function(tty) {
                    if (!tty.input.length) {
                        var result = null;
                        if (ENVIRONMENT_IS_NODE) {
                            var BUFSIZE = 256;
                            var buf = Buffer.alloc(BUFSIZE);
                            var bytesRead = 0;
                            try {
                                bytesRead = fs.readSync(process.stdin.fd, buf, 0, BUFSIZE, -1)
                            } catch (e) {
                                if (e.toString().includes("EOF")) bytesRead = 0;
                                else throw e
                            }
                            if (bytesRead > 0) {
                                result = buf.slice(0, bytesRead).toString("utf-8")
                            } else {
                                result = null
                            }
                        } else if (typeof window != "undefined" && typeof window.prompt == "function") {
                            result = window.prompt("Input: ");
                            if (result !== null) {
                                result += "\n"
                            }
                        } else if (typeof readline == "function") {
                            result = readline();
                            if (result !== null) {
                                result += "\n"
                            }
                        }
                        if (!result) {
                            return null
                        }
                        tty.input = intArrayFromString(result, true)
                    }
                    return tty.input.shift()
                },
                put_char: function(tty, val) {
                    if (val === null || val === 10) {
                        out(UTF8ArrayToString(tty.output, 0));
                        tty.output = []
                    } else {
                        if (val != 0) tty.output.push(val)
                    }
                },
                fsync: function(tty) {
                    if (tty.output && tty.output.length > 0) {
                        out(UTF8ArrayToString(tty.output, 0));
                        tty.output = []
                    }
                }
            },
            default_tty1_ops: {
                put_char: function(tty, val) {
                    if (val === null || val === 10) {
                        err(UTF8ArrayToString(tty.output, 0));
                        tty.output = []
                    } else {
                        if (val != 0) tty.output.push(val)
                    }
                },
                fsync: function(tty) {
                    if (tty.output && tty.output.length > 0) {
                        err(UTF8ArrayToString(tty.output, 0));
                        tty.output = []
                    }
                }
            }
        };

        function zeroMemory(address, size) {
            HEAPU8.fill(0, address, address + size);
            return address
        }

        function mmapAlloc(size) {
            abort("internal error: mmapAlloc called but `emscripten_builtin_memalign` native symbol not exported")
        }
        var MEMFS = {
            ops_table: null,
            mount: function(mount) {
                return MEMFS.createNode(null, "/", 16384 | 511, 0)
            },
            createNode: function(parent, name, mode, dev) {
                if (FS.isBlkdev(mode) || FS.isFIFO(mode)) {
                    throw new FS.ErrnoError(63)
                }
                if (!MEMFS.ops_table) {
                    MEMFS.ops_table = {
                        dir: {
                            node: {
                                getattr: MEMFS.node_ops.getattr,
                                setattr: MEMFS.node_ops.setattr,
                                lookup: MEMFS.node_ops.lookup,
                                mknod: MEMFS.node_ops.mknod,
                                rename: MEMFS.node_ops.rename,
                                unlink: MEMFS.node_ops.unlink,
                                rmdir: MEMFS.node_ops.rmdir,
                                readdir: MEMFS.node_ops.readdir,
                                symlink: MEMFS.node_ops.symlink
                            },
                            stream: {
                                llseek: MEMFS.stream_ops.llseek
                            }
                        },
                        file: {
                            node: {
                                getattr: MEMFS.node_ops.getattr,
                                setattr: MEMFS.node_ops.setattr
                            },
                            stream: {
                                llseek: MEMFS.stream_ops.llseek,
                                read: MEMFS.stream_ops.read,
                                write: MEMFS.stream_ops.write,
                                allocate: MEMFS.stream_ops.allocate,
                                mmap: MEMFS.stream_ops.mmap,
                                msync: MEMFS.stream_ops.msync
                            }
                        },
                        link: {
                            node: {
                                getattr: MEMFS.node_ops.getattr,
                                setattr: MEMFS.node_ops.setattr,
                                readlink: MEMFS.node_ops.readlink
                            },
                            stream: {}
                        },
                        chrdev: {
                            node: {
                                getattr: MEMFS.node_ops.getattr,
                                setattr: MEMFS.node_ops.setattr
                            },
                            stream: FS.chrdev_stream_ops
                        }
                    }
                }
                var node = FS.createNode(parent, name, mode, dev);
                if (FS.isDir(node.mode)) {
                    node.node_ops = MEMFS.ops_table.dir.node;
                    node.stream_ops = MEMFS.ops_table.dir.stream;
                    node.contents = {}
                } else if (FS.isFile(node.mode)) {
                    node.node_ops = MEMFS.ops_table.file.node;
                    node.stream_ops = MEMFS.ops_table.file.stream;
                    node.usedBytes = 0;
                    node.contents = null
                } else if (FS.isLink(node.mode)) {
                    node.node_ops = MEMFS.ops_table.link.node;
                    node.stream_ops = MEMFS.ops_table.link.stream
                } else if (FS.isChrdev(node.mode)) {
                    node.node_ops = MEMFS.ops_table.chrdev.node;
                    node.stream_ops = MEMFS.ops_table.chrdev.stream
                }
                node.timestamp = Date.now();
                if (parent) {
                    parent.contents[name] = node;
                    parent.timestamp = node.timestamp
                }
                return node
            },
            getFileDataAsTypedArray: function(node) {
                if (!node.contents) return new Uint8Array(0);
                if (node.contents.subarray) return node.contents.subarray(0, node.usedBytes);
                return new Uint8Array(node.contents)
            },
            expandFileStorage: function(node, newCapacity) {
                var prevCapacity = node.contents ? node.contents.length : 0;
                if (prevCapacity >= newCapacity) return;
                var CAPACITY_DOUBLING_MAX = 1024 * 1024;
                newCapacity = Math.max(newCapacity, prevCapacity * (prevCapacity < CAPACITY_DOUBLING_MAX ? 2 : 1.125) >>> 0);
                if (prevCapacity != 0) newCapacity = Math.max(newCapacity, 256);
                var oldContents = node.contents;
                node.contents = new Uint8Array(newCapacity);
                if (node.usedBytes > 0) node.contents.set(oldContents.subarray(0, node.usedBytes), 0)
            },
            resizeFileStorage: function(node, newSize) {
                if (node.usedBytes == newSize) return;
                if (newSize == 0) {
                    node.contents = null;
                    node.usedBytes = 0
                } else {
                    var oldContents = node.contents;
                    node.contents = new Uint8Array(newSize);
                    if (oldContents) {
                        node.contents.set(oldContents.subarray(0, Math.min(newSize, node.usedBytes)))
                    }
                    node.usedBytes = newSize
                }
            },
            node_ops: {
                getattr: function(node) {
                    var attr = {};
                    attr.dev = FS.isChrdev(node.mode) ? node.id : 1;
                    attr.ino = node.id;
                    attr.mode = node.mode;
                    attr.nlink = 1;
                    attr.uid = 0;
                    attr.gid = 0;
                    attr.rdev = node.rdev;
                    if (FS.isDir(node.mode)) {
                        attr.size = 4096
                    } else if (FS.isFile(node.mode)) {
                        attr.size = node.usedBytes
                    } else if (FS.isLink(node.mode)) {
                        attr.size = node.link.length
                    } else {
                        attr.size = 0
                    }
                    attr.atime = new Date(node.timestamp);
                    attr.mtime = new Date(node.timestamp);
                    attr.ctime = new Date(node.timestamp);
                    attr.blksize = 4096;
                    attr.blocks = Math.ceil(attr.size / attr.blksize);
                    return attr
                },
                setattr: function(node, attr) {
                    if (attr.mode !== undefined) {
                        node.mode = attr.mode
                    }
                    if (attr.timestamp !== undefined) {
                        node.timestamp = attr.timestamp
                    }
                    if (attr.size !== undefined) {
                        MEMFS.resizeFileStorage(node, attr.size)
                    }
                },
                lookup: function(parent, name) {
                    throw FS.genericErrors[44]
                },
                mknod: function(parent, name, mode, dev) {
                    return MEMFS.createNode(parent, name, mode, dev)
                },
                rename: function(old_node, new_dir, new_name) {
                    if (FS.isDir(old_node.mode)) {
                        var new_node;
                        try {
                            new_node = FS.lookupNode(new_dir, new_name)
                        } catch (e) {}
                        if (new_node) {
                            for (var i in new_node.contents) {
                                throw new FS.ErrnoError(55)
                            }
                        }
                    }
                    delete old_node.parent.contents[old_node.name];
                    old_node.parent.timestamp = Date.now();
                    old_node.name = new_name;
                    new_dir.contents[new_name] = old_node;
                    new_dir.timestamp = old_node.parent.timestamp;
                    old_node.parent = new_dir
                },
                unlink: function(parent, name) {
                    delete parent.contents[name];
                    parent.timestamp = Date.now()
                },
                rmdir: function(parent, name) {
                    var node = FS.lookupNode(parent, name);
                    for (var i in node.contents) {
                        throw new FS.ErrnoError(55)
                    }
                    delete parent.contents[name];
                    parent.timestamp = Date.now()
                },
                readdir: function(node) {
                    var entries = [".", ".."];
                    for (var key in node.contents) {
                        if (!node.contents.hasOwnProperty(key)) {
                            continue
                        }
                        entries.push(key)
                    }
                    return entries
                },
                symlink: function(parent, newname, oldpath) {
                    var node = MEMFS.createNode(parent, newname, 511 | 40960, 0);
                    node.link = oldpath;
                    return node
                },
                readlink: function(node) {
                    if (!FS.isLink(node.mode)) {
                        throw new FS.ErrnoError(28)
                    }
                    return node.link
                }
            },
            stream_ops: {
                read: function(stream, buffer, offset, length, position) {
                    var contents = stream.node.contents;
                    if (position >= stream.node.usedBytes) return 0;
                    var size = Math.min(stream.node.usedBytes - position, length);
                    assert(size >= 0);
                    if (size > 8 && contents.subarray) {
                        buffer.set(contents.subarray(position, position + size), offset)
                    } else {
                        for (var i = 0; i < size; i++) buffer[offset + i] = contents[position + i]
                    }
                    return size
                },
                write: function(stream, buffer, offset, length, position, canOwn) {
                    assert(!(buffer instanceof ArrayBuffer));
                    if (buffer.buffer === HEAP8.buffer) {
                        canOwn = false
                    }
                    if (!length) return 0;
                    var node = stream.node;
                    node.timestamp = Date.now();
                    if (buffer.subarray && (!node.contents || node.contents.subarray)) {
                        if (canOwn) {
                            assert(position === 0, "canOwn must imply no weird position inside the file");
                            node.contents = buffer.subarray(offset, offset + length);
                            node.usedBytes = length;
                            return length
                        } else if (node.usedBytes === 0 && position === 0) {
                            node.contents = buffer.slice(offset, offset + length);
                            node.usedBytes = length;
                            return length
                        } else if (position + length <= node.usedBytes) {
                            node.contents.set(buffer.subarray(offset, offset + length), position);
                            return length
                        }
                    }
                    MEMFS.expandFileStorage(node, position + length);
                    if (node.contents.subarray && buffer.subarray) {
                        node.contents.set(buffer.subarray(offset, offset + length), position)
                    } else {
                        for (var i = 0; i < length; i++) {
                            node.contents[position + i] = buffer[offset + i]
                        }
                    }
                    node.usedBytes = Math.max(node.usedBytes, position + length);
                    return length
                },
                llseek: function(stream, offset, whence) {
                    var position = offset;
                    if (whence === 1) {
                        position += stream.position
                    } else if (whence === 2) {
                        if (FS.isFile(stream.node.mode)) {
                            position += stream.node.usedBytes
                        }
                    }
                    if (position < 0) {
                        throw new FS.ErrnoError(28)
                    }
                    return position
                },
                allocate: function(stream, offset, length) {
                    MEMFS.expandFileStorage(stream.node, offset + length);
                    stream.node.usedBytes = Math.max(stream.node.usedBytes, offset + length)
                },
                mmap: function(stream, length, position, prot, flags) {
                    if (!FS.isFile(stream.node.mode)) {
                        throw new FS.ErrnoError(43)
                    }
                    var ptr;
                    var allocated;
                    var contents = stream.node.contents;
                    if (!(flags & 2) && contents.buffer === HEAP8.buffer) {
                        allocated = false;
                        ptr = contents.byteOffset
                    } else {
                        if (position > 0 || position + length < contents.length) {
                            if (contents.subarray) {
                                contents = contents.subarray(position, position + length)
                            } else {
                                contents = Array.prototype.slice.call(contents, position, position + length)
                            }
                        }
                        allocated = true;
                        ptr = mmapAlloc(length);
                        if (!ptr) {
                            throw new FS.ErrnoError(48)
                        }
                        HEAP8.set(contents, ptr)
                    }
                    return {
                        ptr: ptr,
                        allocated: allocated
                    }
                },
                msync: function(stream, buffer, offset, length, mmapFlags) {
                    MEMFS.stream_ops.write(stream, buffer, 0, length, offset, false);
                    return 0
                }
            }
        };

        function asyncLoad(url, onload, onerror, noRunDep) {
            var dep = !noRunDep ? getUniqueRunDependency("al " + url) : "";
            readAsync(url, arrayBuffer => {
                assert(arrayBuffer, 'Loading data file "' + url + '" failed (no arrayBuffer).');
                onload(new Uint8Array(arrayBuffer));
                if (dep) removeRunDependency(dep)
            }, event => {
                if (onerror) {
                    onerror()
                } else {
                    throw 'Loading data file "' + url + '" failed.'
                }
            });
            if (dep) addRunDependency(dep)
        }
        var ERRNO_MESSAGES = {
            0: "Success",
            1: "Arg list too long",
            2: "Permission denied",
            3: "Address already in use",
            4: "Address not available",
            5: "Address family not supported by protocol family",
            6: "No more processes",
            7: "Socket already connected",
            8: "Bad file number",
            9: "Trying to read unreadable message",
            10: "Mount device busy",
            11: "Operation canceled",
            12: "No children",
            13: "Connection aborted",
            14: "Connection refused",
            15: "Connection reset by peer",
            16: "File locking deadlock error",
            17: "Destination address required",
            18: "Math arg out of domain of func",
            19: "Quota exceeded",
            20: "File exists",
            21: "Bad address",
            22: "File too large",
            23: "Host is unreachable",
            24: "Identifier removed",
            25: "Illegal byte sequence",
            26: "Connection already in progress",
            27: "Interrupted system call",
            28: "Invalid argument",
            29: "I/O error",
            30: "Socket is already connected",
            31: "Is a directory",
            32: "Too many symbolic links",
            33: "Too many open files",
            34: "Too many links",
            35: "Message too long",
            36: "Multihop attempted",
            37: "File or path name too long",
            38: "Network interface is not configured",
            39: "Connection reset by network",
            40: "Network is unreachable",
            41: "Too many open files in system",
            42: "No buffer space available",
            43: "No such device",
            44: "No such file or directory",
            45: "Exec format error",
            46: "No record locks available",
            47: "The link has been severed",
            48: "Not enough core",
            49: "No message of desired type",
            50: "Protocol not available",
            51: "No space left on device",
            52: "Function not implemented",
            53: "Socket is not connected",
            54: "Not a directory",
            55: "Directory not empty",
            56: "State not recoverable",
            57: "Socket operation on non-socket",
            59: "Not a typewriter",
            60: "No such device or address",
            61: "Value too large for defined data type",
            62: "Previous owner died",
            63: "Not super-user",
            64: "Broken pipe",
            65: "Protocol error",
            66: "Unknown protocol",
            67: "Protocol wrong type for socket",
            68: "Math result not representable",
            69: "Read only file system",
            70: "Illegal seek",
            71: "No such process",
            72: "Stale file handle",
            73: "Connection timed out",
            74: "Text file busy",
            75: "Cross-device link",
            100: "Device not a stream",
            101: "Bad font file fmt",
            102: "Invalid slot",
            103: "Invalid request code",
            104: "No anode",
            105: "Block device required",
            106: "Channel number out of range",
            107: "Level 3 halted",
            108: "Level 3 reset",
            109: "Link number out of range",
            110: "Protocol driver not attached",
            111: "No CSI structure available",
            112: "Level 2 halted",
            113: "Invalid exchange",
            114: "Invalid request descriptor",
            115: "Exchange full",
            116: "No data (for no delay io)",
            117: "Timer expired",
            118: "Out of streams resources",
            119: "Machine is not on the network",
            120: "Package not installed",
            121: "The object is remote",
            122: "Advertise error",
            123: "Srmount error",
            124: "Communication error on send",
            125: "Cross mount point (not really error)",
            126: "Given log. name not unique",
            127: "f.d. invalid for this operation",
            128: "Remote address changed",
            129: "Can   access a needed shared lib",
            130: "Accessing a corrupted shared lib",
            131: ".lib section in a.out corrupted",
            132: "Attempting to link in too many libs",
            133: "Attempting to exec a shared library",
            135: "Streams pipe error",
            136: "Too many users",
            137: "Socket type not supported",
            138: "Not supported",
            139: "Protocol family not supported",
            140: "Can't send after socket shutdown",
            141: "Too many references",
            142: "Host is down",
            148: "No medium (in tape drive)",
            156: "Level 2 not synchronized"
        };
        var ERRNO_CODES = {};
        var FS = {
            root: null,
            mounts: [],
            devices: {},
            streams: [],
            nextInode: 1,
            nameTable: null,
            currentPath: "/",
            initialized: false,
            ignorePermissions: true,
            ErrnoError: null,
            genericErrors: {},
            filesystems: null,
            syncFSRequests: 0,
            lookupPath: (path, opts = {}) => {
                path = PATH_FS.resolve(path);
                if (!path) return {
                    path: "",
                    node: null
                };
                var defaults = {
                    follow_mount: true,
                    recurse_count: 0
                };
                opts = Object.assign(defaults, opts);
                if (opts.recurse_count > 8) {
                    throw new FS.ErrnoError(32)
                }
                var parts = path.split("/").filter(p => !!p);
                var current = FS.root;
                var current_path = "/";
                for (var i = 0; i < parts.length; i++) {
                    var islast = i === parts.length - 1;
                    if (islast && opts.parent) {
                        break
                    }
                    current = FS.lookupNode(current, parts[i]);
                    current_path = PATH.join2(current_path, parts[i]);
                    if (FS.isMountpoint(current)) {
                        if (!islast || islast && opts.follow_mount) {
                            current = current.mounted.root
                        }
                    }
                    if (!islast || opts.follow) {
                        var count = 0;
                        while (FS.isLink(current.mode)) {
                            var link = FS.readlink(current_path);
                            current_path = PATH_FS.resolve(PATH.dirname(current_path), link);
                            var lookup = FS.lookupPath(current_path, {
                                recurse_count: opts.recurse_count + 1
                            });
                            current = lookup.node;
                            if (count++ > 40) {
                                throw new FS.ErrnoError(32)
                            }
                        }
                    }
                }
                return {
                    path: current_path,
                    node: current
                }
            },
            getPath: node => {
                var path;
                while (true) {
                    if (FS.isRoot(node)) {
                        var mount = node.mount.mountpoint;
                        if (!path) return mount;
                        return mount[mount.length - 1] !== "/" ? mount + "/" + path : mount + path
                    }
                    path = path ? node.name + "/" + path : node.name;
                    node = node.parent
                }
            },
            hashName: (parentid, name) => {
                var hash = 0;
                for (var i = 0; i < name.length; i++) {
                    hash = (hash << 5) - hash + name.charCodeAt(i) | 0
                }
                return (parentid + hash >>> 0) % FS.nameTable.length
            },
            hashAddNode: node => {
                var hash = FS.hashName(node.parent.id, node.name);
                node.name_next = FS.nameTable[hash];
                FS.nameTable[hash] = node
            },
            hashRemoveNode: node => {
                var hash = FS.hashName(node.parent.id, node.name);
                if (FS.nameTable[hash] === node) {
                    FS.nameTable[hash] = node.name_next
                } else {
                    var current = FS.nameTable[hash];
                    while (current) {
                        if (current.name_next === node) {
                            current.name_next = node.name_next;
                            break
                        }
                        current = current.name_next
                    }
                }
            },
            lookupNode: (parent, name) => {
                var errCode = FS.mayLookup(parent);
                if (errCode) {
                    throw new FS.ErrnoError(errCode, parent)
                }
                var hash = FS.hashName(parent.id, name);
                for (var node = FS.nameTable[hash]; node; node = node.name_next) {
                    var nodeName = node.name;
                    if (node.parent.id === parent.id && nodeName === name) {
                        return node
                    }
                }
                return FS.lookup(parent, name)
            },
            createNode: (parent, name, mode, rdev) => {
                assert(typeof parent == "object");
                var node = new FS.FSNode(parent, name, mode, rdev);
                FS.hashAddNode(node);
                return node
            },
            destroyNode: node => {
                FS.hashRemoveNode(node)
            },
            isRoot: node => {
                return node === node.parent
            },
            isMountpoint: node => {
                return !!node.mounted
            },
            isFile: mode => {
                return (mode & 61440) === 32768
            },
            isDir: mode => {
                return (mode & 61440) === 16384
            },
            isLink: mode => {
                return (mode & 61440) === 40960
            },
            isChrdev: mode => {
                return (mode & 61440) === 8192
            },
            isBlkdev: mode => {
                return (mode & 61440) === 24576
            },
            isFIFO: mode => {
                return (mode & 61440) === 4096
            },
            isSocket: mode => {
                return (mode & 49152) === 49152
            },
            flagModes: {
                "r": 0,
                "r+": 2,
                "w": 577,
                "w+": 578,
                "a": 1089,
                "a+": 1090
            },
            modeStringToFlags: str => {
                var flags = FS.flagModes[str];
                if (typeof flags == "undefined") {
                    throw new Error("Unknown file open mode: " + str)
                }
                return flags
            },
            flagsToPermissionString: flag => {
                var perms = ["r", "w", "rw"][flag & 3];
                if (flag & 512) {
                    perms += "w"
                }
                return perms
            },
            nodePermissions: (node, perms) => {
                if (FS.ignorePermissions) {
                    return 0
                }
                if (perms.includes("r") && !(node.mode & 292)) {
                    return 2
                } else if (perms.includes("w") && !(node.mode & 146)) {
                    return 2
                } else if (perms.includes("x") && !(node.mode & 73)) {
                    return 2
                }
                return 0
            },
            mayLookup: dir => {
                var errCode = FS.nodePermissions(dir, "x");
                if (errCode) return errCode;
                if (!dir.node_ops.lookup) return 2;
                return 0
            },
            mayCreate: (dir, name) => {
                try {
                    var node = FS.lookupNode(dir, name);
                    return 20
                } catch (e) {}
                return FS.nodePermissions(dir, "wx")
            },
            mayDelete: (dir, name, isdir) => {
                var node;
                try {
                    node = FS.lookupNode(dir, name)
                } catch (e) {
                    return e.errno
                }
                var errCode = FS.nodePermissions(dir, "wx");
                if (errCode) {
                    return errCode
                }
                if (isdir) {
                    if (!FS.isDir(node.mode)) {
                        return 54
                    }
                    if (FS.isRoot(node) || FS.getPath(node) === FS.cwd()) {
                        return 10
                    }
                } else {
                    if (FS.isDir(node.mode)) {
                        return 31
                    }
                }
                return 0
            },
            mayOpen: (node, flags) => {
                if (!node) {
                    return 44
                }
                if (FS.isLink(node.mode)) {
                    return 32
                } else if (FS.isDir(node.mode)) {
                    if (FS.flagsToPermissionString(flags) !== "r" || flags & 512) {
                        return 31
                    }
                }
                return FS.nodePermissions(node, FS.flagsToPermissionString(flags))
            },
            MAX_OPEN_FDS: 4096,
            nextfd: (fd_start = 0, fd_end = FS.MAX_OPEN_FDS) => {
                for (var fd = fd_start; fd <= fd_end; fd++) {
                    if (!FS.streams[fd]) {
                        return fd
                    }
                }
                throw new FS.ErrnoError(33)
            },
            getStream: fd => FS.streams[fd],
            createStream: (stream, fd_start, fd_end) => {
                if (!FS.FSStream) {
                    FS.FSStream = function() {
                        this.shared = {}
                    };
                    FS.FSStream.prototype = {};
                    Object.defineProperties(FS.FSStream.prototype, {
                        object: {
                            get: function() {
                                return this.node
                            },
                            set: function(val) {
                                this.node = val
                            }
                        },
                        isRead: {
                            get: function() {
                                return (this.flags & 2097155) !== 1
                            }
                        },
                        isWrite: {
                            get: function() {
                                return (this.flags & 2097155) !== 0
                            }
                        },
                        isAppend: {
                            get: function() {
                                return this.flags & 1024
                            }
                        },
                        flags: {
                            get: function() {
                                return this.shared.flags
                            },
                            set: function(val) {
                                this.shared.flags = val
                            }
                        },
                        position: {
                            get: function() {
                                return this.shared.position
                            },
                            set: function(val) {
                                this.shared.position = val
                            }
                        }
                    })
                }
                stream = Object.assign(new FS.FSStream, stream);
                var fd = FS.nextfd(fd_start, fd_end);
                stream.fd = fd;
                FS.streams[fd] = stream;
                return stream
            },
            closeStream: fd => {
                FS.streams[fd] = null
            },
            chrdev_stream_ops: {
                open: stream => {
                    var device = FS.getDevice(stream.node.rdev);
                    stream.stream_ops = device.stream_ops;
                    if (stream.stream_ops.open) {
                        stream.stream_ops.open(stream)
                    }
                },
                llseek: () => {
                    throw new FS.ErrnoError(70)
                }
            },
            major: dev => dev >> 8,
            minor: dev => dev & 255,
            makedev: (ma, mi) => ma << 8 | mi,
            registerDevice: (dev, ops) => {
                FS.devices[dev] = {
                    stream_ops: ops
                }
            },
            getDevice: dev => FS.devices[dev],
            getMounts: mount => {
                var mounts = [];
                var check = [mount];
                while (check.length) {
                    var m = check.pop();
                    mounts.push(m);
                    check.push.apply(check, m.mounts)
                }
                return mounts
            },
            syncfs: (populate, callback) => {
                if (typeof populate == "function") {
                    callback = populate;
                    populate = false
                }
                FS.syncFSRequests++;
                if (FS.syncFSRequests > 1) {
                    err("warning: " + FS.syncFSRequests + " FS.syncfs operations in flight at once, probably just doing extra work")
                }
                var mounts = FS.getMounts(FS.root.mount);
                var completed = 0;

                function doCallback(errCode) {
                    assert(FS.syncFSRequests > 0);
                    FS.syncFSRequests--;
                    return callback(errCode)
                }

                function done(errCode) {
                    if (errCode) {
                        if (!done.errored) {
                            done.errored = true;
                            return doCallback(errCode)
                        }
                        return
                    }
                    if (++completed >= mounts.length) {
                        doCallback(null)
                    }
                }
                mounts.forEach(mount => {
                    if (!mount.type.syncfs) {
                        return done(null)
                    }
                    mount.type.syncfs(mount, populate, done)
                })
            },
            mount: (type, opts, mountpoint) => {
                if (typeof type == "string") {
                    throw type
                }
                var root = mountpoint === "/";
                var pseudo = !mountpoint;
                var node;
                if (root && FS.root) {
                    throw new FS.ErrnoError(10)
                } else if (!root && !pseudo) {
                    var lookup = FS.lookupPath(mountpoint, {
                        follow_mount: false
                    });
                    mountpoint = lookup.path;
                    node = lookup.node;
                    if (FS.isMountpoint(node)) {
                        throw new FS.ErrnoError(10)
                    }
                    if (!FS.isDir(node.mode)) {
                        throw new FS.ErrnoError(54)
                    }
                }
                var mount = {
                    type: type,
                    opts: opts,
                    mountpoint: mountpoint,
                    mounts: []
                };
                var mountRoot = type.mount(mount);
                mountRoot.mount = mount;
                mount.root = mountRoot;
                if (root) {
                    FS.root = mountRoot
                } else if (node) {
                    node.mounted = mount;
                    if (node.mount) {
                        node.mount.mounts.push(mount)
                    }
                }
                return mountRoot
            },
            unmount: mountpoint => {
                var lookup = FS.lookupPath(mountpoint, {
                    follow_mount: false
                });
                if (!FS.isMountpoint(lookup.node)) {
                    throw new FS.ErrnoError(28)
                }
                var node = lookup.node;
                var mount = node.mounted;
                var mounts = FS.getMounts(mount);
                Object.keys(FS.nameTable).forEach(hash => {
                    var current = FS.nameTable[hash];
                    while (current) {
                        var next = current.name_next;
                        if (mounts.includes(current.mount)) {
                            FS.destroyNode(current)
                        }
                        current = next
                    }
                });
                node.mounted = null;
                var idx = node.mount.mounts.indexOf(mount);
                assert(idx !== -1);
                node.mount.mounts.splice(idx, 1)
            },
            lookup: (parent, name) => {
                return parent.node_ops.lookup(parent, name)
            },
            mknod: (path, mode, dev) => {
                var lookup = FS.lookupPath(path, {
                    parent: true
                });
                var parent = lookup.node;
                var name = PATH.basename(path);
                if (!name || name === "." || name === "..") {
                    throw new FS.ErrnoError(28)
                }
                var errCode = FS.mayCreate(parent, name);
                if (errCode) {
                    throw new FS.ErrnoError(errCode)
                }
                if (!parent.node_ops.mknod) {
                    throw new FS.ErrnoError(63)
                }
                return parent.node_ops.mknod(parent, name, mode, dev)
            },
            create: (path, mode) => {
                mode = mode !== undefined ? mode : 438;
                mode &= 4095;
                mode |= 32768;
                return FS.mknod(path, mode, 0)
            },
            mkdir: (path, mode) => {
                mode = mode !== undefined ? mode : 511;
                mode &= 511 | 512;
                mode |= 16384;
                return FS.mknod(path, mode, 0)
            },
            mkdirTree: (path, mode) => {
                var dirs = path.split("/");
                var d = "";
                for (var i = 0; i < dirs.length; ++i) {
                    if (!dirs[i]) continue;
                    d += "/" + dirs[i];
                    try {
                        FS.mkdir(d, mode)
                    } catch (e) {
                        if (e.errno != 20) throw e
                    }
                }
            },
            mkdev: (path, mode, dev) => {
                if (typeof dev == "undefined") {
                    dev = mode;
                    mode = 438
                }
                mode |= 8192;
                return FS.mknod(path, mode, dev)
            },
            symlink: (oldpath, newpath) => {
                if (!PATH_FS.resolve(oldpath)) {
                    throw new FS.ErrnoError(44)
                }
                var lookup = FS.lookupPath(newpath, {
                    parent: true
                });
                var parent = lookup.node;
                if (!parent) {
                    throw new FS.ErrnoError(44)
                }
                var newname = PATH.basename(newpath);
                var errCode = FS.mayCreate(parent, newname);
                if (errCode) {
                    throw new FS.ErrnoError(errCode)
                }
                if (!parent.node_ops.symlink) {
                    throw new FS.ErrnoError(63)
                }
                return parent.node_ops.symlink(parent, newname, oldpath)
            },
            rename: (old_path, new_path) => {
                var old_dirname = PATH.dirname(old_path);
                var new_dirname = PATH.dirname(new_path);
                var old_name = PATH.basename(old_path);
                var new_name = PATH.basename(new_path);
                var lookup, old_dir, new_dir;
                lookup = FS.lookupPath(old_path, {
                    parent: true
                });
                old_dir = lookup.node;
                lookup = FS.lookupPath(new_path, {
                    parent: true
                });
                new_dir = lookup.node;
                if (!old_dir || !new_dir) throw new FS.ErrnoError(44);
                if (old_dir.mount !== new_dir.mount) {
                    throw new FS.ErrnoError(75)
                }
                var old_node = FS.lookupNode(old_dir, old_name);
                var relative = PATH_FS.relative(old_path, new_dirname);
                if (relative.charAt(0) !== ".") {
                    throw new FS.ErrnoError(28)
                }
                relative = PATH_FS.relative(new_path, old_dirname);
                if (relative.charAt(0) !== ".") {
                    throw new FS.ErrnoError(55)
                }
                var new_node;
                try {
                    new_node = FS.lookupNode(new_dir, new_name)
                } catch (e) {}
                if (old_node === new_node) {
                    return
                }
                var isdir = FS.isDir(old_node.mode);
                var errCode = FS.mayDelete(old_dir, old_name, isdir);
                if (errCode) {
                    throw new FS.ErrnoError(errCode)
                }
                errCode = new_node ? FS.mayDelete(new_dir, new_name, isdir) : FS.mayCreate(new_dir, new_name);
                if (errCode) {
                    throw new FS.ErrnoError(errCode)
                }
                if (!old_dir.node_ops.rename) {
                    throw new FS.ErrnoError(63)
                }
                if (FS.isMountpoint(old_node) || new_node && FS.isMountpoint(new_node)) {
                    throw new FS.ErrnoError(10)
                }
                if (new_dir !== old_dir) {
                    errCode = FS.nodePermissions(old_dir, "w");
                    if (errCode) {
                        throw new FS.ErrnoError(errCode)
                    }
                }
                FS.hashRemoveNode(old_node);
                try {
                    old_dir.node_ops.rename(old_node, new_dir, new_name)
                } catch (e) {
                    throw e
                } finally {
                    FS.hashAddNode(old_node)
                }
            },
            rmdir: path => {
                var lookup = FS.lookupPath(path, {
                    parent: true
                });
                var parent = lookup.node;
                var name = PATH.basename(path);
                var node = FS.lookupNode(parent, name);
                var errCode = FS.mayDelete(parent, name, true);
                if (errCode) {
                    throw new FS.ErrnoError(errCode)
                }
                if (!parent.node_ops.rmdir) {
                    throw new FS.ErrnoError(63)
                }
                if (FS.isMountpoint(node)) {
                    throw new FS.ErrnoError(10)
                }
                parent.node_ops.rmdir(parent, name);
                FS.destroyNode(node)
            },
            readdir: path => {
                var lookup = FS.lookupPath(path, {
                    follow: true
                });
                var node = lookup.node;
                if (!node.node_ops.readdir) {
                    throw new FS.ErrnoError(54)
                }
                return node.node_ops.readdir(node)
            },
            unlink: path => {
                var lookup = FS.lookupPath(path, {
                    parent: true
                });
                var parent = lookup.node;
                if (!parent) {
                    throw new FS.ErrnoError(44)
                }
                var name = PATH.basename(path);
                var node = FS.lookupNode(parent, name);
                var errCode = FS.mayDelete(parent, name, false);
                if (errCode) {
                    throw new FS.ErrnoError(errCode)
                }
                if (!parent.node_ops.unlink) {
                    throw new FS.ErrnoError(63)
                }
                if (FS.isMountpoint(node)) {
                    throw new FS.ErrnoError(10)
                }
                parent.node_ops.unlink(parent, name);
                FS.destroyNode(node)
            },
            readlink: path => {
                var lookup = FS.lookupPath(path);
                var link = lookup.node;
                if (!link) {
                    throw new FS.ErrnoError(44)
                }
                if (!link.node_ops.readlink) {
                    throw new FS.ErrnoError(28)
                }
                return PATH_FS.resolve(FS.getPath(link.parent), link.node_ops.readlink(link))
            },
            stat: (path, dontFollow) => {
                var lookup = FS.lookupPath(path, {
                    follow: !dontFollow
                });
                var node = lookup.node;
                if (!node) {
                    throw new FS.ErrnoError(44)
                }
                if (!node.node_ops.getattr) {
                    throw new FS.ErrnoError(63)
                }
                return node.node_ops.getattr(node)
            },
            lstat: path => {
                return FS.stat(path, true)
            },
            chmod: (path, mode, dontFollow) => {
                var node;
                if (typeof path == "string") {
                    var lookup = FS.lookupPath(path, {
                        follow: !dontFollow
                    });
                    node = lookup.node
                } else {
                    node = path
                }
                if (!node.node_ops.setattr) {
                    throw new FS.ErrnoError(63)
                }
                node.node_ops.setattr(node, {
                    mode: mode & 4095 | node.mode & ~4095,
                    timestamp: Date.now()
                })
            },
            lchmod: (path, mode) => {
                FS.chmod(path, mode, true)
            },
            fchmod: (fd, mode) => {
                var stream = FS.getStream(fd);
                if (!stream) {
                    throw new FS.ErrnoError(8)
                }
                FS.chmod(stream.node, mode)
            },
            chown: (path, uid, gid, dontFollow) => {
                var node;
                if (typeof path == "string") {
                    var lookup = FS.lookupPath(path, {
                        follow: !dontFollow
                    });
                    node = lookup.node
                } else {
                    node = path
                }
                if (!node.node_ops.setattr) {
                    throw new FS.ErrnoError(63)
                }
                node.node_ops.setattr(node, {
                    timestamp: Date.now()
                })
            },
            lchown: (path, uid, gid) => {
                FS.chown(path, uid, gid, true)
            },
            fchown: (fd, uid, gid) => {
                var stream = FS.getStream(fd);
                if (!stream) {
                    throw new FS.ErrnoError(8)
                }
                FS.chown(stream.node, uid, gid)
            },
            truncate: (path, len) => {
                if (len < 0) {
                    throw new FS.ErrnoError(28)
                }
                var node;
                if (typeof path == "string") {
                    var lookup = FS.lookupPath(path, {
                        follow: true
                    });
                    node = lookup.node
                } else {
                    node = path
                }
                if (!node.node_ops.setattr) {
                    throw new FS.ErrnoError(63)
                }
                if (FS.isDir(node.mode)) {
                    throw new FS.ErrnoError(31)
                }
                if (!FS.isFile(node.mode)) {
                    throw new FS.ErrnoError(28)
                }
                var errCode = FS.nodePermissions(node, "w");
                if (errCode) {
                    throw new FS.ErrnoError(errCode)
                }
                node.node_ops.setattr(node, {
                    size: len,
                    timestamp: Date.now()
                })
            },
            ftruncate: (fd, len) => {
                var stream = FS.getStream(fd);
                if (!stream) {
                    throw new FS.ErrnoError(8)
                }
                if ((stream.flags & 2097155) === 0) {
                    throw new FS.ErrnoError(28)
                }
                FS.truncate(stream.node, len)
            },
            utime: (path, atime, mtime) => {
                var lookup = FS.lookupPath(path, {
                    follow: true
                });
                var node = lookup.node;
                node.node_ops.setattr(node, {
                    timestamp: Math.max(atime, mtime)
                })
            },
            open: (path, flags, mode) => {
                if (path === "") {
                    throw new FS.ErrnoError(44)
                }
                flags = typeof flags == "string" ? FS.modeStringToFlags(flags) : flags;
                mode = typeof mode == "undefined" ? 438 : mode;
                if (flags & 64) {
                    mode = mode & 4095 | 32768
                } else {
                    mode = 0
                }
                var node;
                if (typeof path == "object") {
                    node = path
                } else {
                    path = PATH.normalize(path);
                    try {
                        var lookup = FS.lookupPath(path, {
                            follow: !(flags & 131072)
                        });
                        node = lookup.node
                    } catch (e) {}
                }
                var created = false;
                if (flags & 64) {
                    if (node) {
                        if (flags & 128) {
                            throw new FS.ErrnoError(20)
                        }
                    } else {
                        node = FS.mknod(path, mode, 0);
                        created = true
                    }
                }
                if (!node) {
                    throw new FS.ErrnoError(44)
                }
                if (FS.isChrdev(node.mode)) {
                    flags &= ~512
                }
                if (flags & 65536 && !FS.isDir(node.mode)) {
                    throw new FS.ErrnoError(54)
                }
                if (!created) {
                    var errCode = FS.mayOpen(node, flags);
                    if (errCode) {
                        throw new FS.ErrnoError(errCode)
                    }
                }
                if (flags & 512 && !created) {
                    FS.truncate(node, 0)
                }
                flags &= ~(128 | 512 | 131072);
                var stream = FS.createStream({
                    node: node,
                    path: FS.getPath(node),
                    flags: flags,
                    seekable: true,
                    position: 0,
                    stream_ops: node.stream_ops,
                    ungotten: [],
                    error: false
                });
                if (stream.stream_ops.open) {
                    stream.stream_ops.open(stream)
                }
                if (Module["logReadFiles"] && !(flags & 1)) {
                    if (!FS.readFiles) FS.readFiles = {};
                    if (!(path in FS.readFiles)) {
                        FS.readFiles[path] = 1
                    }
                }
                return stream
            },
            close: stream => {
                if (FS.isClosed(stream)) {
                    throw new FS.ErrnoError(8)
                }
                if (stream.getdents) stream.getdents = null;
                try {
                    if (stream.stream_ops.close) {
                        stream.stream_ops.close(stream)
                    }
                } catch (e) {
                    throw e
                } finally {
                    FS.closeStream(stream.fd)
                }
                stream.fd = null
            },
            isClosed: stream => {
                return stream.fd === null
            },
            llseek: (stream, offset, whence) => {
                if (FS.isClosed(stream)) {
                    throw new FS.ErrnoError(8)
                }
                if (!stream.seekable || !stream.stream_ops.llseek) {
                    throw new FS.ErrnoError(70)
                }
                if (whence != 0 && whence != 1 && whence != 2) {
                    throw new FS.ErrnoError(28)
                }
                stream.position = stream.stream_ops.llseek(stream, offset, whence);
                stream.ungotten = [];
                return stream.position
            },
            read: (stream, buffer, offset, length, position) => {
                if (length < 0 || position < 0) {
                    throw new FS.ErrnoError(28)
                }
                if (FS.isClosed(stream)) {
                    throw new FS.ErrnoError(8)
                }
                if ((stream.flags & 2097155) === 1) {
                    throw new FS.ErrnoError(8)
                }
                if (FS.isDir(stream.node.mode)) {
                    throw new FS.ErrnoError(31)
                }
                if (!stream.stream_ops.read) {
                    throw new FS.ErrnoError(28)
                }
                var seeking = typeof position != "undefined";
                if (!seeking) {
                    position = stream.position
                } else if (!stream.seekable) {
                    throw new FS.ErrnoError(70)
                }
                var bytesRead = stream.stream_ops.read(stream, buffer, offset, length, position);
                if (!seeking) stream.position += bytesRead;
                return bytesRead
            },
            write: (stream, buffer, offset, length, position, canOwn) => {
                if (length < 0 || position < 0) {
                    throw new FS.ErrnoError(28)
                }
                if (FS.isClosed(stream)) {
                    throw new FS.ErrnoError(8)
                }
                if ((stream.flags & 2097155) === 0) {
                    throw new FS.ErrnoError(8)
                }
                if (FS.isDir(stream.node.mode)) {
                    throw new FS.ErrnoError(31)
                }
                if (!stream.stream_ops.write) {
                    throw new FS.ErrnoError(28)
                }
                if (stream.seekable && stream.flags & 1024) {
                    FS.llseek(stream, 0, 2)
                }
                var seeking = typeof position != "undefined";
                if (!seeking) {
                    position = stream.position
                } else if (!stream.seekable) {
                    throw new FS.ErrnoError(70)
                }
                var bytesWritten = stream.stream_ops.write(stream, buffer, offset, length, position, canOwn);
                if (!seeking) stream.position += bytesWritten;
                return bytesWritten
            },
            allocate: (stream, offset, length) => {
                if (FS.isClosed(stream)) {
                    throw new FS.ErrnoError(8)
                }
                if (offset < 0 || length <= 0) {
                    throw new FS.ErrnoError(28)
                }
                if ((stream.flags & 2097155) === 0) {
                    throw new FS.ErrnoError(8)
                }
                if (!FS.isFile(stream.node.mode) && !FS.isDir(stream.node.mode)) {
                    throw new FS.ErrnoError(43)
                }
                if (!stream.stream_ops.allocate) {
                    throw new FS.ErrnoError(138)
                }
                stream.stream_ops.allocate(stream, offset, length)
            },
            mmap: (stream, length, position, prot, flags) => {
                if ((prot & 2) !== 0 && (flags & 2) === 0 && (stream.flags & 2097155) !== 2) {
                    throw new FS.ErrnoError(2)
                }
                if ((stream.flags & 2097155) === 1) {
                    throw new FS.ErrnoError(2)
                }
                if (!stream.stream_ops.mmap) {
                    throw new FS.ErrnoError(43)
                }
                return stream.stream_ops.mmap(stream, length, position, prot, flags)
            },
            msync: (stream, buffer, offset, length, mmapFlags) => {
                if (!stream.stream_ops.msync) {
                    return 0
                }
                return stream.stream_ops.msync(stream, buffer, offset, length, mmapFlags)
            },
            munmap: stream => 0,
            ioctl: (stream, cmd, arg) => {
                if (!stream.stream_ops.ioctl) {
                    throw new FS.ErrnoError(59)
                }
                return stream.stream_ops.ioctl(stream, cmd, arg)
            },
            readFile: (path, opts = {}) => {
                opts.flags = opts.flags || 0;
                opts.encoding = opts.encoding || "binary";
                if (opts.encoding !== "utf8" && opts.encoding !== "binary") {
                    throw new Error('Invalid encoding type "' + opts.encoding + '"')
                }
                var ret;
                var stream = FS.open(path, opts.flags);
                var stat = FS.stat(path);
                var length = stat.size;
                var buf = new Uint8Array(length);
                FS.read(stream, buf, 0, length, 0);
                if (opts.encoding === "utf8") {
                    ret = UTF8ArrayToString(buf, 0)
                } else if (opts.encoding === "binary") {
                    ret = buf
                }
                FS.close(stream);
                return ret
            },
            writeFile: (path, data, opts = {}) => {
                opts.flags = opts.flags || 577;
                var stream = FS.open(path, opts.flags, opts.mode);
                if (typeof data == "string") {
                    var buf = new Uint8Array(lengthBytesUTF8(data) + 1);
                    var actualNumBytes = stringToUTF8Array(data, buf, 0, buf.length);
                    FS.write(stream, buf, 0, actualNumBytes, undefined, opts.canOwn)
                } else if (ArrayBuffer.isView(data)) {
                    FS.write(stream, data, 0, data.byteLength, undefined, opts.canOwn)
                } else {
                    throw new Error("Unsupported data type")
                }
                FS.close(stream)
            },
            cwd: () => FS.currentPath,
            chdir: path => {
                var lookup = FS.lookupPath(path, {
                    follow: true
                });
                if (lookup.node === null) {
                    throw new FS.ErrnoError(44)
                }
                if (!FS.isDir(lookup.node.mode)) {
                    throw new FS.ErrnoError(54)
                }
                var errCode = FS.nodePermissions(lookup.node, "x");
                if (errCode) {
                    throw new FS.ErrnoError(errCode)
                }
                FS.currentPath = lookup.path
            },
            createDefaultDirectories: () => {
                FS.mkdir("/tmp");
                FS.mkdir("/home");
                FS.mkdir("/home/web_user")
            },
            createDefaultDevices: () => {
                FS.mkdir("/dev");
                FS.registerDevice(FS.makedev(1, 3), {
                    read: () => 0,
                    write: (stream, buffer, offset, length, pos) => length
                });
                FS.mkdev("/dev/null", FS.makedev(1, 3));
                TTY.register(FS.makedev(5, 0), TTY.default_tty_ops);
                TTY.register(FS.makedev(6, 0), TTY.default_tty1_ops);
                FS.mkdev("/dev/tty", FS.makedev(5, 0));
                FS.mkdev("/dev/tty1", FS.makedev(6, 0));
                var random_device = getRandomDevice();
                FS.createDevice("/dev", "random", random_device);
                FS.createDevice("/dev", "urandom", random_device);
                FS.mkdir("/dev/shm");
                FS.mkdir("/dev/shm/tmp")
            },
            createSpecialDirectories: () => {
                FS.mkdir("/proc");
                var proc_self = FS.mkdir("/proc/self");
                FS.mkdir("/proc/self/fd");
                FS.mount({
                    mount: () => {
                        var node = FS.createNode(proc_self, "fd", 16384 | 511, 73);
                        node.node_ops = {
                            lookup: (parent, name) => {
                                var fd = +name;
                                var stream = FS.getStream(fd);
                                if (!stream) throw new FS.ErrnoError(8);
                                var ret = {
                                    parent: null,
                                    mount: {
                                        mountpoint: "fake"
                                    },
                                    node_ops: {
                                        readlink: () => stream.path
                                    }
                                };
                                ret.parent = ret;
                                return ret
                            }
                        };
                        return node
                    }
                }, {}, "/proc/self/fd")
            },
            createStandardStreams: () => {
                if (Module["stdin"]) {
                    FS.createDevice("/dev", "stdin", Module["stdin"])
                } else {
                    FS.symlink("/dev/tty", "/dev/stdin")
                }
                if (Module["stdout"]) {
                    FS.createDevice("/dev", "stdout", null, Module["stdout"])
                } else {
                    FS.symlink("/dev/tty", "/dev/stdout")
                }
                if (Module["stderr"]) {
                    FS.createDevice("/dev", "stderr", null, Module["stderr"])
                } else {
                    FS.symlink("/dev/tty1", "/dev/stderr")
                }
                var stdin = FS.open("/dev/stdin", 0);
                var stdout = FS.open("/dev/stdout", 1);
                var stderr = FS.open("/dev/stderr", 1);
                assert(stdin.fd === 0, "invalid handle for stdin (" + stdin.fd + ")");
                assert(stdout.fd === 1, "invalid handle for stdout (" + stdout.fd + ")");
                assert(stderr.fd === 2, "invalid handle for stderr (" + stderr.fd + ")")
            },
            ensureErrnoError: () => {
                if (FS.ErrnoError) return;
                FS.ErrnoError = function ErrnoError(errno, node) {
                    this.name = "ErrnoError";
                    this.node = node;
                    this.setErrno = function(errno) {
                        this.errno = errno;
                        for (var key in ERRNO_CODES) {
                            if (ERRNO_CODES[key] === errno) {
                                this.code = key;
                                break
                            }
                        }
                    };
                    this.setErrno(errno);
                    this.message = ERRNO_MESSAGES[errno]
                };
                FS.ErrnoError.prototype = new Error;
                FS.ErrnoError.prototype.constructor = FS.ErrnoError;
                [44].forEach(code => {
                    FS.genericErrors[code] = new FS.ErrnoError(code);
                    FS.genericErrors[code].stack = "<generic error, no stack>"
                })
            },
            staticInit: () => {
                FS.ensureErrnoError();
                FS.nameTable = new Array(4096);
                FS.mount(MEMFS, {}, "/");
                FS.createDefaultDirectories();
                FS.createDefaultDevices();
                FS.createSpecialDirectories();
                FS.filesystems = {
                    "MEMFS": MEMFS
                }
            },
            init: (input, output, error) => {
                assert(!FS.init.initialized, "FS.init was previously called. If you want to initialize later with custom parameters, remove any earlier calls (note that one is automatically added to the generated code)");
                FS.init.initialized = true;
                FS.ensureErrnoError();
                Module["stdin"] = input || Module["stdin"];
                Module["stdout"] = output || Module["stdout"];
                Module["stderr"] = error || Module["stderr"];
                FS.createStandardStreams()
            },
            quit: () => {
                FS.init.initialized = false;
                _fflush(0);
                for (var i = 0; i < FS.streams.length; i++) {
                    var stream = FS.streams[i];
                    if (!stream) {
                        continue
                    }
                    FS.close(stream)
                }
            },
            getMode: (canRead, canWrite) => {
                var mode = 0;
                if (canRead) mode |= 292 | 73;
                if (canWrite) mode |= 146;
                return mode
            },
            findObject: (path, dontResolveLastLink) => {
                var ret = FS.analyzePath(path, dontResolveLastLink);
                if (!ret.exists) {
                    return null
                }
                return ret.object
            },
            analyzePath: (path, dontResolveLastLink) => {
                try {
                    var lookup = FS.lookupPath(path, {
                        follow: !dontResolveLastLink
                    });
                    path = lookup.path
                } catch (e) {}
                var ret = {
                    isRoot: false,
                    exists: false,
                    error: 0,
                    name: null,
                    path: null,
                    object: null,
                    parentExists: false,
                    parentPath: null,
                    parentObject: null
                };
                try {
                    var lookup = FS.lookupPath(path, {
                        parent: true
                    });
                    ret.parentExists = true;
                    ret.parentPath = lookup.path;
                    ret.parentObject = lookup.node;
                    ret.name = PATH.basename(path);
                    lookup = FS.lookupPath(path, {
                        follow: !dontResolveLastLink
                    });
                    ret.exists = true;
                    ret.path = lookup.path;
                    ret.object = lookup.node;
                    ret.name = lookup.node.name;
                    ret.isRoot = lookup.path === "/"
                } catch (e) {
                    ret.error = e.errno
                }
                return ret
            },
            createPath: (parent, path, canRead, canWrite) => {
                parent = typeof parent == "string" ? parent : FS.getPath(parent);
                var parts = path.split("/").reverse();
                while (parts.length) {
                    var part = parts.pop();
                    if (!part) continue;
                    var current = PATH.join2(parent, part);
                    try {
                        FS.mkdir(current)
                    } catch (e) {}
                    parent = current
                }
                return current
            },
            createFile: (parent, name, properties, canRead, canWrite) => {
                var path = PATH.join2(typeof parent == "string" ? parent : FS.getPath(parent), name);
                var mode = FS.getMode(canRead, canWrite);
                return FS.create(path, mode)
            },
            createDataFile: (parent, name, data, canRead, canWrite, canOwn) => {
                var path = name;
                if (parent) {
                    parent = typeof parent == "string" ? parent : FS.getPath(parent);
                    path = name ? PATH.join2(parent, name) : parent
                }
                var mode = FS.getMode(canRead, canWrite);
                var node = FS.create(path, mode);
                if (data) {
                    if (typeof data == "string") {
                        var arr = new Array(data.length);
                        for (var i = 0, len = data.length; i < len; ++i) arr[i] = data.charCodeAt(i);
                        data = arr
                    }
                    FS.chmod(node, mode | 146);
                    var stream = FS.open(node, 577);
                    FS.write(stream, data, 0, data.length, 0, canOwn);
                    FS.close(stream);
                    FS.chmod(node, mode)
                }
                return node
            },
            createDevice: (parent, name, input, output) => {
                var path = PATH.join2(typeof parent == "string" ? parent : FS.getPath(parent), name);
                var mode = FS.getMode(!!input, !!output);
                if (!FS.createDevice.major) FS.createDevice.major = 64;
                var dev = FS.makedev(FS.createDevice.major++, 0);
                FS.registerDevice(dev, {
                    open: stream => {
                        stream.seekable = false
                    },
                    close: stream => {
                        if (output && output.buffer && output.buffer.length) {
                            output(10)
                        }
                    },
                    read: (stream, buffer, offset, length, pos) => {
                        var bytesRead = 0;
                        for (var i = 0; i < length; i++) {
                            var result;
                            try {
                                result = input()
                            } catch (e) {
                                throw new FS.ErrnoError(29)
                            }
                            if (result === undefined && bytesRead === 0) {
                                throw new FS.ErrnoError(6)
                            }
                            if (result === null || result === undefined) break;
                            bytesRead++;
                            buffer[offset + i] = result
                        }
                        if (bytesRead) {
                            stream.node.timestamp = Date.now()
                        }
                        return bytesRead
                    },
                    write: (stream, buffer, offset, length, pos) => {
                        for (var i = 0; i < length; i++) {
                            try {
                                output(buffer[offset + i])
                            } catch (e) {
                                throw new FS.ErrnoError(29)
                            }
                        }
                        if (length) {
                            stream.node.timestamp = Date.now()
                        }
                        return i
                    }
                });
                return FS.mkdev(path, mode, dev)
            },
            forceLoadFile: obj => {
                if (obj.isDevice || obj.isFolder || obj.link || obj.contents) return true;
                if (typeof XMLHttpRequest != "undefined") {
                    throw new Error("Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.")
                } else if (read_) {
                    try {
                        obj.contents = intArrayFromString(read_(obj.url), true);
                        obj.usedBytes = obj.contents.length
                    } catch (e) {
                        throw new FS.ErrnoError(29)
                    }
                } else {
                    throw new Error("Cannot load without read() or XMLHttpRequest.")
                }
            },
            createLazyFile: (parent, name, url, canRead, canWrite) => {
                function LazyUint8Array() {
                    this.lengthKnown = false;
                    this.chunks = []
                }
                LazyUint8Array.prototype.get = function LazyUint8Array_get(idx) {
                    if (idx > this.length - 1 || idx < 0) {
                        return undefined
                    }
                    var chunkOffset = idx % this.chunkSize;
                    var chunkNum = idx / this.chunkSize | 0;
                    return this.getter(chunkNum)[chunkOffset]
                };
                LazyUint8Array.prototype.setDataGetter = function LazyUint8Array_setDataGetter(getter) {
                    this.getter = getter
                };
                LazyUint8Array.prototype.cacheLength = function LazyUint8Array_cacheLength() {
                    var xhr = new XMLHttpRequest;
                    xhr.open("HEAD", url, false);
                    xhr.send(null);
                    if (!(xhr.status >= 200 && xhr.status < 300 || xhr.status === 304)) throw new Error("Couldn't load " + url + ". Status: " + xhr.status);
                    var datalength = Number(xhr.getResponseHeader("Content-length"));
                    var header;
                    var hasByteServing = (header = xhr.getResponseHeader("Accept-Ranges")) && header === "bytes";
                    var usesGzip = (header = xhr.getResponseHeader("Content-Encoding")) && header === "gzip";
                    var chunkSize = 1024 * 1024;
                    if (!hasByteServing) chunkSize = datalength;
                    var doXHR = (from, to) => {
                        if (from > to) throw new Error("invalid range (" + from + ", " + to + ") or no bytes requested!");
                        if (to > datalength - 1) throw new Error("only " + datalength + " bytes available! programmer error!");
                        var xhr = new XMLHttpRequest;
                        xhr.open("GET", url, false);
                        if (datalength !== chunkSize) xhr.setRequestHeader("Range", "bytes=" + from + "-" + to);
                        xhr.responseType = "arraybuffer";
                        if (xhr.overrideMimeType) {
                            xhr.overrideMimeType("text/plain; charset=x-user-defined")
                        }
                        xhr.send(null);
                        if (!(xhr.status >= 200 && xhr.status < 300 || xhr.status === 304)) throw new Error("Couldn't load " + url + ". Status: " + xhr.status);
                        if (xhr.response !== undefined) {
                            return new Uint8Array(xhr.response || [])
                        }
                        return intArrayFromString(xhr.responseText || "", true)
                    };
                    var lazyArray = this;
                    lazyArray.setDataGetter(chunkNum => {
                        var start = chunkNum * chunkSize;
                        var end = (chunkNum + 1) * chunkSize - 1;
                        end = Math.min(end, datalength - 1);
                        if (typeof lazyArray.chunks[chunkNum] == "undefined") {
                            lazyArray.chunks[chunkNum] = doXHR(start, end)
                        }
                        if (typeof lazyArray.chunks[chunkNum] == "undefined") throw new Error("doXHR failed!");
                        return lazyArray.chunks[chunkNum]
                    });
                    if (usesGzip || !datalength) {
                        chunkSize = datalength = 1;
                        datalength = this.getter(0).length;
                        chunkSize = datalength;
                        out("LazyFiles on gzip forces download of the whole file when length is accessed")
                    }
                    this._length = datalength;
                    this._chunkSize = chunkSize;
                    this.lengthKnown = true
                };
                if (typeof XMLHttpRequest != "undefined") {
                    if (!ENVIRONMENT_IS_WORKER) throw "Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc";
                    var lazyArray = new LazyUint8Array;
                    Object.defineProperties(lazyArray, {
                        length: {
                            get: function() {
                                if (!this.lengthKnown) {
                                    this.cacheLength()
                                }
                                return this._length
                            }
                        },
                        chunkSize: {
                            get: function() {
                                if (!this.lengthKnown) {
                                    this.cacheLength()
                                }
                                return this._chunkSize
                            }
                        }
                    });
                    var properties = {
                        isDevice: false,
                        contents: lazyArray
                    }
                } else {
                    var properties = {
                        isDevice: false,
                        url: url
                    }
                }
                var node = FS.createFile(parent, name, properties, canRead, canWrite);
                if (properties.contents) {
                    node.contents = properties.contents
                } else if (properties.url) {
                    node.contents = null;
                    node.url = properties.url
                }
                Object.defineProperties(node, {
                    usedBytes: {
                        get: function() {
                            return this.contents.length
                        }
                    }
                });
                var stream_ops = {};
                var keys = Object.keys(node.stream_ops);
                keys.forEach(key => {
                    var fn = node.stream_ops[key];
                    stream_ops[key] = function forceLoadLazyFile() {
                        FS.forceLoadFile(node);
                        return fn.apply(null, arguments)
                    }
                });

                function writeChunks(stream, buffer, offset, length, position) {
                    var contents = stream.node.contents;
                    if (position >= contents.length) return 0;
                    var size = Math.min(contents.length - position, length);
                    assert(size >= 0);
                    if (contents.slice) {
                        for (var i = 0; i < size; i++) {
                            buffer[offset + i] = contents[position + i]
                        }
                    } else {
                        for (var i = 0; i < size; i++) {
                            buffer[offset + i] = contents.get(position + i)
                        }
                    }
                    return size
                }
                stream_ops.read = (stream, buffer, offset, length, position) => {
                    FS.forceLoadFile(node);
                    return writeChunks(stream, buffer, offset, length, position)
                };
                stream_ops.mmap = (stream, length, position, prot, flags) => {
                    FS.forceLoadFile(node);
                    var ptr = mmapAlloc(length);
                    if (!ptr) {
                        throw new FS.ErrnoError(48)
                    }
                    writeChunks(stream, HEAP8, ptr, length, position);
                    return {
                        ptr: ptr,
                        allocated: true
                    }
                };
                node.stream_ops = stream_ops;
                return node
            },
            createPreloadedFile: (parent, name, url, canRead, canWrite, onload, onerror, dontCreateFile, canOwn, preFinish) => {
                var fullname = name ? PATH_FS.resolve(PATH.join2(parent, name)) : parent;
                var dep = getUniqueRunDependency("cp " + fullname);

                function processData(byteArray) {
                    function finish(byteArray) {
                        if (preFinish) preFinish();
                        if (!dontCreateFile) {
                            FS.createDataFile(parent, name, byteArray, canRead, canWrite, canOwn)
                        }
                        if (onload) onload();
                        removeRunDependency(dep)
                    }
                    if (Browser.handledByPreloadPlugin(byteArray, fullname, finish, () => {
                            if (onerror) onerror();
                            removeRunDependency(dep)
                        })) {
                        return
                    }
                    finish(byteArray)
                }
                addRunDependency(dep);
                if (typeof url == "string") {
                    asyncLoad(url, byteArray => processData(byteArray), onerror)
                } else {
                    processData(url)
                }
            },
            indexedDB: () => {
                return window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB
            },
            DB_NAME: () => {
                return "EM_FS_" + window.location.pathname
            },
            DB_VERSION: 20,
            DB_STORE_NAME: "FILE_DATA",
            saveFilesToDB: (paths, onload = (() => {}), onerror = (() => {})) => {
                var indexedDB = FS.indexedDB();
                try {
                    var openRequest = indexedDB.open(FS.DB_NAME(), FS.DB_VERSION)
                } catch (e) {
                    return onerror(e)
                }
                openRequest.onupgradeneeded = () => {
                    out("creating db");
                    var db = openRequest.result;
                    db.createObjectStore(FS.DB_STORE_NAME)
                };
                openRequest.onsuccess = () => {
                    var db = openRequest.result;
                    var transaction = db.transaction([FS.DB_STORE_NAME], "readwrite");
                    var files = transaction.objectStore(FS.DB_STORE_NAME);
                    var ok = 0,
                        fail = 0,
                        total = paths.length;

                    function finish() {
                        if (fail == 0) onload();
                        else onerror()
                    }
                    paths.forEach(path => {
                        var putRequest = files.put(FS.analyzePath(path).object.contents, path);
                        putRequest.onsuccess = () => {
                            ok++;
                            if (ok + fail == total) finish()
                        };
                        putRequest.onerror = () => {
                            fail++;
                            if (ok + fail == total) finish()
                        }
                    });
                    transaction.onerror = onerror
                };
                openRequest.onerror = onerror
            },
            loadFilesFromDB: (paths, onload = (() => {}), onerror = (() => {})) => {
                var indexedDB = FS.indexedDB();
                try {
                    var openRequest = indexedDB.open(FS.DB_NAME(), FS.DB_VERSION)
                } catch (e) {
                    return onerror(e)
                }
                openRequest.onupgradeneeded = onerror;
                openRequest.onsuccess = () => {
                    var db = openRequest.result;
                    try {
                        var transaction = db.transaction([FS.DB_STORE_NAME], "readonly")
                    } catch (e) {
                        onerror(e);
                        return
                    }
                    var files = transaction.objectStore(FS.DB_STORE_NAME);
                    var ok = 0,
                        fail = 0,
                        total = paths.length;

                    function finish() {
                        if (fail == 0) onload();
                        else onerror()
                    }
                    paths.forEach(path => {
                        var getRequest = files.get(path);
                        getRequest.onsuccess = () => {
                            if (FS.analyzePath(path).exists) {
                                FS.unlink(path)
                            }
                            FS.createDataFile(PATH.dirname(path), PATH.basename(path), getRequest.result, true, true, true);
                            ok++;
                            if (ok + fail == total) finish()
                        };
                        getRequest.onerror = () => {
                            fail++;
                            if (ok + fail == total) finish()
                        }
                    });
                    transaction.onerror = onerror
                };
                openRequest.onerror = onerror
            },
            absolutePath: () => {
                abort("FS.absolutePath has been removed; use PATH_FS.resolve instead")
            },
            createFolder: () => {
                abort("FS.createFolder has been removed; use FS.mkdir instead")
            },
            createLink: () => {
                abort("FS.createLink has been removed; use FS.symlink instead")
            },
            joinPath: () => {
                abort("FS.joinPath has been removed; use PATH.join instead")
            },
            mmapAlloc: () => {
                abort("FS.mmapAlloc has been replaced by the top level function mmapAlloc")
            },
            standardizePath: () => {
                abort("FS.standardizePath has been removed; use PATH.normalize instead")
            }
        };
        var SYSCALLS = {
            DEFAULT_POLLMASK: 5,
            calculateAt: function(dirfd, path, allowEmpty) {
                if (PATH.isAbs(path)) {
                    return path
                }
                var dir;
                if (dirfd === -100) {
                    dir = FS.cwd()
                } else {
                    var dirstream = SYSCALLS.getStreamFromFD(dirfd);
                    dir = dirstream.path
                }
                if (path.length == 0) {
                    if (!allowEmpty) {
                        throw new FS.ErrnoError(44)
                    }
                    return dir
                }
                return PATH.join2(dir, path)
            },
            doStat: function(func, path, buf) {
                try {
                    var stat = func(path)
                } catch (e) {
                    if (e && e.node && PATH.normalize(path) !== PATH.normalize(FS.getPath(e.node))) {
                        return -54
                    }
                    throw e
                }
                HEAP32[buf >> 2] = stat.dev;
                HEAP32[buf + 8 >> 2] = stat.ino;
                HEAP32[buf + 12 >> 2] = stat.mode;
                HEAPU32[buf + 16 >> 2] = stat.nlink;
                HEAP32[buf + 20 >> 2] = stat.uid;
                HEAP32[buf + 24 >> 2] = stat.gid;
                HEAP32[buf + 28 >> 2] = stat.rdev;
                tempI64 = [stat.size >>> 0, (tempDouble = stat.size, +Math.abs(tempDouble) >= 1 ? tempDouble > 0 ? (Math.min(+Math.floor(tempDouble / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math.ceil((tempDouble - +(~~tempDouble >>> 0)) / 4294967296) >>> 0 : 0)], HEAP32[buf + 40 >> 2] = tempI64[0], HEAP32[buf + 44 >> 2] = tempI64[1];
                HEAP32[buf + 48 >> 2] = 4096;
                HEAP32[buf + 52 >> 2] = stat.blocks;
                var atime = stat.atime.getTime();
                var mtime = stat.mtime.getTime();
                var ctime = stat.ctime.getTime();
                tempI64 = [Math.floor(atime / 1e3) >>> 0, (tempDouble = Math.floor(atime / 1e3), +Math.abs(tempDouble) >= 1 ? tempDouble > 0 ? (Math.min(+Math.floor(tempDouble / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math.ceil((tempDouble - +(~~tempDouble >>> 0)) / 4294967296) >>> 0 : 0)], HEAP32[buf + 56 >> 2] = tempI64[0], HEAP32[buf + 60 >> 2] = tempI64[1];
                HEAPU32[buf + 64 >> 2] = atime % 1e3 * 1e3;
                tempI64 = [Math.floor(mtime / 1e3) >>> 0, (tempDouble = Math.floor(mtime / 1e3), +Math.abs(tempDouble) >= 1 ? tempDouble > 0 ? (Math.min(+Math.floor(tempDouble / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math.ceil((tempDouble - +(~~tempDouble >>> 0)) / 4294967296) >>> 0 : 0)], HEAP32[buf + 72 >> 2] = tempI64[0], HEAP32[buf + 76 >> 2] = tempI64[1];
                HEAPU32[buf + 80 >> 2] = mtime % 1e3 * 1e3;
                tempI64 = [Math.floor(ctime / 1e3) >>> 0, (tempDouble = Math.floor(ctime / 1e3), +Math.abs(tempDouble) >= 1 ? tempDouble > 0 ? (Math.min(+Math.floor(tempDouble / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math.ceil((tempDouble - +(~~tempDouble >>> 0)) / 4294967296) >>> 0 : 0)], HEAP32[buf + 88 >> 2] = tempI64[0], HEAP32[buf + 92 >> 2] = tempI64[1];
                HEAPU32[buf + 96 >> 2] = ctime % 1e3 * 1e3;
                tempI64 = [stat.ino >>> 0, (tempDouble = stat.ino, +Math.abs(tempDouble) >= 1 ? tempDouble > 0 ? (Math.min(+Math.floor(tempDouble / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math.ceil((tempDouble - +(~~tempDouble >>> 0)) / 4294967296) >>> 0 : 0)], HEAP32[buf + 104 >> 2] = tempI64[0], HEAP32[buf + 108 >> 2] = tempI64[1];
                return 0
            },
            doMsync: function(addr, stream, len, flags, offset) {
                if (!FS.isFile(stream.node.mode)) {
                    throw new FS.ErrnoError(43)
                }
                if (flags & 2) {
                    return 0
                }
                var buffer = HEAPU8.slice(addr, addr + len);
                FS.msync(stream, buffer, offset, len, flags)
            },
            varargs: undefined,
            get: function() {
                assert(SYSCALLS.varargs != undefined);
                SYSCALLS.varargs += 4;
                var ret = HEAP32[SYSCALLS.varargs - 4 >> 2];
                return ret
            },
            getStr: function(ptr) {
                var ret = UTF8ToString(ptr);
                return ret
            },
            getStreamFromFD: function(fd) {
                var stream = FS.getStream(fd);
                if (!stream) throw new FS.ErrnoError(8);
                return stream
            }
        };

        function ___syscall__newselect(nfds, readfds, writefds, exceptfds, timeout) {
            try {
                assert(nfds <= 64, "nfds must be less than or equal to 64");
                assert(!exceptfds, "exceptfds not supported");
                var total = 0;
                var srcReadLow = readfds ? HEAP32[readfds >> 2] : 0,
                    srcReadHigh = readfds ? HEAP32[readfds + 4 >> 2] : 0;
                var srcWriteLow = writefds ? HEAP32[writefds >> 2] : 0,
                    srcWriteHigh = writefds ? HEAP32[writefds + 4 >> 2] : 0;
                var srcExceptLow = exceptfds ? HEAP32[exceptfds >> 2] : 0,
                    srcExceptHigh = exceptfds ? HEAP32[exceptfds + 4 >> 2] : 0;
                var dstReadLow = 0,
                    dstReadHigh = 0;
                var dstWriteLow = 0,
                    dstWriteHigh = 0;
                var dstExceptLow = 0,
                    dstExceptHigh = 0;
                var allLow = (readfds ? HEAP32[readfds >> 2] : 0) | (writefds ? HEAP32[writefds >> 2] : 0) | (exceptfds ? HEAP32[exceptfds >> 2] : 0);
                var allHigh = (readfds ? HEAP32[readfds + 4 >> 2] : 0) | (writefds ? HEAP32[writefds + 4 >> 2] : 0) | (exceptfds ? HEAP32[exceptfds + 4 >> 2] : 0);
                var check = function(fd, low, high, val) {
                    return fd < 32 ? low & val : high & val
                };
                for (var fd = 0; fd < nfds; fd++) {
                    var mask = 1 << fd % 32;
                    if (!check(fd, allLow, allHigh, mask)) {
                        continue
                    }
                    var stream = SYSCALLS.getStreamFromFD(fd);
                    var flags = SYSCALLS.DEFAULT_POLLMASK;
                    if (stream.stream_ops.poll) {
                        flags = stream.stream_ops.poll(stream)
                    }
                    if (flags & 1 && check(fd, srcReadLow, srcReadHigh, mask)) {
                        fd < 32 ? dstReadLow = dstReadLow | mask : dstReadHigh = dstReadHigh | mask;
                        total++
                    }
                    if (flags & 4 && check(fd, srcWriteLow, srcWriteHigh, mask)) {
                        fd < 32 ? dstWriteLow = dstWriteLow | mask : dstWriteHigh = dstWriteHigh | mask;
                        total++
                    }
                    if (flags & 2 && check(fd, srcExceptLow, srcExceptHigh, mask)) {
                        fd < 32 ? dstExceptLow = dstExceptLow | mask : dstExceptHigh = dstExceptHigh | mask;
                        total++
                    }
                }
                if (readfds) {
                    HEAP32[readfds >> 2] = dstReadLow;
                    HEAP32[readfds + 4 >> 2] = dstReadHigh
                }
                if (writefds) {
                    HEAP32[writefds >> 2] = dstWriteLow;
                    HEAP32[writefds + 4 >> 2] = dstWriteHigh
                }
                if (exceptfds) {
                    HEAP32[exceptfds >> 2] = dstExceptLow;
                    HEAP32[exceptfds + 4 >> 2] = dstExceptHigh
                }
                return total
            } catch (e) {
                if (typeof FS == "undefined" || !(e.name === "ErrnoError")) throw e;
                return -e.errno
            }
        }
        var SOCKFS = {
            mount: function(mount) {
                Module["websocket"] = Module["websocket"] && "object" === typeof Module["websocket"] ? Module["websocket"] : {};
                Module["websocket"]._callbacks = {};
                Module["websocket"]["on"] = function(event, callback) {
                    if ("function" === typeof callback) {
                        this._callbacks[event] = callback
                    }
                    return this
                };
                Module["websocket"].emit = function(event, param) {
                    if ("function" === typeof this._callbacks[event]) {
                        this._callbacks[event].call(this, param)
                    }
                };
                return FS.createNode(null, "/", 16384 | 511, 0)
            },
            createSocket: function(family, type, protocol) {
                type &= ~526336;
                var streaming = type == 1;
                if (streaming && protocol && protocol != 6) {
                    throw new FS.ErrnoError(66)
                }
                var sock = {
                    family: family,
                    type: type,
                    protocol: protocol,
                    server: null,
                    error: null,
                    peers: {},
                    pending: [],
                    recv_queue: [],
                    sock_ops: SOCKFS.websocket_sock_ops
                };
                var name = SOCKFS.nextname();
                var node = FS.createNode(SOCKFS.root, name, 49152, 0);
                node.sock = sock;
                var stream = FS.createStream({
                    path: name,
                    node: node,
                    flags: 2,
                    seekable: false,
                    stream_ops: SOCKFS.stream_ops
                });
                sock.stream = stream;
                return sock
            },
            getSocket: function(fd) {
                var stream = FS.getStream(fd);
                if (!stream || !FS.isSocket(stream.node.mode)) {
                    return null
                }
                return stream.node.sock
            },
            stream_ops: {
                poll: function(stream) {
                    var sock = stream.node.sock;
                    return sock.sock_ops.poll(sock)
                },
                ioctl: function(stream, request, varargs) {
                    var sock = stream.node.sock;
                    return sock.sock_ops.ioctl(sock, request, varargs)
                },
                read: function(stream, buffer, offset, length, position) {
                    var sock = stream.node.sock;
                    var msg = sock.sock_ops.recvmsg(sock, length);
                    if (!msg) {
                        return 0
                    }
                    buffer.set(msg.buffer, offset);
                    return msg.buffer.length
                },
                write: function(stream, buffer, offset, length, position) {
                    var sock = stream.node.sock;
                    return sock.sock_ops.sendmsg(sock, buffer, offset, length)
                },
                close: function(stream) {
                    var sock = stream.node.sock;
                    sock.sock_ops.close(sock)
                }
            },
            nextname: function() {
                if (!SOCKFS.nextname.current) {
                    SOCKFS.nextname.current = 0
                }
                return "socket[" + SOCKFS.nextname.current++ + "]"
            },
            websocket_sock_ops: {
                createPeer: function(sock, addr, port) {
                    var ws;
                    if (typeof addr == "object") {
                        ws = addr;
                        addr = null;
                        port = null
                    }
                    if (ws) {
                        if (ws._socket) {
                            addr = ws._socket.remoteAddress;
                            port = ws._socket.remotePort
                        } else {
                            var result = /ws[s]?:\/\/([^:]+):(\d+)/.exec(ws.url);
                            if (!result) {
                                throw new Error("WebSocket URL must be in the format ws(s)://address:port")
                            }
                            addr = result[1];
                            port = parseInt(result[2], 10)
                        }
                    } else {
                        try {
                            var runtimeConfig = Module["websocket"] && "object" === typeof Module["websocket"];
                            var url = "ws:#".replace("#", "//");
                            if (runtimeConfig) {
                                if ("string" === typeof Module["websocket"]["url"]) {
                                    url = Module["websocket"]["url"]
                                }
                            }
                            if (url === "ws://" || url === "wss://") {
                                var parts = addr.split("/");
                                url = url + parts[0] + ":" + port + "/" + parts.slice(1).join("/")
                            }
                            var subProtocols = "binary";
                            if (runtimeConfig) {
                                if ("string" === typeof Module["websocket"]["subprotocol"]) {
                                    subProtocols = Module["websocket"]["subprotocol"]
                                }
                            }
                            var opts = undefined;
                            if (subProtocols !== "null") {
                                subProtocols = subProtocols.replace(/^ +| +$/g, "").split(/ *, */);
                                opts = subProtocols
                            }
                            if (runtimeConfig && null === Module["websocket"]["subprotocol"]) {
                                subProtocols = "null";
                                opts = undefined
                            }
                            var WebSocketConstructor;
                            if (ENVIRONMENT_IS_NODE) {
                                WebSocketConstructor = require("ws")
                            } else {
                                WebSocketConstructor = WebSocket
                            }
                            ws = new WebSocketConstructor(url, opts);
                            ws.binaryType = "arraybuffer"
                        } catch (e) {
                            throw new FS.ErrnoError(23)
                        }
                    }
                    var peer = {
                        addr: addr,
                        port: port,
                        socket: ws,
                        dgram_send_queue: []
                    };
                    SOCKFS.websocket_sock_ops.addPeer(sock, peer);
                    SOCKFS.websocket_sock_ops.handlePeerEvents(sock, peer);
                    if (sock.type === 2 && typeof sock.sport != "undefined") {
                        peer.dgram_send_queue.push(new Uint8Array([255, 255, 255, 255, "p".charCodeAt(0), "o".charCodeAt(0), "r".charCodeAt(0), "t".charCodeAt(0), (sock.sport & 65280) >> 8, sock.sport & 255]))
                    }
                    return peer
                },
                getPeer: function(sock, addr, port) {
                    return sock.peers[addr + ":" + port]
                },
                addPeer: function(sock, peer) {
                    sock.peers[peer.addr + ":" + peer.port] = peer
                },
                removePeer: function(sock, peer) {
                    delete sock.peers[peer.addr + ":" + peer.port]
                },
                handlePeerEvents: function(sock, peer) {
                    var first = true;
                    var handleOpen = function() {
                        Module["websocket"].emit("open", sock.stream.fd);
                        try {
                            var queued = peer.dgram_send_queue.shift();
                            while (queued) {
                                peer.socket.send(queued);
                                queued = peer.dgram_send_queue.shift()
                            }
                        } catch (e) {
                            peer.socket.close()
                        }
                    };

                    function handleMessage(data) {
                        if (typeof data == "string") {
                            var encoder = new TextEncoder;
                            data = encoder.encode(data)
                        } else {
                            assert(data.byteLength !== undefined);
                            if (data.byteLength == 0) {
                                return
                            }
                            data = new Uint8Array(data)
                        }
                        var wasfirst = first;
                        first = false;
                        if (wasfirst && data.length === 10 && data[0] === 255 && data[1] === 255 && data[2] === 255 && data[3] === 255 && data[4] === "p".charCodeAt(0) && data[5] === "o".charCodeAt(0) && data[6] === "r".charCodeAt(0) && data[7] === "t".charCodeAt(0)) {
                            var newport = data[8] << 8 | data[9];
                            SOCKFS.websocket_sock_ops.removePeer(sock, peer);
                            peer.port = newport;
                            SOCKFS.websocket_sock_ops.addPeer(sock, peer);
                            return
                        }
                        sock.recv_queue.push({
                            addr: peer.addr,
                            port: peer.port,
                            data: data
                        });
                        Module["websocket"].emit("message", sock.stream.fd)
                    }
                    if (ENVIRONMENT_IS_NODE) {
                        peer.socket.on("open", handleOpen);
                        peer.socket.on("message", function(data, isBinary) {
                            if (!isBinary) {
                                return
                            }
                            handleMessage(new Uint8Array(data).buffer)
                        });
                        peer.socket.on("close", function() {
                            Module["websocket"].emit("close", sock.stream.fd)
                        });
                        peer.socket.on("error", function(error) {
                            sock.error = 14;
                            Module["websocket"].emit("error", [sock.stream.fd, sock.error, "ECONNREFUSED: Connection refused"])
                        })
                    } else {
                        peer.socket.onopen = handleOpen;
                        peer.socket.onclose = function() {
                            Module["websocket"].emit("close", sock.stream.fd)
                        };
                        peer.socket.onmessage = function peer_socket_onmessage(event) {
                            handleMessage(event.data)
                        };
                        peer.socket.onerror = function(error) {
                            sock.error = 14;
                            Module["websocket"].emit("error", [sock.stream.fd, sock.error, "ECONNREFUSED: Connection refused"])
                        }
                    }
                },
                poll: function(sock) {
                    if (sock.type === 1 && sock.server) {
                        return sock.pending.length ? 64 | 1 : 0
                    }
                    var mask = 0;
                    var dest = sock.type === 1 ? SOCKFS.websocket_sock_ops.getPeer(sock, sock.daddr, sock.dport) : null;
                    if (sock.recv_queue.length || !dest || dest && dest.socket.readyState === dest.socket.CLOSING || dest && dest.socket.readyState === dest.socket.CLOSED) {
                        mask |= 64 | 1
                    }
                    if (!dest || dest && dest.socket.readyState === dest.socket.OPEN) {
                        mask |= 4
                    }
                    if (dest && dest.socket.readyState === dest.socket.CLOSING || dest && dest.socket.readyState === dest.socket.CLOSED) {
                        mask |= 16
                    }
                    return mask
                },
                ioctl: function(sock, request, arg) {
                    switch (request) {
                        case 21531:
                            var bytes = 0;
                            if (sock.recv_queue.length) {
                                bytes = sock.recv_queue[0].data.length
                            }
                            HEAP32[arg >> 2] = bytes;
                            return 0;
                        default:
                            return 28
                    }
                },
                close: function(sock) {
                    if (sock.server) {
                        try {
                            sock.server.close()
                        } catch (e) {}
                        sock.server = null
                    }
                    var peers = Object.keys(sock.peers);
                    for (var i = 0; i < peers.length; i++) {
                        var peer = sock.peers[peers[i]];
                        try {
                            peer.socket.close()
                        } catch (e) {}
                        SOCKFS.websocket_sock_ops.removePeer(sock, peer)
                    }
                    return 0
                },
                bind: function(sock, addr, port) {
                    if (typeof sock.saddr != "undefined" || typeof sock.sport != "undefined") {
                        throw new FS.ErrnoError(28)
                    }
                    sock.saddr = addr;
                    sock.sport = port;
                    if (sock.type === 2) {
                        if (sock.server) {
                            sock.server.close();
                            sock.server = null
                        }
                        try {
                            sock.sock_ops.listen(sock, 0)
                        } catch (e) {
                            if (!(e.name === "ErrnoError")) throw e;
                            if (e.errno !== 138) throw e
                        }
                    }
                },
                connect: function(sock, addr, port) {
                    if (sock.server) {
                        throw new FS.ErrnoError(138)
                    }
                    if (typeof sock.daddr != "undefined" && typeof sock.dport != "undefined") {
                        var dest = SOCKFS.websocket_sock_ops.getPeer(sock, sock.daddr, sock.dport);
                        if (dest) {
                            if (dest.socket.readyState === dest.socket.CONNECTING) {
                                throw new FS.ErrnoError(7)
                            } else {
                                throw new FS.ErrnoError(30)
                            }
                        }
                    }
                    var peer = SOCKFS.websocket_sock_ops.createPeer(sock, addr, port);
                    sock.daddr = peer.addr;
                    sock.dport = peer.port;
                    throw new FS.ErrnoError(26)
                },
                listen: function(sock, backlog) {
                    if (!ENVIRONMENT_IS_NODE) {
                        throw new FS.ErrnoError(138)
                    }
                    if (sock.server) {
                        throw new FS.ErrnoError(28)
                    }
                    var WebSocketServer = require("ws").Server;
                    var host = sock.saddr;
                    sock.server = new WebSocketServer({
                        host: host,
                        port: sock.sport
                    });
                    Module["websocket"].emit("listen", sock.stream.fd);
                    sock.server.on("connection", function(ws) {
                        if (sock.type === 1) {
                            var newsock = SOCKFS.createSocket(sock.family, sock.type, sock.protocol);
                            var peer = SOCKFS.websocket_sock_ops.createPeer(newsock, ws);
                            newsock.daddr = peer.addr;
                            newsock.dport = peer.port;
                            sock.pending.push(newsock);
                            Module["websocket"].emit("connection", newsock.stream.fd)
                        } else {
                            SOCKFS.websocket_sock_ops.createPeer(sock, ws);
                            Module["websocket"].emit("connection", sock.stream.fd)
                        }
                    });
                    sock.server.on("close", function() {
                        Module["websocket"].emit("close", sock.stream.fd);
                        sock.server = null
                    });
                    sock.server.on("error", function(error) {
                        sock.error = 23;
                        Module["websocket"].emit("error", [sock.stream.fd, sock.error, "EHOSTUNREACH: Host is unreachable"])
                    })
                },
                accept: function(listensock) {
                    if (!listensock.server || !listensock.pending.length) {
                        throw new FS.ErrnoError(28)
                    }
                    var newsock = listensock.pending.shift();
                    newsock.stream.flags = listensock.stream.flags;
                    return newsock
                },
                getname: function(sock, peer) {
                    var addr, port;
                    if (peer) {
                        if (sock.daddr === undefined || sock.dport === undefined) {
                            throw new FS.ErrnoError(53)
                        }
                        addr = sock.daddr;
                        port = sock.dport
                    } else {
                        addr = sock.saddr || 0;
                        port = sock.sport || 0
                    }
                    return {
                        addr: addr,
                        port: port
                    }
                },
                sendmsg: function(sock, buffer, offset, length, addr, port) {
                    if (sock.type === 2) {
                        if (addr === undefined || port === undefined) {
                            addr = sock.daddr;
                            port = sock.dport
                        }
                        if (addr === undefined || port === undefined) {
                            throw new FS.ErrnoError(17)
                        }
                    } else {
                        addr = sock.daddr;
                        port = sock.dport
                    }
                    var dest = SOCKFS.websocket_sock_ops.getPeer(sock, addr, port);
                    if (sock.type === 1) {
                        if (!dest || dest.socket.readyState === dest.socket.CLOSING || dest.socket.readyState === dest.socket.CLOSED) {
                            throw new FS.ErrnoError(53)
                        } else if (dest.socket.readyState === dest.socket.CONNECTING) {
                            throw new FS.ErrnoError(6)
                        }
                    }
                    if (ArrayBuffer.isView(buffer)) {
                        offset += buffer.byteOffset;
                        buffer = buffer.buffer
                    }
                    var data;
                    data = buffer.slice(offset, offset + length);
                    if (sock.type === 2) {
                        if (!dest || dest.socket.readyState !== dest.socket.OPEN) {
                            if (!dest || dest.socket.readyState === dest.socket.CLOSING || dest.socket.readyState === dest.socket.CLOSED) {
                                dest = SOCKFS.websocket_sock_ops.createPeer(sock, addr, port)
                            }
                            dest.dgram_send_queue.push(data);
                            return length
                        }
                    }
                    try {
                        dest.socket.send(data);
                        return length
                    } catch (e) {
                        throw new FS.ErrnoError(28)
                    }
                },
                recvmsg: function(sock, length) {
                    if (sock.type === 1 && sock.server) {
                        throw new FS.ErrnoError(53)
                    }
                    var queued = sock.recv_queue.shift();
                    if (!queued) {
                        if (sock.type === 1) {
                            var dest = SOCKFS.websocket_sock_ops.getPeer(sock, sock.daddr, sock.dport);
                            if (!dest) {
                                throw new FS.ErrnoError(53)
                            }
                            if (dest.socket.readyState === dest.socket.CLOSING || dest.socket.readyState === dest.socket.CLOSED) {
                                return null
                            }
                            throw new FS.ErrnoError(6)
                        }
                        throw new FS.ErrnoError(6)
                    }
                    var queuedLength = queued.data.byteLength || queued.data.length;
                    var queuedOffset = queued.data.byteOffset || 0;
                    var queuedBuffer = queued.data.buffer || queued.data;
                    var bytesRead = Math.min(length, queuedLength);
                    var res = {
                        buffer: new Uint8Array(queuedBuffer, queuedOffset, bytesRead),
                        addr: queued.addr,
                        port: queued.port
                    };
                    if (sock.type === 1 && bytesRead < queuedLength) {
                        var bytesRemaining = queuedLength - bytesRead;
                        queued.data = new Uint8Array(queuedBuffer, queuedOffset + bytesRead, bytesRemaining);
                        sock.recv_queue.unshift(queued)
                    }
                    return res
                }
            }
        };

        function getSocketFromFD(fd) {
            var socket = SOCKFS.getSocket(fd);
            if (!socket) throw new FS.ErrnoError(8);
            return socket
        }

        function setErrNo(value) {
            err("failed to set errno from JS");
            return 0
        }

        function inetNtop4(addr) {
            return (addr & 255) + "." + (addr >> 8 & 255) + "." + (addr >> 16 & 255) + "." + (addr >> 24 & 255)
        }

        function inetNtop6(ints) {
            var str = "";
            var word = 0;
            var longest = 0;
            var lastzero = 0;
            var zstart = 0;
            var len = 0;
            var i = 0;
            var parts = [ints[0] & 65535, ints[0] >> 16, ints[1] & 65535, ints[1] >> 16, ints[2] & 65535, ints[2] >> 16, ints[3] & 65535, ints[3] >> 16];
            var hasipv4 = true;
            var v4part = "";
            for (i = 0; i < 5; i++) {
                if (parts[i] !== 0) {
                    hasipv4 = false;
                    break
                }
            }
            if (hasipv4) {
                v4part = inetNtop4(parts[6] | parts[7] << 16);
                if (parts[5] === -1) {
                    str = "::ffff:";
                    str += v4part;
                    return str
                }
                if (parts[5] === 0) {
                    str = "::";
                    if (v4part === "0.0.0.0") v4part = "";
                    if (v4part === "0.0.0.1") v4part = "1";
                    str += v4part;
                    return str
                }
            }
            for (word = 0; word < 8; word++) {
                if (parts[word] === 0) {
                    if (word - lastzero > 1) {
                        len = 0
                    }
                    lastzero = word;
                    len++
                }
                if (len > longest) {
                    longest = len;
                    zstart = word - longest + 1
                }
            }
            for (word = 0; word < 8; word++) {
                if (longest > 1) {
                    if (parts[word] === 0 && word >= zstart && word < zstart + longest) {
                        if (word === zstart) {
                            str += ":";
                            if (zstart === 0) str += ":"
                        }
                        continue
                    }
                }
                str += Number(_ntohs(parts[word] & 65535)).toString(16);
                str += word < 7 ? ":" : ""
            }
            return str
        }

        function readSockaddr(sa, salen) {
            var family = HEAP16[sa >> 1];
            var port = _ntohs(HEAPU16[sa + 2 >> 1]);
            var addr;
            switch (family) {
                case 2:
                    if (salen !== 16) {
                        return {
                            errno: 28
                        }
                    }
                    addr = HEAP32[sa + 4 >> 2];
                    addr = inetNtop4(addr);
                    break;
                case 10:
                    if (salen !== 28) {
                        return {
                            errno: 28
                        }
                    }
                    addr = [HEAP32[sa + 8 >> 2], HEAP32[sa + 12 >> 2], HEAP32[sa + 16 >> 2], HEAP32[sa + 20 >> 2]];
                    addr = inetNtop6(addr);
                    break;
                default:
                    return {
                        errno: 5
                    }
            }
            return {
                family: family,
                addr: addr,
                port: port
            }
        }

        function inetPton4(str) {
            var b = str.split(".");
            for (var i = 0; i < 4; i++) {
                var tmp = Number(b[i]);
                if (isNaN(tmp)) return null;
                b[i] = tmp
            }
            return (b[0] | b[1] << 8 | b[2] << 16 | b[3] << 24) >>> 0
        }

        function jstoi_q(str) {
            return parseInt(str)
        }

        function inetPton6(str) {
            var words;
            var w, offset, z;
            var valid6regx = /^((?=.*::)(?!.*::.+::)(::)?([\dA-F]{1,4}:(:|\b)|){5}|([\dA-F]{1,4}:){6})((([\dA-F]{1,4}((?!\3)::|:\b|$))|(?!\2\3)){2}|(((2[0-4]|1\d|[1-9])?\d|25[0-5])\.?\b){4})$/i;
            var parts = [];
            if (!valid6regx.test(str)) {
                return null
            }
            if (str === "::") {
                return [0, 0, 0, 0, 0, 0, 0, 0]
            }
            if (str.startsWith("::")) {
                str = str.replace("::", "Z:")
            } else {
                str = str.replace("::", ":Z:")
            }
            if (str.indexOf(".") > 0) {
                str = str.replace(new RegExp("[.]", "g"), ":");
                words = str.split(":");
                words[words.length - 4] = jstoi_q(words[words.length - 4]) + jstoi_q(words[words.length - 3]) * 256;
                words[words.length - 3] = jstoi_q(words[words.length - 2]) + jstoi_q(words[words.length - 1]) * 256;
                words = words.slice(0, words.length - 2)
            } else {
                words = str.split(":")
            }
            offset = 0;
            z = 0;
            for (w = 0; w < words.length; w++) {
                if (typeof words[w] == "string") {
                    if (words[w] === "Z") {
                        for (z = 0; z < 8 - words.length + 1; z++) {
                            parts[w + z] = 0
                        }
                        offset = z - 1
                    } else {
                        parts[w + offset] = _htons(parseInt(words[w], 16))
                    }
                } else {
                    parts[w + offset] = words[w]
                }
            }
            return [parts[1] << 16 | parts[0], parts[3] << 16 | parts[2], parts[5] << 16 | parts[4], parts[7] << 16 | parts[6]]
        }
        var DNS = {
            address_map: {
                id: 1,
                addrs: {},
                names: {}
            },
            lookup_name: function(name) {
                var res = inetPton4(name);
                if (res !== null) {
                    return name
                }
                res = inetPton6(name);
                if (res !== null) {
                    return name
                }
                var addr;
                if (DNS.address_map.addrs[name]) {
                    addr = DNS.address_map.addrs[name]
                } else {
                    var id = DNS.address_map.id++;
                    assert(id < 65535, "exceeded max address mappings of 65535");
                    addr = "172.29." + (id & 255) + "." + (id & 65280);
                    DNS.address_map.names[addr] = name;
                    DNS.address_map.addrs[name] = addr
                }
                return addr
            },
            lookup_addr: function(addr) {
                if (DNS.address_map.names[addr]) {
                    return DNS.address_map.names[addr]
                }
                return null
            }
        };

        function getSocketAddress(addrp, addrlen, allowNull) {
            if (allowNull && addrp === 0) return null;
            var info = readSockaddr(addrp, addrlen);
            if (info.errno) throw new FS.ErrnoError(info.errno);
            info.addr = DNS.lookup_addr(info.addr) || info.addr;
            return info
        }

        function ___syscall_connect(fd, addr, addrlen) {
            try {
                var sock = getSocketFromFD(fd);
                var info = getSocketAddress(addr, addrlen);
                sock.sock_ops.connect(sock, info.addr, info.port);
                return 0
            } catch (e) {
                if (typeof FS == "undefined" || !(e.name === "ErrnoError")) throw e;
                return -e.errno
            }
        }

        function ___syscall_faccessat(dirfd, path, amode, flags) {
            try {
                path = SYSCALLS.getStr(path);
                assert(flags === 0);
                path = SYSCALLS.calculateAt(dirfd, path);
                if (amode & ~7) {
                    return -28
                }
                var lookup = FS.lookupPath(path, {
                    follow: true
                });
                var node = lookup.node;
                if (!node) {
                    return -44
                }
                var perms = "";
                if (amode & 4) perms += "r";
                if (amode & 2) perms += "w";
                if (amode & 1) perms += "x";
                if (perms && FS.nodePermissions(node, perms)) {
                    return -2
                }
                return 0
            } catch (e) {
                if (typeof FS == "undefined" || !(e.name === "ErrnoError")) throw e;
                return -e.errno
            }
        }

        function ___syscall_fcntl64(fd, cmd, varargs) {
            SYSCALLS.varargs = varargs;
            try {
                var stream = SYSCALLS.getStreamFromFD(fd);
                switch (cmd) {
                    case 0: {
                        var arg = SYSCALLS.get();
                        if (arg < 0) {
                            return -28
                        }
                        var newStream;
                        newStream = FS.createStream(stream, arg);
                        return newStream.fd
                    }
                    case 1:
                    case 2:
                        return 0;
                    case 3:
                        return stream.flags;
                    case 4: {
                        var arg = SYSCALLS.get();
                        stream.flags |= arg;
                        return 0
                    }
                    case 5: {
                        var arg = SYSCALLS.get();
                        var offset = 0;
                        HEAP16[arg + offset >> 1] = 2;
                        return 0
                    }
                    case 6:
                    case 7:
                        return 0;
                    case 16:
                    case 8:
                        return -28;
                    case 9:
                        setErrNo(28);
                        return -1;
                    default: {
                        return -28
                    }
                }
            } catch (e) {
                if (typeof FS == "undefined" || !(e.name === "ErrnoError")) throw e;
                return -e.errno
            }
        }

        function ___syscall_fstat64(fd, buf) {
            try {
                var stream = SYSCALLS.getStreamFromFD(fd);
                return SYSCALLS.doStat(FS.stat, stream.path, buf)
            } catch (e) {
                if (typeof FS == "undefined" || !(e.name === "ErrnoError")) throw e;
                return -e.errno
            }
        }

        function ___syscall_ioctl(fd, op, varargs) {
            SYSCALLS.varargs = varargs;
            try {
                var stream = SYSCALLS.getStreamFromFD(fd);
                switch (op) {
                    case 21509:
                    case 21505: {
                        if (!stream.tty) return -59;
                        return 0
                    }
                    case 21510:
                    case 21511:
                    case 21512:
                    case 21506:
                    case 21507:
                    case 21508: {
                        if (!stream.tty) return -59;
                        return 0
                    }
                    case 21519: {
                        if (!stream.tty) return -59;
                        var argp = SYSCALLS.get();
                        HEAP32[argp >> 2] = 0;
                        return 0
                    }
                    case 21520: {
                        if (!stream.tty) return -59;
                        return -28
                    }
                    case 21531: {
                        var argp = SYSCALLS.get();
                        return FS.ioctl(stream, op, argp)
                    }
                    case 21523: {
                        if (!stream.tty) return -59;
                        return 0
                    }
                    case 21524: {
                        if (!stream.tty) return -59;
                        return 0
                    }
                    default:
                        return -28
                }
            } catch (e) {
                if (typeof FS == "undefined" || !(e.name === "ErrnoError")) throw e;
                return -e.errno
            }
        }

        function ___syscall_openat(dirfd, path, flags, varargs) {
            SYSCALLS.varargs = varargs;
            try {
                path = SYSCALLS.getStr(path);
                path = SYSCALLS.calculateAt(dirfd, path);
                var mode = varargs ? SYSCALLS.get() : 0;
                return FS.open(path, flags, mode).fd
            } catch (e) {
                if (typeof FS == "undefined" || !(e.name === "ErrnoError")) throw e;
                return -e.errno
            }
        }

        function writeSockaddr(sa, family, addr, port, addrlen) {
            switch (family) {
                case 2:
                    addr = inetPton4(addr);
                    zeroMemory(sa, 16);
                    if (addrlen) {
                        HEAP32[addrlen >> 2] = 16
                    }
                    HEAP16[sa >> 1] = family;
                    HEAP32[sa + 4 >> 2] = addr;
                    HEAP16[sa + 2 >> 1] = _htons(port);
                    break;
                case 10:
                    addr = inetPton6(addr);
                    zeroMemory(sa, 28);
                    if (addrlen) {
                        HEAP32[addrlen >> 2] = 28
                    }
                    HEAP32[sa >> 2] = family;
                    HEAP32[sa + 8 >> 2] = addr[0];
                    HEAP32[sa + 12 >> 2] = addr[1];
                    HEAP32[sa + 16 >> 2] = addr[2];
                    HEAP32[sa + 20 >> 2] = addr[3];
                    HEAP16[sa + 2 >> 1] = _htons(port);
                    break;
                default:
                    return 5
            }
            return 0
        }

        function ___syscall_recvfrom(fd, buf, len, flags, addr, addrlen) {
            try {
                var sock = getSocketFromFD(fd);
                var msg = sock.sock_ops.recvmsg(sock, len);
                if (!msg) return 0;
                if (addr) {
                    var errno = writeSockaddr(addr, sock.family, DNS.lookup_name(msg.addr), msg.port, addrlen);
                    assert(!errno)
                }
                HEAPU8.set(msg.buffer, buf);
                return msg.buffer.byteLength
            } catch (e) {
                if (typeof FS == "undefined" || !(e.name === "ErrnoError")) throw e;
                return -e.errno
            }
        }

        function ___syscall_sendto(fd, message, length, flags, addr, addr_len) {
            try {
                var sock = getSocketFromFD(fd);
                var dest = getSocketAddress(addr, addr_len, true);
                if (!dest) {
                    return FS.write(sock.stream, HEAP8, message, length)
                }
                return sock.sock_ops.sendmsg(sock, HEAP8, message, length, dest.addr, dest.port)
            } catch (e) {
                if (typeof FS == "undefined" || !(e.name === "ErrnoError")) throw e;
                return -e.errno
            }
        }

        function ___syscall_socket(domain, type, protocol) {
            try {
                var sock = SOCKFS.createSocket(domain, type, protocol);
                assert(sock.stream.fd < 64);
                return sock.stream.fd
            } catch (e) {
                if (typeof FS == "undefined" || !(e.name === "ErrnoError")) throw e;
                return -e.errno
            }
        }
        var nowIsMonotonic = true;

        function __emscripten_get_now_is_monotonic() {
            return nowIsMonotonic
        }

        function _abort() {
            abort("native code called abort()")
        }

        function _corradeUtilityNodeEnvironmentValue(key, keyLength) {
            var name = UTF8ToString(key, keyLength);
            if (typeof process !== "undefined" && name in process.env) {
                var env = process.env[name];
                var bytes = lengthBytesUTF8(env) + 1;
                var memory = _malloc(bytes);
                stringToUTF8(env, memory, bytes);
                return memory
            }
            return 0
        }
        var readEmAsmArgsArray = [];

        function readEmAsmArgs(sigPtr, buf) {
            assert(Array.isArray(readEmAsmArgsArray));
            assert(buf % 16 == 0);
            readEmAsmArgsArray.length = 0;
            var ch;
            buf >>= 2;
            while (ch = HEAPU8[sigPtr++]) {
                var chr = String.fromCharCode(ch);
                var validChars = ["d", "f", "i"];
                assert(validChars.includes(chr), "Invalid character " + ch + '("' + chr + '") in readEmAsmArgs! Use only [' + validChars + '], and do not specify "v" for void return argument.');
                buf += ch != 105 & buf;
                readEmAsmArgsArray.push(ch == 105 ? HEAP32[buf] : HEAPF64[buf++ >> 1]);
                ++buf
            }
            return readEmAsmArgsArray
        }

        function runEmAsmFunction(code, sigPtr, argbuf) {
            var args = readEmAsmArgs(sigPtr, argbuf);
            if (!ASM_CONSTS.hasOwnProperty(code)) abort("No EM_ASM constant found at address " + code);
            return ASM_CONSTS[code].apply(null, args)
        }

        function _emscripten_asm_const_double(code, sigPtr, argbuf) {
            return runEmAsmFunction(code, sigPtr, argbuf)
        }

        function _emscripten_asm_const_int(code, sigPtr, argbuf) {
            return runEmAsmFunction(code, sigPtr, argbuf)
        }

        function _emscripten_date_now() {
            return Date.now()
        }
        var JSEvents = {
            inEventHandler: 0,
            removeAllEventListeners: function() {
                for (var i = JSEvents.eventHandlers.length - 1; i >= 0; --i) {
                    JSEvents._removeHandler(i)
                }
                JSEvents.eventHandlers = [];
                JSEvents.deferredCalls = []
            },
            deferredCalls: [],
            deferCall: function(targetFunction, precedence, argsList) {
                function arraysHaveEqualContent(arrA, arrB) {
                    if (arrA.length != arrB.length) return false;
                    for (var i in arrA) {
                        if (arrA[i] != arrB[i]) return false
                    }
                    return true
                }
                for (var i in JSEvents.deferredCalls) {
                    var call = JSEvents.deferredCalls[i];
                    if (call.targetFunction == targetFunction && arraysHaveEqualContent(call.argsList, argsList)) {
                        return
                    }
                }
                JSEvents.deferredCalls.push({
                    targetFunction: targetFunction,
                    precedence: precedence,
                    argsList: argsList
                });
                JSEvents.deferredCalls.sort(function(x, y) {
                    return x.precedence < y.precedence
                })
            },
            removeDeferredCalls: function(targetFunction) {
                for (var i = 0; i < JSEvents.deferredCalls.length; ++i) {
                    if (JSEvents.deferredCalls[i].targetFunction == targetFunction) {
                        JSEvents.deferredCalls.splice(i, 1);
                        --i
                    }
                }
            },
            canPerformEventHandlerRequests: function() {
                return JSEvents.inEventHandler && JSEvents.currentEventHandler.allowsDeferredCalls
            },
            runDeferredCalls: function() {
                if (!JSEvents.canPerformEventHandlerRequests()) {
                    return
                }
                for (var i = 0; i < JSEvents.deferredCalls.length; ++i) {
                    var call = JSEvents.deferredCalls[i];
                    JSEvents.deferredCalls.splice(i, 1);
                    --i;
                    call.targetFunction.apply(null, call.argsList)
                }
            },
            eventHandlers: [],
            removeAllHandlersOnTarget: function(target, eventTypeString) {
                for (var i = 0; i < JSEvents.eventHandlers.length; ++i) {
                    if (JSEvents.eventHandlers[i].target == target && (!eventTypeString || eventTypeString == JSEvents.eventHandlers[i].eventTypeString)) {
                        JSEvents._removeHandler(i--)
                    }
                }
            },
            _removeHandler: function(i) {
                var h = JSEvents.eventHandlers[i];
                h.target.removeEventListener(h.eventTypeString, h.eventListenerFunc, h.useCapture);
                JSEvents.eventHandlers.splice(i, 1)
            },
            registerOrRemoveHandler: function(eventHandler) {
                var jsEventHandler = function jsEventHandler(event) {
                    ++JSEvents.inEventHandler;
                    JSEvents.currentEventHandler = eventHandler;
                    JSEvents.runDeferredCalls();
                    eventHandler.handlerFunc(event);
                    JSEvents.runDeferredCalls();
                    --JSEvents.inEventHandler
                };
                if (eventHandler.callbackfunc) {
                    eventHandler.eventListenerFunc = jsEventHandler;
                    eventHandler.target.addEventListener(eventHandler.eventTypeString, jsEventHandler, eventHandler.useCapture);
                    JSEvents.eventHandlers.push(eventHandler)
                } else {
                    for (var i = 0; i < JSEvents.eventHandlers.length; ++i) {
                        if (JSEvents.eventHandlers[i].target == eventHandler.target && JSEvents.eventHandlers[i].eventTypeString == eventHandler.eventTypeString) {
                            JSEvents._removeHandler(i--)
                        }
                    }
                }
            },
            getNodeNameForTarget: function(target) {
                if (!target) return "";
                if (target == window) return "#window";
                if (target == screen) return "#screen";
                return target && target.nodeName ? target.nodeName : ""
            },
            fullscreenEnabled: function() {
                return document.fullscreenEnabled || document.webkitFullscreenEnabled
            }
        };

        function maybeCStringToJsString(cString) {
            return cString > 2 ? UTF8ToString(cString) : cString
        }
        var specialHTMLTargets = [0, typeof document != "undefined" ? document : 0, typeof window != "undefined" ? window : 0];

        function findEventTarget(target) {
            target = maybeCStringToJsString(target);
            var domElement = specialHTMLTargets[target] || (typeof document != "undefined" ? document.querySelector(target) : undefined);
            return domElement
        }

        function findCanvasEventTarget(target) {
            return findEventTarget(target)
        }

        function _emscripten_get_canvas_element_size(target, width, height) {
            var canvas = findCanvasEventTarget(target);
            if (!canvas) return -4;
            HEAP32[width >> 2] = canvas.width;
            HEAP32[height >> 2] = canvas.height
        }

        function _emscripten_get_device_pixel_ratio() {
            return typeof devicePixelRatio == "number" && devicePixelRatio || 1
        }

        function getBoundingClientRect(e) {
            return specialHTMLTargets.indexOf(e) < 0 ? e.getBoundingClientRect() : {
                "left": 0,
                "top": 0
            }
        }

        function _emscripten_get_element_css_size(target, width, height) {
            target = findEventTarget(target);
            if (!target) return -4;
            var rect = getBoundingClientRect(target);
            HEAPF64[width >> 3] = rect.width;
            HEAPF64[height >> 3] = rect.height;
            return 0
        }
        var _emscripten_get_now;
        if (ENVIRONMENT_IS_NODE) {
            _emscripten_get_now = () => {
                var t = process.hrtime();
                return t[0] * 1e3 + t[1] / 1e6
            }
        } else _emscripten_get_now = () => performance.now();

        function _emscripten_memcpy_big(dest, src, num) {
            HEAPU8.copyWithin(dest, src, src + num)
        }

        function getHeapMax() {
            return 536870912
        }

        function emscripten_realloc_buffer(size) {
            var b = wasmMemory.buffer;
            try {
                wasmMemory.grow(size - b.byteLength + 65535 >>> 16);
                updateMemoryViews();
                return 1
            } catch (e) {
                err("emscripten_realloc_buffer: Attempted to grow heap from " + b.byteLength + " bytes to " + size + " bytes, but got error: " + e)
            }
        }

        function _emscripten_resize_heap(requestedSize) {
            var oldSize = HEAPU8.length;
            requestedSize = requestedSize >>> 0;
            assert(requestedSize > oldSize);
            var maxHeapSize = getHeapMax();
            if (requestedSize > maxHeapSize) {
                err("Cannot enlarge memory, asked to go up to " + requestedSize + " bytes, but the limit is " + maxHeapSize + " bytes!");
                return false
            }
            let alignUp = (x, multiple) => x + (multiple - x % multiple) % multiple;
            for (var cutDown = 1; cutDown <= 4; cutDown *= 2) {
                var overGrownHeapSize = oldSize * (1 + .2 / cutDown);
                overGrownHeapSize = Math.min(overGrownHeapSize, requestedSize + 100663296);
                var newSize = Math.min(maxHeapSize, alignUp(Math.max(requestedSize, overGrownHeapSize), 65536));
                var replacement = emscripten_realloc_buffer(newSize);
                if (replacement) {
                    return true
                }
            }
            err("Failed to grow the heap from " + oldSize + " bytes to " + newSize + " bytes, not enough memory!");
            return false
        }

        function _emscripten_set_canvas_element_size(target, width, height) {
            var canvas = findCanvasEventTarget(target);
            if (!canvas) return -4;
            canvas.width = width;
            canvas.height = height;
            return 0
        }
        var wasmTableMirror = [];

        function getWasmTableEntry(funcPtr) {
            var func = wasmTableMirror[funcPtr];
            if (!func) {
                if (funcPtr >= wasmTableMirror.length) wasmTableMirror.length = funcPtr + 1;
                wasmTableMirror[funcPtr] = func = wasmTable.get(funcPtr)
            }
            assert(wasmTable.get(funcPtr) == func, "JavaScript-side Wasm function table mirror is out of date!");
            return func
        }

        function registerFocusEventCallback(target, userData, useCapture, callbackfunc, eventTypeId, eventTypeString, targetThread) {
            if (!JSEvents.focusEvent) JSEvents.focusEvent = _malloc(256);
            var focusEventHandlerFunc = function(e = event) {
                var nodeName = JSEvents.getNodeNameForTarget(e.target);
                var id = e.target.id ? e.target.id : "";
                var focusEvent = JSEvents.focusEvent;
                stringToUTF8(nodeName, focusEvent + 0, 128);
                stringToUTF8(id, focusEvent + 128, 128);
                if (getWasmTableEntry(callbackfunc)(eventTypeId, focusEvent, userData)) e.preventDefault()
            };
            var eventHandler = {
                target: findEventTarget(target),
                eventTypeString: eventTypeString,
                callbackfunc: callbackfunc,
                handlerFunc: focusEventHandlerFunc,
                useCapture: useCapture
            };
            JSEvents.registerOrRemoveHandler(eventHandler)
        }

        function _emscripten_set_focus_callback_on_thread(target, userData, useCapture, callbackfunc, targetThread) {
            registerFocusEventCallback(target, userData, useCapture, callbackfunc, 13, "focus", targetThread);
            return 0
        }

        function registerKeyEventCallback(target, userData, useCapture, callbackfunc, eventTypeId, eventTypeString, targetThread) {
            if (!JSEvents.keyEvent) JSEvents.keyEvent = _malloc(176);
            var keyEventHandlerFunc = function(e) {
                assert(e);
                var keyEventData = JSEvents.keyEvent;
                HEAPF64[keyEventData >> 3] = e.timeStamp;
                var idx = keyEventData >> 2;
                HEAP32[idx + 2] = e.location;
                HEAP32[idx + 3] = e.ctrlKey;
                HEAP32[idx + 4] = e.shiftKey;
                HEAP32[idx + 5] = e.altKey;
                HEAP32[idx + 6] = e.metaKey;
                HEAP32[idx + 7] = e.repeat;
                HEAP32[idx + 8] = e.charCode;
                HEAP32[idx + 9] = e.keyCode;
                HEAP32[idx + 10] = e.which;
                stringToUTF8(e.key || "", keyEventData + 44, 32);
                stringToUTF8(e.code || "", keyEventData + 76, 32);
                stringToUTF8(e.char || "", keyEventData + 108, 32);
                stringToUTF8(e.locale || "", keyEventData + 140, 32);
                if (getWasmTableEntry(callbackfunc)(eventTypeId, keyEventData, userData)) e.preventDefault()
            };
            var eventHandler = {
                target: findEventTarget(target),
                allowsDeferredCalls: true,
                eventTypeString: eventTypeString,
                callbackfunc: callbackfunc,
                handlerFunc: keyEventHandlerFunc,
                useCapture: useCapture
            };
            JSEvents.registerOrRemoveHandler(eventHandler)
        }

        function _emscripten_set_keydown_callback_on_thread(target, userData, useCapture, callbackfunc, targetThread) {
            registerKeyEventCallback(target, userData, useCapture, callbackfunc, 2, "keydown", targetThread);
            return 0
        }

        function _emscripten_set_keyup_callback_on_thread(target, userData, useCapture, callbackfunc, targetThread) {
            registerKeyEventCallback(target, userData, useCapture, callbackfunc, 3, "keyup", targetThread);
            return 0
        }

        function fillMouseEventData(eventStruct, e, target) {
            assert(eventStruct % 4 == 0);
            HEAPF64[eventStruct >> 3] = e.timeStamp;
            var idx = eventStruct >> 2;
            HEAP32[idx + 2] = e.screenX;
            HEAP32[idx + 3] = e.screenY;
            HEAP32[idx + 4] = e.clientX;
            HEAP32[idx + 5] = e.clientY;
            HEAP32[idx + 6] = e.ctrlKey;
            HEAP32[idx + 7] = e.shiftKey;
            HEAP32[idx + 8] = e.altKey;
            HEAP32[idx + 9] = e.metaKey;
            HEAP16[idx * 2 + 20] = e.button;
            HEAP16[idx * 2 + 21] = e.buttons;
            HEAP32[idx + 11] = e["movementX"];
            HEAP32[idx + 12] = e["movementY"];
            var rect = getBoundingClientRect(target);
            HEAP32[idx + 13] = e.clientX - rect.left;
            HEAP32[idx + 14] = e.clientY - rect.top
        }

        function registerMouseEventCallback(target, userData, useCapture, callbackfunc, eventTypeId, eventTypeString, targetThread) {
            if (!JSEvents.mouseEvent) JSEvents.mouseEvent = _malloc(72);
            target = findEventTarget(target);
            var mouseEventHandlerFunc = function(e = event) {
                fillMouseEventData(JSEvents.mouseEvent, e, target);
                if (getWasmTableEntry(callbackfunc)(eventTypeId, JSEvents.mouseEvent, userData)) e.preventDefault()
            };
            var eventHandler = {
                target: target,
                allowsDeferredCalls: eventTypeString != "mousemove" && eventTypeString != "mouseenter" && eventTypeString != "mouseleave",
                eventTypeString: eventTypeString,
                callbackfunc: callbackfunc,
                handlerFunc: mouseEventHandlerFunc,
                useCapture: useCapture
            };
            JSEvents.registerOrRemoveHandler(eventHandler)
        }

        function _emscripten_set_mousedown_callback_on_thread(target, userData, useCapture, callbackfunc, targetThread) {
            registerMouseEventCallback(target, userData, useCapture, callbackfunc, 5, "mousedown", targetThread);
            return 0
        }

        function _emscripten_set_mousemove_callback_on_thread(target, userData, useCapture, callbackfunc, targetThread) {
            registerMouseEventCallback(target, userData, useCapture, callbackfunc, 8, "mousemove", targetThread);
            return 0
        }

        function _emscripten_set_mouseup_callback_on_thread(target, userData, useCapture, callbackfunc, targetThread) {
            registerMouseEventCallback(target, userData, useCapture, callbackfunc, 6, "mouseup", targetThread);
            return 0
        }

        function registerUiEventCallback(target, userData, useCapture, callbackfunc, eventTypeId, eventTypeString, targetThread) {
            if (!JSEvents.uiEvent) JSEvents.uiEvent = _malloc(36);
            target = findEventTarget(target);
            var uiEventHandlerFunc = function(e = event) {
                if (e.target != target) {
                    return
                }
                var b = document.body;
                if (!b) {
                    return
                }
                var uiEvent = JSEvents.uiEvent;
                HEAP32[uiEvent >> 2] = e.detail;
                HEAP32[uiEvent + 4 >> 2] = b.clientWidth;
                HEAP32[uiEvent + 8 >> 2] = b.clientHeight;
                HEAP32[uiEvent + 12 >> 2] = innerWidth;
                HEAP32[uiEvent + 16 >> 2] = innerHeight;
                HEAP32[uiEvent + 20 >> 2] = outerWidth;
                HEAP32[uiEvent + 24 >> 2] = outerHeight;
                HEAP32[uiEvent + 28 >> 2] = pageXOffset;
                HEAP32[uiEvent + 32 >> 2] = pageYOffset;
                if (getWasmTableEntry(callbackfunc)(eventTypeId, uiEvent, userData)) e.preventDefault()
            };
            var eventHandler = {
                target: target,
                eventTypeString: eventTypeString,
                callbackfunc: callbackfunc,
                handlerFunc: uiEventHandlerFunc,
                useCapture: useCapture
            };
            JSEvents.registerOrRemoveHandler(eventHandler)
        }

        function _emscripten_set_resize_callback_on_thread(target, userData, useCapture, callbackfunc, targetThread) {
            registerUiEventCallback(target, userData, useCapture, callbackfunc, 10, "resize", targetThread);
            return 0
        }

        function registerWheelEventCallback(target, userData, useCapture, callbackfunc, eventTypeId, eventTypeString, targetThread) {
            if (!JSEvents.wheelEvent) JSEvents.wheelEvent = _malloc(104);
            var wheelHandlerFunc = function(e = event) {
                var wheelEvent = JSEvents.wheelEvent;
                fillMouseEventData(wheelEvent, e, target);
                HEAPF64[wheelEvent + 72 >> 3] = e["deltaX"];
                HEAPF64[wheelEvent + 80 >> 3] = e["deltaY"];
                HEAPF64[wheelEvent + 88 >> 3] = e["deltaZ"];
                HEAP32[wheelEvent + 96 >> 2] = e["deltaMode"];
                if (getWasmTableEntry(callbackfunc)(eventTypeId, wheelEvent, userData)) e.preventDefault()
            };
            var eventHandler = {
                target: target,
                allowsDeferredCalls: true,
                eventTypeString: eventTypeString,
                callbackfunc: callbackfunc,
                handlerFunc: wheelHandlerFunc,
                useCapture: useCapture
            };
            JSEvents.registerOrRemoveHandler(eventHandler)
        }

        function _emscripten_set_wheel_callback_on_thread(target, userData, useCapture, callbackfunc, targetThread) {
            target = findEventTarget(target);
            if (typeof target.onwheel != "undefined") {
                registerWheelEventCallback(target, userData, useCapture, callbackfunc, 9, "wheel", targetThread);
                return 0
            } else {
                return -1
            }
        }

        function _emscripten_webgl_do_commit_frame() {
            if (!GL.currentContext || !GL.currentContext.GLctx) {
                return -3
            }
            if (!GL.currentContext.attributes.explicitSwapControl) {
                return -3
            }
            return 0
        }
        var _emscripten_webgl_commit_frame = _emscripten_webgl_do_commit_frame;

        function __webgl_enable_WEBGL_draw_instanced_base_vertex_base_instance(ctx) {
            return !!(ctx.dibvbi = ctx.getExtension("WEBGL_draw_instanced_base_vertex_base_instance"))
        }

        function __webgl_enable_WEBGL_multi_draw_instanced_base_vertex_base_instance(ctx) {
            return !!(ctx.mdibvbi = ctx.getExtension("WEBGL_multi_draw_instanced_base_vertex_base_instance"))
        }

        function __webgl_enable_WEBGL_multi_draw(ctx) {
            return !!(ctx.multiDrawWebgl = ctx.getExtension("WEBGL_multi_draw"))
        }
        var GL = {
            counter: 1,
            buffers: [],
            programs: [],
            framebuffers: [],
            renderbuffers: [],
            textures: [],
            shaders: [],
            vaos: [],
            contexts: [],
            offscreenCanvases: {},
            queries: [],
            samplers: [],
            transformFeedbacks: [],
            syncs: [],
            stringCache: {},
            stringiCache: {},
            unpackAlignment: 4,
            recordError: function recordError(errorCode) {
                if (!GL.lastError) {
                    GL.lastError = errorCode
                }
            },
            getNewId: function(table) {
                var ret = GL.counter++;
                for (var i = table.length; i < ret; i++) {
                    table[i] = null
                }
                return ret
            },
            getSource: function(shader, count, string, length) {
                var source = "";
                for (var i = 0; i < count; ++i) {
                    var len = length ? HEAP32[length + i * 4 >> 2] : -1;
                    source += UTF8ToString(HEAP32[string + i * 4 >> 2], len < 0 ? undefined : len)
                }
                return source
            },
            createContext: function(canvas, webGLContextAttributes) {
                if (!canvas.getContextSafariWebGL2Fixed) {
                    canvas.getContextSafariWebGL2Fixed = canvas.getContext;

                    function fixedGetContext(ver, attrs) {
                        var gl = canvas.getContextSafariWebGL2Fixed(ver, attrs);
                        return ver == "webgl" == gl instanceof WebGLRenderingContext ? gl : null
                    }
                    canvas.getContext = fixedGetContext
                }
                var ctx = canvas.getContext("webgl2", webGLContextAttributes);
                if (!ctx) return 0;
                var handle = GL.registerContext(ctx, webGLContextAttributes);
                return handle
            },
            registerContext: function(ctx, webGLContextAttributes) {
                var handle = GL.getNewId(GL.contexts);
                var context = {
                    handle: handle,
                    attributes: webGLContextAttributes,
                    version: webGLContextAttributes.majorVersion,
                    GLctx: ctx
                };
                if (ctx.canvas) ctx.canvas.GLctxObject = context;
                GL.contexts[handle] = context;
                if (typeof webGLContextAttributes.enableExtensionsByDefault == "undefined" || webGLContextAttributes.enableExtensionsByDefault) {
                    GL.initExtensions(context)
                }
                return handle
            },
            makeContextCurrent: function(contextHandle) {
                GL.currentContext = GL.contexts[contextHandle];
                Module.ctx = GLctx = GL.currentContext && GL.currentContext.GLctx;
                return !(contextHandle && !GLctx)
            },
            getContext: function(contextHandle) {
                return GL.contexts[contextHandle]
            },
            deleteContext: function(contextHandle) {
                if (GL.currentContext === GL.contexts[contextHandle]) GL.currentContext = null;
                if (typeof JSEvents == "object") JSEvents.removeAllHandlersOnTarget(GL.contexts[contextHandle].GLctx.canvas);
                if (GL.contexts[contextHandle] && GL.contexts[contextHandle].GLctx.canvas) GL.contexts[contextHandle].GLctx.canvas.GLctxObject = undefined;
                GL.contexts[contextHandle] = null
            },
            initExtensions: function(context) {
                if (!context) context = GL.currentContext;
                if (context.initExtensionsDone) return;
                context.initExtensionsDone = true;
                var GLctx = context.GLctx;
                __webgl_enable_WEBGL_draw_instanced_base_vertex_base_instance(GLctx);
                __webgl_enable_WEBGL_multi_draw_instanced_base_vertex_base_instance(GLctx);
                if (context.version >= 2) {
                    GLctx.disjointTimerQueryExt = GLctx.getExtension("EXT_disjoint_timer_query_webgl2")
                }
                if (context.version < 2 || !GLctx.disjointTimerQueryExt) {
                    GLctx.disjointTimerQueryExt = GLctx.getExtension("EXT_disjoint_timer_query")
                }
                __webgl_enable_WEBGL_multi_draw(GLctx);
                var exts = GLctx.getSupportedExtensions() || [];
                exts.forEach(function(ext) {
                    if (!ext.includes("lose_context") && !ext.includes("debug")) {
                        GLctx.getExtension(ext)
                    }
                })
            }
        };
        var __emscripten_webgl_power_preferences = ["default", "low-power", "high-performance"];

        function _emscripten_webgl_do_create_context(target, attributes) {
            assert(attributes);
            var a = attributes >> 2;
            var powerPreference = HEAP32[a + (24 >> 2)];
            var contextAttributes = {
                "alpha": !!HEAP32[a + (0 >> 2)],
                "depth": !!HEAP32[a + (4 >> 2)],
                "stencil": !!HEAP32[a + (8 >> 2)],
                "antialias": !!HEAP32[a + (12 >> 2)],
                "premultipliedAlpha": !!HEAP32[a + (16 >> 2)],
                "preserveDrawingBuffer": !!HEAP32[a + (20 >> 2)],
                "powerPreference": __emscripten_webgl_power_preferences[powerPreference],
                "failIfMajorPerformanceCaveat": !!HEAP32[a + (28 >> 2)],
                majorVersion: HEAP32[a + (32 >> 2)],
                minorVersion: HEAP32[a + (36 >> 2)],
                enableExtensionsByDefault: HEAP32[a + (40 >> 2)],
                explicitSwapControl: HEAP32[a + (44 >> 2)],
                proxyContextToMainThread: HEAP32[a + (48 >> 2)],
                renderViaOffscreenBackBuffer: HEAP32[a + (52 >> 2)]
            };
            var canvas = findCanvasEventTarget(target);
            if (!canvas) {
                return 0
            }
            if (contextAttributes.explicitSwapControl) {
                return 0
            }
            var contextHandle = GL.createContext(canvas, contextAttributes);
            return contextHandle
        }
        var _emscripten_webgl_create_context = _emscripten_webgl_do_create_context;

        function _emscripten_webgl_destroy_context(contextHandle) {
            if (GL.currentContext == contextHandle) GL.currentContext = 0;
            GL.deleteContext(contextHandle)
        }

        function _emscripten_webgl_enable_extension(contextHandle, extension) {
            var context = GL.getContext(contextHandle);
            var extString = UTF8ToString(extension);
            if (extString.startsWith("GL_")) extString = extString.substr(3);
            if (extString == "WEBGL_draw_instanced_base_vertex_base_instance") __webgl_enable_WEBGL_draw_instanced_base_vertex_base_instance(GLctx);
            if (extString == "WEBGL_multi_draw_instanced_base_vertex_base_instance") __webgl_enable_WEBGL_multi_draw_instanced_base_vertex_base_instance(GLctx);
            if (extString == "WEBGL_multi_draw") __webgl_enable_WEBGL_multi_draw(GLctx);
            var ext = context.GLctx.getExtension(extString);
            return !!ext
        }

        function _emscripten_webgl_do_get_current_context() {
            return GL.currentContext ? GL.currentContext.handle : 0
        }
        var _emscripten_webgl_get_current_context = _emscripten_webgl_do_get_current_context;

        function _emscripten_webgl_init_context_attributes(attributes) {
            assert(attributes);
            var a = attributes >> 2;
            for (var i = 0; i < 56 >> 2; ++i) {
                HEAP32[a + i] = 0
            }
            HEAP32[a + (0 >> 2)] = HEAP32[a + (4 >> 2)] = HEAP32[a + (12 >> 2)] = HEAP32[a + (16 >> 2)] = HEAP32[a + (32 >> 2)] = HEAP32[a + (40 >> 2)] = 1
        }

        function _emscripten_webgl_make_context_current(contextHandle) {
            var success = GL.makeContextCurrent(contextHandle);
            return success ? 0 : -5
        }
        var ENV = {};

        function getExecutableName() {
            if (ENVIRONMENT_IS_NODE && process.argv.length > 1) {
                return process.argv[1].replace(/\\/g, "/")
            }
            return "./this.program"
        }

        function getEnvStrings() {
            if (!getEnvStrings.strings) {
                var lang = (typeof navigator == "object" && navigator.languages && navigator.languages[0] || "C").replace("-", "_") + ".UTF-8";
                var env = {
                    "USER": "web_user",
                    "LOGNAME": "web_user",
                    "PATH": "/",
                    "PWD": "/",
                    "HOME": "/home/web_user",
                    "LANG": lang,
                    "_": getExecutableName()
                };
                for (var x in ENV) {
                    if (ENV[x] === undefined) delete env[x];
                    else env[x] = ENV[x]
                }
                var strings = [];
                for (var x in env) {
                    strings.push(x + "=" + env[x])
                }
                getEnvStrings.strings = strings
            }
            return getEnvStrings.strings
        }

        function writeAsciiToMemory(str, buffer, dontAddNull) {
            for (var i = 0; i < str.length; ++i) {
                assert(str.charCodeAt(i) === (str.charCodeAt(i) & 255));
                HEAP8[buffer++ >> 0] = str.charCodeAt(i)
            }
            if (!dontAddNull) HEAP8[buffer >> 0] = 0
        }

        function _environ_get(__environ, environ_buf) {
            var bufSize = 0;
            getEnvStrings().forEach(function(string, i) {
                var ptr = environ_buf + bufSize;
                HEAPU32[__environ + i * 4 >> 2] = ptr;
                writeAsciiToMemory(string, ptr);
                bufSize += string.length + 1
            });
            return 0
        }

        function _environ_sizes_get(penviron_count, penviron_buf_size) {
            var strings = getEnvStrings();
            HEAPU32[penviron_count >> 2] = strings.length;
            var bufSize = 0;
            strings.forEach(function(string) {
                bufSize += string.length + 1
            });
            HEAPU32[penviron_buf_size >> 2] = bufSize;
            return 0
        }

        function _proc_exit(code) {
            throw "exit(" + code + ")"
        }
        var _exit = _proc_exit;

        function _fd_close(fd) {
            try {
                var stream = SYSCALLS.getStreamFromFD(fd);
                FS.close(stream);
                return 0
            } catch (e) {
                if (typeof FS == "undefined" || !(e.name === "ErrnoError")) throw e;
                return e.errno
            }
        }

        function doReadv(stream, iov, iovcnt, offset) {
            var ret = 0;
            for (var i = 0; i < iovcnt; i++) {
                var ptr = HEAPU32[iov >> 2];
                var len = HEAPU32[iov + 4 >> 2];
                iov += 8;
                var curr = FS.read(stream, HEAP8, ptr, len, offset);
                if (curr < 0) return -1;
                ret += curr;
                if (curr < len) break;
                if (typeof offset !== "undefined") {
                    offset += curr
                }
            }
            return ret
        }

        function _fd_read(fd, iov, iovcnt, pnum) {
            try {
                var stream = SYSCALLS.getStreamFromFD(fd);
                var num = doReadv(stream, iov, iovcnt);
                HEAPU32[pnum >> 2] = num;
                return 0
            } catch (e) {
                if (typeof FS == "undefined" || !(e.name === "ErrnoError")) throw e;
                return e.errno
            }
        }

        function convertI32PairToI53Checked(lo, hi) {
            assert(lo == lo >>> 0 || lo == (lo | 0));
            assert(hi === (hi | 0));
            return hi + 2097152 >>> 0 < 4194305 - !!lo ? (lo >>> 0) + hi * 4294967296 : NaN
        }

        function _fd_seek(fd, offset_low, offset_high, whence, newOffset) {
            try {
                var offset = convertI32PairToI53Checked(offset_low, offset_high);
                if (isNaN(offset)) return 61;
                var stream = SYSCALLS.getStreamFromFD(fd);
                FS.llseek(stream, offset, whence);
                tempI64 = [stream.position >>> 0, (tempDouble = stream.position, +Math.abs(tempDouble) >= 1 ? tempDouble > 0 ? (Math.min(+Math.floor(tempDouble / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math.ceil((tempDouble - +(~~tempDouble >>> 0)) / 4294967296) >>> 0 : 0)], HEAP32[newOffset >> 2] = tempI64[0], HEAP32[newOffset + 4 >> 2] = tempI64[1];
                if (stream.getdents && offset === 0 && whence === 0) stream.getdents = null;
                return 0
            } catch (e) {
                if (typeof FS == "undefined" || !(e.name === "ErrnoError")) throw e;
                return e.errno
            }
        }

        function doWritev(stream, iov, iovcnt, offset) {
            var ret = 0;
            for (var i = 0; i < iovcnt; i++) {
                var ptr = HEAPU32[iov >> 2];
                var len = HEAPU32[iov + 4 >> 2];
                iov += 8;
                var curr = FS.write(stream, HEAP8, ptr, len, offset);
                if (curr < 0) return -1;
                ret += curr;
                if (typeof offset !== "undefined") {
                    offset += curr
                }
            }
            return ret
        }

        function _fd_write(fd, iov, iovcnt, pnum) {
            try {
                var stream = SYSCALLS.getStreamFromFD(fd);
                var num = doWritev(stream, iov, iovcnt);
                HEAPU32[pnum >> 2] = num;
                return 0
            } catch (e) {
                if (typeof FS == "undefined" || !(e.name === "ErrnoError")) throw e;
                return e.errno
            }
        }

        function _getaddrinfo(node, service, hint, out) {
            var addr = 0;
            var port = 0;
            var flags = 0;
            var family = 0;
            var type = 0;
            var proto = 0;
            var ai;

            function allocaddrinfo(family, type, proto, canon, addr, port) {
                var sa, salen, ai;
                var errno;
                salen = family === 10 ? 28 : 16;
                addr = family === 10 ? inetNtop6(addr) : inetNtop4(addr);
                sa = _malloc(salen);
                errno = writeSockaddr(sa, family, addr, port);
                assert(!errno);
                ai = _malloc(32);
                HEAP32[ai + 4 >> 2] = family;
                HEAP32[ai + 8 >> 2] = type;
                HEAP32[ai + 12 >> 2] = proto;
                HEAP32[ai + 24 >> 2] = canon;
                HEAPU32[ai + 20 >> 2] = sa;
                if (family === 10) {
                    HEAP32[ai + 16 >> 2] = 28
                } else {
                    HEAP32[ai + 16 >> 2] = 16
                }
                HEAP32[ai + 28 >> 2] = 0;
                return ai
            }
            if (hint) {
                flags = HEAP32[hint >> 2];
                family = HEAP32[hint + 4 >> 2];
                type = HEAP32[hint + 8 >> 2];
                proto = HEAP32[hint + 12 >> 2]
            }
            if (type && !proto) {
                proto = type === 2 ? 17 : 6
            }
            if (!type && proto) {
                type = proto === 17 ? 2 : 1
            }
            if (proto === 0) {
                proto = 6
            }
            if (type === 0) {
                type = 1
            }
            if (!node && !service) {
                return -2
            }
            if (flags & ~(1 | 2 | 4 | 1024 | 8 | 16 | 32)) {
                return -1
            }
            if (hint !== 0 && HEAP32[hint >> 2] & 2 && !node) {
                return -1
            }
            if (flags & 32) {
                return -2
            }
            if (type !== 0 && type !== 1 && type !== 2) {
                return -7
            }
            if (family !== 0 && family !== 2 && family !== 10) {
                return -6
            }
            if (service) {
                service = UTF8ToString(service);
                port = parseInt(service, 10);
                if (isNaN(port)) {
                    if (flags & 1024) {
                        return -2
                    }
                    return -8
                }
            }
            if (!node) {
                if (family === 0) {
                    family = 2
                }
                if ((flags & 1) === 0) {
                    if (family === 2) {
                        addr = _htonl(2130706433)
                    } else {
                        addr = [0, 0, 0, 1]
                    }
                }
                ai = allocaddrinfo(family, type, proto, null, addr, port);
                HEAPU32[out >> 2] = ai;
                return 0
            }
            node = UTF8ToString(node);
            addr = inetPton4(node);
            if (addr !== null) {
                if (family === 0 || family === 2) {
                    family = 2
                } else if (family === 10 && flags & 8) {
                    addr = [0, 0, _htonl(65535), addr];
                    family = 10
                } else {
                    return -2
                }
            } else {
                addr = inetPton6(node);
                if (addr !== null) {
                    if (family === 0 || family === 10) {
                        family = 10
                    } else {
                        return -2
                    }
                }
            }
            if (addr != null) {
                ai = allocaddrinfo(family, type, proto, node, addr, port);
                HEAPU32[out >> 2] = ai;
                return 0
            }
            if (flags & 4) {
                return -2
            }
            node = DNS.lookup_name(node);
            addr = inetPton4(node);
            if (family === 0) {
                family = 2
            } else if (family === 10) {
                addr = [0, 0, _htonl(65535), addr]
            }
            ai = allocaddrinfo(family, type, proto, null, addr, port);
            HEAPU32[out >> 2] = ai;
            return 0
        }

        function _glActiveTexture(x0) {
            GLctx["activeTexture"](x0)
        }

        function _glAttachShader(program, shader) {
            GLctx.attachShader(GL.programs[program], GL.shaders[shader])
        }

        function _glBeginQuery(target, id) {
            GLctx["beginQuery"](target, GL.queries[id])
        }

        function _glBeginTransformFeedback(x0) {
            GLctx["beginTransformFeedback"](x0)
        }

        function _glBindBuffer(target, buffer) {
            if (target == 35051) {
                GLctx.currentPixelPackBufferBinding = buffer
            } else if (target == 35052) {
                GLctx.currentPixelUnpackBufferBinding = buffer
            }
            GLctx.bindBuffer(target, GL.buffers[buffer])
        }

        function _glBindBufferBase(target, index, buffer) {
            GLctx["bindBufferBase"](target, index, GL.buffers[buffer])
        }

        function _glBindBufferRange(target, index, buffer, offset, ptrsize) {
            GLctx["bindBufferRange"](target, index, GL.buffers[buffer], offset, ptrsize)
        }

        function _glBindFramebuffer(target, framebuffer) {
            GLctx.bindFramebuffer(target, GL.framebuffers[framebuffer])
        }

        function _glBindRenderbuffer(target, renderbuffer) {
            GLctx.bindRenderbuffer(target, GL.renderbuffers[renderbuffer])
        }

        function _glBindTexture(target, texture) {
            GLctx.bindTexture(target, GL.textures[texture])
        }

        function _glBindTransformFeedback(target, id) {
            GLctx["bindTransformFeedback"](target, GL.transformFeedbacks[id])
        }

        function _glBindVertexArray(vao) {
            GLctx["bindVertexArray"](GL.vaos[vao])
        }

        function _glBlendEquationSeparate(x0, x1) {
            GLctx["blendEquationSeparate"](x0, x1)
        }

        function _glBlendFuncSeparate(x0, x1, x2, x3) {
            GLctx["blendFuncSeparate"](x0, x1, x2, x3)
        }

        function _glBlitFramebuffer(x0, x1, x2, x3, x4, x5, x6, x7, x8, x9) {
            GLctx["blitFramebuffer"](x0, x1, x2, x3, x4, x5, x6, x7, x8, x9)
        }

        function _glBufferData(target, size, data, usage) {
            if (true) {
                if (data && size) {
                    GLctx.bufferData(target, HEAPU8, usage, data, size)
                } else {
                    GLctx.bufferData(target, size, usage)
                }
            } else {
                GLctx.bufferData(target, data ? HEAPU8.subarray(data, data + size) : size, usage)
            }
        }

        function _glBufferSubData(target, offset, size, data) {
            if (true) {
                size && GLctx.bufferSubData(target, offset, HEAPU8, data, size);
                return
            }
            GLctx.bufferSubData(target, offset, HEAPU8.subarray(data, data + size))
        }

        function _glCheckFramebufferStatus(x0) {
            return GLctx["checkFramebufferStatus"](x0)
        }

        function _glClear(x0) {
            GLctx["clear"](x0)
        }

        function _glClearBufferfi(x0, x1, x2, x3) {
            GLctx["clearBufferfi"](x0, x1, x2, x3)
        }

        function _glClearBufferfv(buffer, drawbuffer, value) {
            GLctx["clearBufferfv"](buffer, drawbuffer, HEAPF32, value >> 2)
        }

        function _glClearBufferiv(buffer, drawbuffer, value) {
            GLctx["clearBufferiv"](buffer, drawbuffer, HEAP32, value >> 2)
        }

        function _glClearBufferuiv(buffer, drawbuffer, value) {
            GLctx["clearBufferuiv"](buffer, drawbuffer, HEAPU32, value >> 2)
        }

        function _glClearColor(x0, x1, x2, x3) {
            GLctx["clearColor"](x0, x1, x2, x3)
        }

        function _glClearDepthf(x0) {
            GLctx["clearDepth"](x0)
        }

        function convertI32PairToI53(lo, hi) {
            assert(hi === (hi | 0));
            return (lo >>> 0) + hi * 4294967296
        }

        function _glClientWaitSync(sync, flags, timeout_low, timeout_high) {
            var timeout = convertI32PairToI53(timeout_low, timeout_high);
            return GLctx.clientWaitSync(GL.syncs[sync], flags, timeout)
        }

        function _glColorMask(red, green, blue, alpha) {
            GLctx.colorMask(!!red, !!green, !!blue, !!alpha)
        }

        function _glCompileShader(shader) {
            GLctx.compileShader(GL.shaders[shader])
        }

        function _glCompressedTexSubImage2D(target, level, xoffset, yoffset, width, height, format, imageSize, data) {
            if (true) {
                if (GLctx.currentPixelUnpackBufferBinding || !imageSize) {
                    GLctx["compressedTexSubImage2D"](target, level, xoffset, yoffset, width, height, format, imageSize, data)
                } else {
                    GLctx["compressedTexSubImage2D"](target, level, xoffset, yoffset, width, height, format, HEAPU8, data, imageSize)
                }
                return
            }
            GLctx["compressedTexSubImage2D"](target, level, xoffset, yoffset, width, height, format, data ? HEAPU8.subarray(data, data + imageSize) : null)
        }

        function _glCompressedTexSubImage3D(target, level, xoffset, yoffset, zoffset, width, height, depth, format, imageSize, data) {
            if (GLctx.currentPixelUnpackBufferBinding) {
                GLctx["compressedTexSubImage3D"](target, level, xoffset, yoffset, zoffset, width, height, depth, format, imageSize, data)
            } else {
                GLctx["compressedTexSubImage3D"](target, level, xoffset, yoffset, zoffset, width, height, depth, format, HEAPU8, data, imageSize)
            }
        }

        function _glCopyBufferSubData(x0, x1, x2, x3, x4) {
            GLctx["copyBufferSubData"](x0, x1, x2, x3, x4)
        }

        function _glCopyTexSubImage2D(x0, x1, x2, x3, x4, x5, x6, x7) {
            GLctx["copyTexSubImage2D"](x0, x1, x2, x3, x4, x5, x6, x7)
        }

        function _glCopyTexSubImage3D(x0, x1, x2, x3, x4, x5, x6, x7, x8) {
            GLctx["copyTexSubImage3D"](x0, x1, x2, x3, x4, x5, x6, x7, x8)
        }

        function _glCreateProgram() {
            var id = GL.getNewId(GL.programs);
            var program = GLctx.createProgram();
            program.name = id;
            program.maxUniformLength = program.maxAttributeLength = program.maxUniformBlockNameLength = 0;
            program.uniformIdCounter = 1;
            GL.programs[id] = program;
            return id
        }

        function _glCreateShader(shaderType) {
            var id = GL.getNewId(GL.shaders);
            GL.shaders[id] = GLctx.createShader(shaderType);
            return id
        }

        function _glDeleteBuffers(n, buffers) {
            for (var i = 0; i < n; i++) {
                var id = HEAP32[buffers + i * 4 >> 2];
                var buffer = GL.buffers[id];
                if (!buffer) continue;
                GLctx.deleteBuffer(buffer);
                buffer.name = 0;
                GL.buffers[id] = null;
                if (id == GLctx.currentPixelPackBufferBinding) GLctx.currentPixelPackBufferBinding = 0;
                if (id == GLctx.currentPixelUnpackBufferBinding) GLctx.currentPixelUnpackBufferBinding = 0
            }
        }

        function _glDeleteFramebuffers(n, framebuffers) {
            for (var i = 0; i < n; ++i) {
                var id = HEAP32[framebuffers + i * 4 >> 2];
                var framebuffer = GL.framebuffers[id];
                if (!framebuffer) continue;
                GLctx.deleteFramebuffer(framebuffer);
                framebuffer.name = 0;
                GL.framebuffers[id] = null
            }
        }

        function _glDeleteProgram(id) {
            if (!id) return;
            var program = GL.programs[id];
            if (!program) {
                GL.recordError(1281);
                return
            }
            GLctx.deleteProgram(program);
            program.name = 0;
            GL.programs[id] = null
        }

        function _glDeleteQueries(n, ids) {
            for (var i = 0; i < n; i++) {
                var id = HEAP32[ids + i * 4 >> 2];
                var query = GL.queries[id];
                if (!query) continue;
                GLctx["deleteQuery"](query);
                GL.queries[id] = null
            }
        }

        function _glDeleteRenderbuffers(n, renderbuffers) {
            for (var i = 0; i < n; i++) {
                var id = HEAP32[renderbuffers + i * 4 >> 2];
                var renderbuffer = GL.renderbuffers[id];
                if (!renderbuffer) continue;
                GLctx.deleteRenderbuffer(renderbuffer);
                renderbuffer.name = 0;
                GL.renderbuffers[id] = null
            }
        }

        function _glDeleteShader(id) {
            if (!id) return;
            var shader = GL.shaders[id];
            if (!shader) {
                GL.recordError(1281);
                return
            }
            GLctx.deleteShader(shader);
            GL.shaders[id] = null
        }

        function _glDeleteSync(id) {
            if (!id) return;
            var sync = GL.syncs[id];
            if (!sync) {
                GL.recordError(1281);
                return
            }
            GLctx.deleteSync(sync);
            sync.name = 0;
            GL.syncs[id] = null
        }

        function _glDeleteTextures(n, textures) {
            for (var i = 0; i < n; i++) {
                var id = HEAP32[textures + i * 4 >> 2];
                var texture = GL.textures[id];
                if (!texture) continue;
                GLctx.deleteTexture(texture);
                texture.name = 0;
                GL.textures[id] = null
            }
        }

        function _glDeleteTransformFeedbacks(n, ids) {
            for (var i = 0; i < n; i++) {
                var id = HEAP32[ids + i * 4 >> 2];
                var transformFeedback = GL.transformFeedbacks[id];
                if (!transformFeedback) continue;
                GLctx["deleteTransformFeedback"](transformFeedback);
                transformFeedback.name = 0;
                GL.transformFeedbacks[id] = null
            }
        }

        function _glDeleteVertexArrays(n, vaos) {
            for (var i = 0; i < n; i++) {
                var id = HEAP32[vaos + i * 4 >> 2];
                GLctx["deleteVertexArray"](GL.vaos[id]);
                GL.vaos[id] = null
            }
        }

        function _glDepthFunc(x0) {
            GLctx["depthFunc"](x0)
        }

        function _glDepthMask(flag) {
            GLctx.depthMask(!!flag)
        }

        function _glDepthRangef(x0, x1) {
            GLctx["depthRange"](x0, x1)
        }

        function _glDisable(x0) {
            GLctx["disable"](x0)
        }

        function _glDrawArrays(mode, first, count) {
            GLctx.drawArrays(mode, first, count)
        }

        function _glDrawArraysInstanced(mode, first, count, primcount) {
            GLctx["drawArraysInstanced"](mode, first, count, primcount)
        }

        function _glDrawArraysInstancedBaseInstanceANGLE(mode, first, count, instanceCount, baseInstance) {
            GLctx.dibvbi["drawArraysInstancedBaseInstanceWEBGL"](mode, first, count, instanceCount, baseInstance)
        }
        var tempFixedLengthArray = [];

        function _glDrawBuffers(n, bufs) {
            var bufArray = tempFixedLengthArray[n];
            for (var i = 0; i < n; i++) {
                bufArray[i] = HEAP32[bufs + i * 4 >> 2]
            }
            GLctx["drawBuffers"](bufArray)
        }

        function _glDrawElements(mode, count, type, indices) {
            GLctx.drawElements(mode, count, type, indices)
        }

        function _glDrawElementsInstanced(mode, count, type, indices, primcount) {
            GLctx["drawElementsInstanced"](mode, count, type, indices, primcount)
        }

        function _glDrawElementsInstancedBaseVertexBaseInstanceANGLE(mode, count, type, offset, instanceCount, baseVertex, baseinstance) {
            GLctx.dibvbi["drawElementsInstancedBaseVertexBaseInstanceWEBGL"](mode, count, type, offset, instanceCount, baseVertex, baseinstance)
        }

        function _glDrawRangeElements(mode, start, end, count, type, indices) {
            _glDrawElements(mode, count, type, indices)
        }

        function _glEnable(x0) {
            GLctx["enable"](x0)
        }

        function _glEnableVertexAttribArray(index) {
            GLctx.enableVertexAttribArray(index)
        }

        function _glEndQuery(x0) {
            GLctx["endQuery"](x0)
        }

        function _glEndTransformFeedback() {
            GLctx["endTransformFeedback"]()
        }

        function _glFenceSync(condition, flags) {
            var sync = GLctx.fenceSync(condition, flags);
            if (sync) {
                var id = GL.getNewId(GL.syncs);
                sync.name = id;
                GL.syncs[id] = sync;
                return id
            }
            return 0
        }

        function _glFlush() {
            GLctx["flush"]()
        }

        function _glFramebufferRenderbuffer(target, attachment, renderbuffertarget, renderbuffer) {
            GLctx.framebufferRenderbuffer(target, attachment, renderbuffertarget, GL.renderbuffers[renderbuffer])
        }

        function _glFramebufferTexture2D(target, attachment, textarget, texture, level) {
            GLctx.framebufferTexture2D(target, attachment, textarget, GL.textures[texture], level)
        }

        function _glFramebufferTextureLayer(target, attachment, texture, level, layer) {
            GLctx.framebufferTextureLayer(target, attachment, GL.textures[texture], level, layer)
        }

        function __glGenObject(n, buffers, createFunction, objectTable) {
            for (var i = 0; i < n; i++) {
                var buffer = GLctx[createFunction]();
                var id = buffer && GL.getNewId(objectTable);
                if (buffer) {
                    buffer.name = id;
                    objectTable[id] = buffer
                } else {
                    GL.recordError(1282)
                }
                HEAP32[buffers + i * 4 >> 2] = id
            }
        }

        function _glGenBuffers(n, buffers) {
            __glGenObject(n, buffers, "createBuffer", GL.buffers)
        }

        function _glGenFramebuffers(n, ids) {
            __glGenObject(n, ids, "createFramebuffer", GL.framebuffers)
        }

        function _glGenQueries(n, ids) {
            __glGenObject(n, ids, "createQuery", GL.queries)
        }

        function _glGenRenderbuffers(n, renderbuffers) {
            __glGenObject(n, renderbuffers, "createRenderbuffer", GL.renderbuffers)
        }

        function _glGenTextures(n, textures) {
            __glGenObject(n, textures, "createTexture", GL.textures)
        }

        function _glGenTransformFeedbacks(n, ids) {
            __glGenObject(n, ids, "createTransformFeedback", GL.transformFeedbacks)
        }

        function _glGenVertexArrays(n, arrays) {
            __glGenObject(n, arrays, "createVertexArray", GL.vaos)
        }

        function _glGenerateMipmap(x0) {
            GLctx["generateMipmap"](x0)
        }

        function _glGetBufferParameteriv(target, value, data) {
            if (!data) {
                GL.recordError(1281);
                return
            }
            HEAP32[data >> 2] = GLctx.getBufferParameter(target, value)
        }

        function _glGetBufferSubData(target, offset, size, data) {
            if (!data) {
                GL.recordError(1281);
                return
            }
            size && GLctx["getBufferSubData"](target, offset, HEAPU8, data, size)
        }

        function _glGetError() {
            var error = GLctx.getError() || GL.lastError;
            GL.lastError = 0;
            return error
        }

        function readI53FromI64(ptr) {
            return HEAPU32[ptr >> 2] + HEAP32[ptr + 4 >> 2] * 4294967296
        }

        function readI53FromU64(ptr) {
            return HEAPU32[ptr >> 2] + HEAPU32[ptr + 4 >> 2] * 4294967296
        }

        function writeI53ToI64(ptr, num) {
            HEAPU32[ptr >> 2] = num;
            HEAPU32[ptr + 4 >> 2] = (num - HEAPU32[ptr >> 2]) / 4294967296;
            var deserialized = num >= 0 ? readI53FromU64(ptr) : readI53FromI64(ptr);
            if (deserialized != num) warnOnce("writeI53ToI64() out of range: serialized JS Number " + num + " to Wasm heap as bytes lo=" + ptrToString(HEAPU32[ptr >> 2]) + ", hi=" + ptrToString(HEAPU32[ptr + 4 >> 2]) + ", which deserializes back to " + deserialized + " instead!")
        }

        function emscriptenWebGLGet(name_, p, type) {
            if (!p) {
                GL.recordError(1281);
                return
            }
            var ret = undefined;
            switch (name_) {
                case 36346:
                    ret = 1;
                    break;
                case 36344:
                    if (type != 0 && type != 1) {
                        GL.recordError(1280)
                    }
                    return;
                case 34814:
                case 36345:
                    ret = 0;
                    break;
                case 34466:
                    var formats = GLctx.getParameter(34467);
                    ret = formats ? formats.length : 0;
                    break;
                case 33309:
                    if (GL.currentContext.version < 2) {
                        GL.recordError(1282);
                        return
                    }
                    var exts = GLctx.getSupportedExtensions() || [];
                    ret = 2 * exts.length;
                    break;
                case 33307:
                case 33308:
                    if (GL.currentContext.version < 2) {
                        GL.recordError(1280);
                        return
                    }
                    ret = name_ == 33307 ? 3 : 0;
                    break
            }
            if (ret === undefined) {
                var result = GLctx.getParameter(name_);
                switch (typeof result) {
                    case "number":
                        ret = result;
                        break;
                    case "boolean":
                        ret = result ? 1 : 0;
                        break;
                    case "string":
                        GL.recordError(1280);
                        return;
                    case "object":
                        if (result === null) {
                            switch (name_) {
                                case 34964:
                                case 35725:
                                case 34965:
                                case 36006:
                                case 36007:
                                case 32873:
                                case 34229:
                                case 36662:
                                case 36663:
                                case 35053:
                                case 35055:
                                case 36010:
                                case 35097:
                                case 35869:
                                case 32874:
                                case 36389:
                                case 35983:
                                case 35368:
                                case 34068: {
                                    ret = 0;
                                    break
                                }
                                default: {
                                    GL.recordError(1280);
                                    return
                                }
                            }
                        } else if (result instanceof Float32Array || result instanceof Uint32Array || result instanceof Int32Array || result instanceof Array) {
                            for (var i = 0; i < result.length; ++i) {
                                switch (type) {
                                    case 0:
                                        HEAP32[p + i * 4 >> 2] = result[i];
                                        break;
                                    case 2:
                                        HEAPF32[p + i * 4 >> 2] = result[i];
                                        break;
                                    case 4:
                                        HEAP8[p + i >> 0] = result[i] ? 1 : 0;
                                        break
                                }
                            }
                            return
                        } else {
                            try {
                                ret = result.name | 0
                            } catch (e) {
                                GL.recordError(1280);
                                err("GL_INVALID_ENUM in glGet" + type + "v: Unknown object returned from WebGL getParameter(" + name_ + ")! (error: " + e + ")");
                                return
                            }
                        }
                        break;
                    default:
                        GL.recordError(1280);
                        err("GL_INVALID_ENUM in glGet" + type + "v: Native code calling glGet" + type + "v(" + name_ + ") and it returns " + result + " of type " + typeof result + "!");
                        return
                }
            }
            switch (type) {
                case 1:
                    writeI53ToI64(p, ret);
                    break;
                case 0:
                    HEAP32[p >> 2] = ret;
                    break;
                case 2:
                    HEAPF32[p >> 2] = ret;
                    break;
                case 4:
                    HEAP8[p >> 0] = ret ? 1 : 0;
                    break
            }
        }

        function _glGetFloatv(name_, p) {
            emscriptenWebGLGet(name_, p, 2)
        }

        function _glGetIntegerv(name_, p) {
            emscriptenWebGLGet(name_, p, 0)
        }

        function _glGetProgramInfoLog(program, maxLength, length, infoLog) {
            var log = GLctx.getProgramInfoLog(GL.programs[program]);
            if (log === null) log = "(unknown error)";
            var numBytesWrittenExclNull = maxLength > 0 && infoLog ? stringToUTF8(log, infoLog, maxLength) : 0;
            if (length) HEAP32[length >> 2] = numBytesWrittenExclNull
        }

        function _glGetProgramiv(program, pname, p) {
            if (!p) {
                GL.recordError(1281);
                return
            }
            if (program >= GL.counter) {
                GL.recordError(1281);
                return
            }
            program = GL.programs[program];
            if (pname == 35716) {
                var log = GLctx.getProgramInfoLog(program);
                if (log === null) log = "(unknown error)";
                HEAP32[p >> 2] = log.length + 1
            } else if (pname == 35719) {
                if (!program.maxUniformLength) {
                    for (var i = 0; i < GLctx.getProgramParameter(program, 35718); ++i) {
                        program.maxUniformLength = Math.max(program.maxUniformLength, GLctx.getActiveUniform(program, i).name.length + 1)
                    }
                }
                HEAP32[p >> 2] = program.maxUniformLength
            } else if (pname == 35722) {
                if (!program.maxAttributeLength) {
                    for (var i = 0; i < GLctx.getProgramParameter(program, 35721); ++i) {
                        program.maxAttributeLength = Math.max(program.maxAttributeLength, GLctx.getActiveAttrib(program, i).name.length + 1)
                    }
                }
                HEAP32[p >> 2] = program.maxAttributeLength
            } else if (pname == 35381) {
                if (!program.maxUniformBlockNameLength) {
                    for (var i = 0; i < GLctx.getProgramParameter(program, 35382); ++i) {
                        program.maxUniformBlockNameLength = Math.max(program.maxUniformBlockNameLength, GLctx.getActiveUniformBlockName(program, i).length + 1)
                    }
                }
                HEAP32[p >> 2] = program.maxUniformBlockNameLength
            } else {
                HEAP32[p >> 2] = GLctx.getProgramParameter(program, pname)
            }
        }

        function _glGetQueryObjectuiv(id, pname, params) {
            if (!params) {
                GL.recordError(1281);
                return
            }
            var query = GL.queries[id];
            var param = GLctx["getQueryParameter"](query, pname);
            var ret;
            if (typeof param == "boolean") {
                ret = param ? 1 : 0
            } else {
                ret = param
            }
            HEAP32[params >> 2] = ret
        }

        function _glGetShaderInfoLog(shader, maxLength, length, infoLog) {
            var log = GLctx.getShaderInfoLog(GL.shaders[shader]);
            if (log === null) log = "(unknown error)";
            var numBytesWrittenExclNull = maxLength > 0 && infoLog ? stringToUTF8(log, infoLog, maxLength) : 0;
            if (length) HEAP32[length >> 2] = numBytesWrittenExclNull
        }

        function _glGetShaderiv(shader, pname, p) {
            if (!p) {
                GL.recordError(1281);
                return
            }
            if (pname == 35716) {
                var log = GLctx.getShaderInfoLog(GL.shaders[shader]);
                if (log === null) log = "(unknown error)";
                var logLength = log ? log.length + 1 : 0;
                HEAP32[p >> 2] = logLength
            } else if (pname == 35720) {
                var source = GLctx.getShaderSource(GL.shaders[shader]);
                var sourceLength = source ? source.length + 1 : 0;
                HEAP32[p >> 2] = sourceLength
            } else {
                HEAP32[p >> 2] = GLctx.getShaderParameter(GL.shaders[shader], pname)
            }
        }

        function stringToNewUTF8(jsString) {
            var length = lengthBytesUTF8(jsString) + 1;
            var cString = _malloc(length);
            stringToUTF8(jsString, cString, length);
            return cString
        }

        function _glGetString(name_) {
            var ret = GL.stringCache[name_];
            if (!ret) {
                switch (name_) {
                    case 7939:
                        var exts = GLctx.getSupportedExtensions() || [];
                        exts = exts.concat(exts.map(function(e) {
                            return "GL_" + e
                        }));
                        ret = stringToNewUTF8(exts.join(" "));
                        break;
                    case 7936:
                    case 7937:
                    case 37445:
                    case 37446:
                        var s = GLctx.getParameter(name_);
                        if (!s) {
                            GL.recordError(1280)
                        }
                        ret = s && stringToNewUTF8(s);
                        break;
                    case 7938:
                        var glVersion = GLctx.getParameter(7938);
                        if (true) glVersion = "OpenGL ES 3.0 (" + glVersion + ")";
                        else {
                            glVersion = "OpenGL ES 2.0 (" + glVersion + ")"
                        }
                        ret = stringToNewUTF8(glVersion);
                        break;
                    case 35724:
                        var glslVersion = GLctx.getParameter(35724);
                        var ver_re = /^WebGL GLSL ES ([0-9]\.[0-9][0-9]?)(?:$| .*)/;
                        var ver_num = glslVersion.match(ver_re);
                        if (ver_num !== null) {
                            if (ver_num[1].length == 3) ver_num[1] = ver_num[1] + "0";
                            glslVersion = "OpenGL ES GLSL ES " + ver_num[1] + " (" + glslVersion + ")"
                        }
                        ret = stringToNewUTF8(glslVersion);
                        break;
                    default:
                        GL.recordError(1280)
                }
                GL.stringCache[name_] = ret
            }
            return ret
        }

        function _glGetStringi(name, index) {
            if (GL.currentContext.version < 2) {
                GL.recordError(1282);
                return 0
            }
            var stringiCache = GL.stringiCache[name];
            if (stringiCache) {
                if (index < 0 || index >= stringiCache.length) {
                    GL.recordError(1281);
                    return 0
                }
                return stringiCache[index]
            }
            switch (name) {
                case 7939:
                    var exts = GLctx.getSupportedExtensions() || [];
                    exts = exts.concat(exts.map(function(e) {
                        return "GL_" + e
                    }));
                    exts = exts.map(function(e) {
                        return stringToNewUTF8(e)
                    });
                    stringiCache = GL.stringiCache[name] = exts;
                    if (index < 0 || index >= stringiCache.length) {
                        GL.recordError(1281);
                        return 0
                    }
                    return stringiCache[index];
                default:
                    GL.recordError(1280);
                    return 0
            }
        }

        function _glGetUniformBlockIndex(program, uniformBlockName) {
            return GLctx["getUniformBlockIndex"](GL.programs[program], UTF8ToString(uniformBlockName))
        }

        function webglGetLeftBracePos(name) {
            return name.slice(-1) == "]" && name.lastIndexOf("[")
        }

        function webglPrepareUniformLocationsBeforeFirstUse(program) {
            var uniformLocsById = program.uniformLocsById,
                uniformSizeAndIdsByName = program.uniformSizeAndIdsByName,
                i, j;
            if (!uniformLocsById) {
                program.uniformLocsById = uniformLocsById = {};
                program.uniformArrayNamesById = {};
                for (i = 0; i < GLctx.getProgramParameter(program, 35718); ++i) {
                    var u = GLctx.getActiveUniform(program, i);
                    var nm = u.name;
                    var sz = u.size;
                    var lb = webglGetLeftBracePos(nm);
                    var arrayName = lb > 0 ? nm.slice(0, lb) : nm;
                    var id = program.uniformIdCounter;
                    program.uniformIdCounter += sz;
                    uniformSizeAndIdsByName[arrayName] = [sz, id];
                    for (j = 0; j < sz; ++j) {
                        uniformLocsById[id] = j;
                        program.uniformArrayNamesById[id++] = arrayName
                    }
                }
            }
        }

        function _glGetUniformLocation(program, name) {
            name = UTF8ToString(name);
            if (program = GL.programs[program]) {
                webglPrepareUniformLocationsBeforeFirstUse(program);
                var uniformLocsById = program.uniformLocsById;
                var arrayIndex = 0;
                var uniformBaseName = name;
                var leftBrace = webglGetLeftBracePos(name);
                if (leftBrace > 0) {
                    arrayIndex = jstoi_q(name.slice(leftBrace + 1)) >>> 0;
                    uniformBaseName = name.slice(0, leftBrace)
                }
                var sizeAndId = program.uniformSizeAndIdsByName[uniformBaseName];
                if (sizeAndId && arrayIndex < sizeAndId[0]) {
                    arrayIndex += sizeAndId[1];
                    if (uniformLocsById[arrayIndex] = uniformLocsById[arrayIndex] || GLctx.getUniformLocation(program, name)) {
                        return arrayIndex
                    }
                }
            } else {
                GL.recordError(1281)
            }
            return -1
        }

        function _glInvalidateFramebuffer(target, numAttachments, attachments) {
            var list = tempFixedLengthArray[numAttachments];
            for (var i = 0; i < numAttachments; i++) {
                list[i] = HEAP32[attachments + i * 4 >> 2]
            }
            GLctx["invalidateFramebuffer"](target, list)
        }

        function _glInvalidateSubFramebuffer(target, numAttachments, attachments, x, y, width, height) {
            var list = tempFixedLengthArray[numAttachments];
            for (var i = 0; i < numAttachments; i++) {
                list[i] = HEAP32[attachments + i * 4 >> 2]
            }
            GLctx["invalidateSubFramebuffer"](target, list, x, y, width, height)
        }

        function _glLinkProgram(program) {
            program = GL.programs[program];
            GLctx.linkProgram(program);
            program.uniformLocsById = 0;
            program.uniformSizeAndIdsByName = {}
        }

        function _glMultiDrawArraysANGLE(mode, firsts, counts, drawcount) {
            GLctx.multiDrawWebgl["multiDrawArraysWEBGL"](mode, HEAP32, firsts >> 2, HEAP32, counts >> 2, drawcount)
        }

        function _glMultiDrawArraysInstancedANGLE(mode, firsts, counts, instanceCounts, drawcount) {
            GLctx.multiDrawWebgl["multiDrawArraysInstancedWEBGL"](mode, HEAP32, firsts >> 2, HEAP32, counts >> 2, HEAP32, instanceCounts >> 2, drawcount)
        }

        function _glMultiDrawArraysInstancedBaseInstanceANGLE(mode, firsts, counts, instanceCounts, baseInstances, drawCount) {
            GLctx.mdibvbi["multiDrawArraysInstancedBaseInstanceWEBGL"](mode, HEAP32, firsts >> 2, HEAP32, counts >> 2, HEAP32, instanceCounts >> 2, HEAPU32, baseInstances >> 2, drawCount)
        }

        function _glMultiDrawElementsANGLE(mode, counts, type, offsets, drawcount) {
            GLctx.multiDrawWebgl["multiDrawElementsWEBGL"](mode, HEAP32, counts >> 2, type, HEAP32, offsets >> 2, drawcount)
        }

        function _glMultiDrawElementsInstancedANGLE(mode, counts, type, offsets, instanceCounts, drawcount) {
            GLctx.multiDrawWebgl["multiDrawElementsInstancedWEBGL"](mode, HEAP32, counts >> 2, type, HEAP32, offsets >> 2, HEAP32, instanceCounts >> 2, drawcount)
        }

        function _glMultiDrawElementsInstancedBaseVertexBaseInstanceANGLE(mode, counts, type, offsets, instanceCounts, baseVertices, baseInstances, drawCount) {
            GLctx.mdibvbi["multiDrawElementsInstancedBaseVertexBaseInstanceWEBGL"](mode, HEAP32, counts >> 2, type, HEAP32, offsets >> 2, HEAP32, instanceCounts >> 2, HEAP32, baseVertices >> 2, HEAPU32, baseInstances >> 2, drawCount)
        }

        function _glPixelStorei(pname, param) {
            if (pname == 3317) {
                GL.unpackAlignment = param
            }
            GLctx.pixelStorei(pname, param)
        }

        function _glReadBuffer(x0) {
            GLctx["readBuffer"](x0)
        }

        function computeUnpackAlignedImageSize(width, height, sizePerPixel, alignment) {
            function roundedToNextMultipleOf(x, y) {
                return x + y - 1 & -y
            }
            var plainRowSize = width * sizePerPixel;
            var alignedRowSize = roundedToNextMultipleOf(plainRowSize, alignment);
            return height * alignedRowSize
        }

        function __colorChannelsInGlTextureFormat(format) {
            var colorChannels = {
                5: 3,
                6: 4,
                8: 2,
                29502: 3,
                29504: 4,
                26917: 2,
                26918: 2,
                29846: 3,
                29847: 4
            };
            return colorChannels[format - 6402] || 1
        }

        function heapObjectForWebGLType(type) {
            type -= 5120;
            if (type == 0) return HEAP8;
            if (type == 1) return HEAPU8;
            if (type == 2) return HEAP16;
            if (type == 4) return HEAP32;
            if (type == 6) return HEAPF32;
            if (type == 5 || type == 28922 || type == 28520 || type == 30779 || type == 30782) return HEAPU32;
            return HEAPU16
        }

        function heapAccessShiftForWebGLHeap(heap) {
            return 31 - Math.clz32(heap.BYTES_PER_ELEMENT)
        }

        function emscriptenWebGLGetTexPixelData(type, format, width, height, pixels, internalFormat) {
            var heap = heapObjectForWebGLType(type);
            var shift = heapAccessShiftForWebGLHeap(heap);
            var byteSize = 1 << shift;
            var sizePerPixel = __colorChannelsInGlTextureFormat(format) * byteSize;
            var bytes = computeUnpackAlignedImageSize(width, height, sizePerPixel, GL.unpackAlignment);
            return heap.subarray(pixels >> shift, pixels + bytes >> shift)
        }

        function _glReadPixels(x, y, width, height, format, type, pixels) {
            if (true) {
                if (GLctx.currentPixelPackBufferBinding) {
                    GLctx.readPixels(x, y, width, height, format, type, pixels)
                } else {
                    var heap = heapObjectForWebGLType(type);
                    GLctx.readPixels(x, y, width, height, format, type, heap, pixels >> heapAccessShiftForWebGLHeap(heap))
                }
                return
            }
            var pixelData = emscriptenWebGLGetTexPixelData(type, format, width, height, pixels, format);
            if (!pixelData) {
                GL.recordError(1280);
                return
            }
            GLctx.readPixels(x, y, width, height, format, type, pixelData)
        }

        function _glRenderbufferStorage(x0, x1, x2, x3) {
            GLctx["renderbufferStorage"](x0, x1, x2, x3)
        }

        function _glRenderbufferStorageMultisample(x0, x1, x2, x3, x4) {
            GLctx["renderbufferStorageMultisample"](x0, x1, x2, x3, x4)
        }

        function _glShaderSource(shader, count, string, length) {
            var source = GL.getSource(shader, count, string, length);
            GLctx.shaderSource(GL.shaders[shader], source)
        }

        function _glStencilFunc(x0, x1, x2) {
            GLctx["stencilFunc"](x0, x1, x2)
        }

        function _glStencilOp(x0, x1, x2) {
            GLctx["stencilOp"](x0, x1, x2)
        }

        function _glTexImage2D(target, level, internalFormat, width, height, border, format, type, pixels) {
            if (true) {
                if (GLctx.currentPixelUnpackBufferBinding) {
                    GLctx.texImage2D(target, level, internalFormat, width, height, border, format, type, pixels)
                } else if (pixels) {
                    var heap = heapObjectForWebGLType(type);
                    GLctx.texImage2D(target, level, internalFormat, width, height, border, format, type, heap, pixels >> heapAccessShiftForWebGLHeap(heap))
                } else {
                    GLctx.texImage2D(target, level, internalFormat, width, height, border, format, type, null)
                }
                return
            }
            GLctx.texImage2D(target, level, internalFormat, width, height, border, format, type, pixels ? emscriptenWebGLGetTexPixelData(type, format, width, height, pixels, internalFormat) : null)
        }

        function _glTexImage3D(target, level, internalFormat, width, height, depth, border, format, type, pixels) {
            if (GLctx.currentPixelUnpackBufferBinding) {
                GLctx["texImage3D"](target, level, internalFormat, width, height, depth, border, format, type, pixels)
            } else if (pixels) {
                var heap = heapObjectForWebGLType(type);
                GLctx["texImage3D"](target, level, internalFormat, width, height, depth, border, format, type, heap, pixels >> heapAccessShiftForWebGLHeap(heap))
            } else {
                GLctx["texImage3D"](target, level, internalFormat, width, height, depth, border, format, type, null)
            }
        }

        function _glTexParameterf(x0, x1, x2) {
            GLctx["texParameterf"](x0, x1, x2)
        }

        function _glTexParameterfv(target, pname, params) {
            var param = HEAPF32[params >> 2];
            GLctx.texParameterf(target, pname, param)
        }

        function _glTexParameteri(x0, x1, x2) {
            GLctx["texParameteri"](x0, x1, x2)
        }

        function _glTexParameteriv(target, pname, params) {
            var param = HEAP32[params >> 2];
            GLctx.texParameteri(target, pname, param)
        }

        function _glTexStorage2D(x0, x1, x2, x3, x4) {
            GLctx["texStorage2D"](x0, x1, x2, x3, x4)
        }

        function _glTexStorage3D(x0, x1, x2, x3, x4, x5) {
            GLctx["texStorage3D"](x0, x1, x2, x3, x4, x5)
        }

        function _glTexSubImage2D(target, level, xoffset, yoffset, width, height, format, type, pixels) {
            if (true) {
                if (GLctx.currentPixelUnpackBufferBinding) {
                    GLctx.texSubImage2D(target, level, xoffset, yoffset, width, height, format, type, pixels)
                } else if (pixels) {
                    var heap = heapObjectForWebGLType(type);
                    GLctx.texSubImage2D(target, level, xoffset, yoffset, width, height, format, type, heap, pixels >> heapAccessShiftForWebGLHeap(heap))
                } else {
                    GLctx.texSubImage2D(target, level, xoffset, yoffset, width, height, format, type, null)
                }
                return
            }
            var pixelData = null;
            if (pixels) pixelData = emscriptenWebGLGetTexPixelData(type, format, width, height, pixels, 0);
            GLctx.texSubImage2D(target, level, xoffset, yoffset, width, height, format, type, pixelData)
        }

        function _glTexSubImage3D(target, level, xoffset, yoffset, zoffset, width, height, depth, format, type, pixels) {
            if (GLctx.currentPixelUnpackBufferBinding) {
                GLctx["texSubImage3D"](target, level, xoffset, yoffset, zoffset, width, height, depth, format, type, pixels)
            } else if (pixels) {
                var heap = heapObjectForWebGLType(type);
                GLctx["texSubImage3D"](target, level, xoffset, yoffset, zoffset, width, height, depth, format, type, heap, pixels >> heapAccessShiftForWebGLHeap(heap))
            } else {
                GLctx["texSubImage3D"](target, level, xoffset, yoffset, zoffset, width, height, depth, format, type, null)
            }
        }

        function _glTransformFeedbackVaryings(program, count, varyings, bufferMode) {
            program = GL.programs[program];
            var vars = [];
            for (var i = 0; i < count; i++) vars.push(UTF8ToString(HEAP32[varyings + i * 4 >> 2]));
            GLctx["transformFeedbackVaryings"](program, vars, bufferMode)
        }

        function webglGetUniformLocation(location) {
            var p = GLctx.currentProgram;
            if (p) {
                var webglLoc = p.uniformLocsById[location];
                if (typeof webglLoc == "number") {
                    p.uniformLocsById[location] = webglLoc = GLctx.getUniformLocation(p, p.uniformArrayNamesById[location] + (webglLoc > 0 ? "[" + webglLoc + "]" : ""))
                }
                return webglLoc
            } else {
                GL.recordError(1282)
            }
        }

        function _glUniform1f(location, v0) {
            GLctx.uniform1f(webglGetUniformLocation(location), v0)
        }

        function _glUniform1i(location, v0) {
            GLctx.uniform1i(webglGetUniformLocation(location), v0)
        }

        function _glUniform1ui(location, v0) {
            GLctx.uniform1ui(webglGetUniformLocation(location), v0)
        }

        function _glUniform1uiv(location, count, value) {
            count && GLctx.uniform1uiv(webglGetUniformLocation(location), HEAPU32, value >> 2, count)
        }

        function _glUniform2f(location, v0, v1) {
            GLctx.uniform2f(webglGetUniformLocation(location), v0, v1)
        }

        function _glUniform4f(location, v0, v1, v2, v3) {
            GLctx.uniform4f(webglGetUniformLocation(location), v0, v1, v2, v3)
        }

        function _glUniform4i(location, v0, v1, v2, v3) {
            GLctx.uniform4i(webglGetUniformLocation(location), v0, v1, v2, v3)
        }

        function _glUniformBlockBinding(program, uniformBlockIndex, uniformBlockBinding) {
            program = GL.programs[program];
            GLctx["uniformBlockBinding"](program, uniformBlockIndex, uniformBlockBinding)
        }

        function _glUseProgram(program) {
            program = GL.programs[program];
            GLctx.useProgram(program);
            GLctx.currentProgram = program
        }

        function _glVertexAttribDivisor(index, divisor) {
            GLctx["vertexAttribDivisor"](index, divisor)
        }

        function _glVertexAttribIPointer(index, size, type, stride, ptr) {
            GLctx["vertexAttribIPointer"](index, size, type, stride, ptr)
        }

        function _glVertexAttribPointer(index, size, type, normalized, stride, ptr) {
            GLctx.vertexAttribPointer(index, size, type, !!normalized, stride, ptr)
        }

        function _glViewport(x0, x1, x2, x3) {
            GLctx["viewport"](x0, x1, x2, x3)
        }

        function _magnumPlatformCanvasId() {
            var id = "#" + Module["canvas"].id;
            var bytes = lengthBytesUTF8(id) + 1;
            var memory = _malloc(bytes);
            stringToUTF8(id, memory, bytes);
            return memory
        }

        function _magnumPlatformKeyboardListeningElement() {
            var element = Module["keyboardListeningElement"] || document;
            if (element === document) return 1;
            if (element === window) return 2;
            if ("id" in element) {
                var id = "#" + element.id;
                var bytes = lengthBytesUTF8(id) + 1;
                var memory = _malloc(bytes);
                stringToUTF8(id, memory, bytes);
                return memory
            }
            return 0
        }

        function dynCallLegacy(sig, ptr, args) {
            assert(typeof dynCalls != "undefined", "Global dynCalls dictionary was not generated in the build! Pass -sDEFAULT_LIBRARY_FUNCS_TO_INCLUDE=$dynCall linker flag to include it!");
            assert(sig in dynCalls, "bad function pointer type - sig is not in dynCalls: '" + sig + "'");
            if (args && args.length) {
                assert(args.length === sig.substring(1).replace(/j/g, "--").length)
            } else {
                assert(sig.length == 1)
            }
            var f = dynCalls[sig];
            return args && args.length ? f.apply(null, [ptr].concat(args)) : f.call(null, ptr)
        }

        function dynCall(sig, ptr, args) {
            if (sig.includes("j")) {
                return dynCallLegacy(sig, ptr, args)
            }
            assert(getWasmTableEntry(ptr), "missing table entry in dynCall: " + ptr);
            var rtn = getWasmTableEntry(ptr).apply(null, args);
            return rtn
        }

        function _magnumPlatformRequestAnimationFrame(callback, state) {
            var drawEvent = function() {
                var id = window.requestAnimationFrame(drawEvent);
                if (!dynCall("ii", callback, [state])) window.cancelAnimationFrame(id)
            };
            window.requestAnimationFrame(drawEvent)
        }

        function __isLeapYear(year) {
            return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)
        }

        function __arraySum(array, index) {
            var sum = 0;
            for (var i = 0; i <= index; sum += array[i++]) {}
            return sum
        }
        var __MONTH_DAYS_LEAP = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        var __MONTH_DAYS_REGULAR = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

        function __addDays(date, days) {
            var newDate = new Date(date.getTime());
            while (days > 0) {
                var leap = __isLeapYear(newDate.getFullYear());
                var currentMonth = newDate.getMonth();
                var daysInCurrentMonth = (leap ? __MONTH_DAYS_LEAP : __MONTH_DAYS_REGULAR)[currentMonth];
                if (days > daysInCurrentMonth - newDate.getDate()) {
                    days -= daysInCurrentMonth - newDate.getDate() + 1;
                    newDate.setDate(1);
                    if (currentMonth < 11) {
                        newDate.setMonth(currentMonth + 1)
                    } else {
                        newDate.setMonth(0);
                        newDate.setFullYear(newDate.getFullYear() + 1)
                    }
                } else {
                    newDate.setDate(newDate.getDate() + days);
                    return newDate
                }
            }
            return newDate
        }

        function writeArrayToMemory(array, buffer) {
            assert(array.length >= 0, "writeArrayToMemory array must have a length (should be an array or typed array)");
            HEAP8.set(array, buffer)
        }

        function _strftime(s, maxsize, format, tm) {
            var tm_zone = HEAP32[tm + 40 >> 2];
            var date = {
                tm_sec: HEAP32[tm >> 2],
                tm_min: HEAP32[tm + 4 >> 2],
                tm_hour: HEAP32[tm + 8 >> 2],
                tm_mday: HEAP32[tm + 12 >> 2],
                tm_mon: HEAP32[tm + 16 >> 2],
                tm_year: HEAP32[tm + 20 >> 2],
                tm_wday: HEAP32[tm + 24 >> 2],
                tm_yday: HEAP32[tm + 28 >> 2],
                tm_isdst: HEAP32[tm + 32 >> 2],
                tm_gmtoff: HEAP32[tm + 36 >> 2],
                tm_zone: tm_zone ? UTF8ToString(tm_zone) : ""
            };
            var pattern = UTF8ToString(format);
            var EXPANSION_RULES_1 = {
                "%c": "%a %b %d %H:%M:%S %Y",
                "%D": "%m/%d/%y",
                "%F": "%Y-%m-%d",
                "%h": "%b",
                "%r": "%I:%M:%S %p",
                "%R": "%H:%M",
                "%T": "%H:%M:%S",
                "%x": "%m/%d/%y",
                "%X": "%H:%M:%S",
                "%Ec": "%c",
                "%EC": "%C",
                "%Ex": "%m/%d/%y",
                "%EX": "%H:%M:%S",
                "%Ey": "%y",
                "%EY": "%Y",
                "%Od": "%d",
                "%Oe": "%e",
                "%OH": "%H",
                "%OI": "%I",
                "%Om": "%m",
                "%OM": "%M",
                "%OS": "%S",
                "%Ou": "%u",
                "%OU": "%U",
                "%OV": "%V",
                "%Ow": "%w",
                "%OW": "%W",
                "%Oy": "%y"
            };
            for (var rule in EXPANSION_RULES_1) {
                pattern = pattern.replace(new RegExp(rule, "g"), EXPANSION_RULES_1[rule])
            }
            var WEEKDAYS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
            var MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

            function leadingSomething(value, digits, character) {
                var str = typeof value == "number" ? value.toString() : value || "";
                while (str.length < digits) {
                    str = character[0] + str
                }
                return str
            }

            function leadingNulls(value, digits) {
                return leadingSomething(value, digits, "0")
            }

            function compareByDay(date1, date2) {
                function sgn(value) {
                    return value < 0 ? -1 : value > 0 ? 1 : 0
                }
                var compare;
                if ((compare = sgn(date1.getFullYear() - date2.getFullYear())) === 0) {
                    if ((compare = sgn(date1.getMonth() - date2.getMonth())) === 0) {
                        compare = sgn(date1.getDate() - date2.getDate())
                    }
                }
                return compare
            }

            function getFirstWeekStartDate(janFourth) {
                switch (janFourth.getDay()) {
                    case 0:
                        return new Date(janFourth.getFullYear() - 1, 11, 29);
                    case 1:
                        return janFourth;
                    case 2:
                        return new Date(janFourth.getFullYear(), 0, 3);
                    case 3:
                        return new Date(janFourth.getFullYear(), 0, 2);
                    case 4:
                        return new Date(janFourth.getFullYear(), 0, 1);
                    case 5:
                        return new Date(janFourth.getFullYear() - 1, 11, 31);
                    case 6:
                        return new Date(janFourth.getFullYear() - 1, 11, 30)
                }
            }

            function getWeekBasedYear(date) {
                var thisDate = __addDays(new Date(date.tm_year + 1900, 0, 1), date.tm_yday);
                var janFourthThisYear = new Date(thisDate.getFullYear(), 0, 4);
                var janFourthNextYear = new Date(thisDate.getFullYear() + 1, 0, 4);
                var firstWeekStartThisYear = getFirstWeekStartDate(janFourthThisYear);
                var firstWeekStartNextYear = getFirstWeekStartDate(janFourthNextYear);
                if (compareByDay(firstWeekStartThisYear, thisDate) <= 0) {
                    if (compareByDay(firstWeekStartNextYear, thisDate) <= 0) {
                        return thisDate.getFullYear() + 1
                    }
                    return thisDate.getFullYear()
                }
                return thisDate.getFullYear() - 1
            }
            var EXPANSION_RULES_2 = {
                "%a": function(date) {
                    return WEEKDAYS[date.tm_wday].substring(0, 3)
                },
                "%A": function(date) {
                    return WEEKDAYS[date.tm_wday]
                },
                "%b": function(date) {
                    return MONTHS[date.tm_mon].substring(0, 3)
                },
                "%B": function(date) {
                    return MONTHS[date.tm_mon]
                },
                "%C": function(date) {
                    var year = date.tm_year + 1900;
                    return leadingNulls(year / 100 | 0, 2)
                },
                "%d": function(date) {
                    return leadingNulls(date.tm_mday, 2)
                },
                "%e": function(date) {
                    return leadingSomething(date.tm_mday, 2, " ")
                },
                "%g": function(date) {
                    return getWeekBasedYear(date).toString().substring(2)
                },
                "%G": function(date) {
                    return getWeekBasedYear(date)
                },
                "%H": function(date) {
                    return leadingNulls(date.tm_hour, 2)
                },
                "%I": function(date) {
                    var twelveHour = date.tm_hour;
                    if (twelveHour == 0) twelveHour = 12;
                    else if (twelveHour > 12) twelveHour -= 12;
                    return leadingNulls(twelveHour, 2)
                },
                "%j": function(date) {
                    return leadingNulls(date.tm_mday + __arraySum(__isLeapYear(date.tm_year + 1900) ? __MONTH_DAYS_LEAP : __MONTH_DAYS_REGULAR, date.tm_mon - 1), 3)
                },
                "%m": function(date) {
                    return leadingNulls(date.tm_mon + 1, 2)
                },
                "%M": function(date) {
                    return leadingNulls(date.tm_min, 2)
                },
                "%n": function() {
                    return "\n"
                },
                "%p": function(date) {
                    if (date.tm_hour >= 0 && date.tm_hour < 12) {
                        return "AM"
                    }
                    return "PM"
                },
                "%S": function(date) {
                    return leadingNulls(date.tm_sec, 2)
                },
                "%t": function() {
                    return "\t"
                },
                "%u": function(date) {
                    return date.tm_wday || 7
                },
                "%U": function(date) {
                    var days = date.tm_yday + 7 - date.tm_wday;
                    return leadingNulls(Math.floor(days / 7), 2)
                },
                "%V": function(date) {
                    var val = Math.floor((date.tm_yday + 7 - (date.tm_wday + 6) % 7) / 7);
                    if ((date.tm_wday + 371 - date.tm_yday - 2) % 7 <= 2) {
                        val++
                    }
                    if (!val) {
                        val = 52;
                        var dec31 = (date.tm_wday + 7 - date.tm_yday - 1) % 7;
                        if (dec31 == 4 || dec31 == 5 && __isLeapYear(date.tm_year % 400 - 1)) {
                            val++
                        }
                    } else if (val == 53) {
                        var jan1 = (date.tm_wday + 371 - date.tm_yday) % 7;
                        if (jan1 != 4 && (jan1 != 3 || !__isLeapYear(date.tm_year))) val = 1
                    }
                    return leadingNulls(val, 2)
                },
                "%w": function(date) {
                    return date.tm_wday
                },
                "%W": function(date) {
                    var days = date.tm_yday + 7 - (date.tm_wday + 6) % 7;
                    return leadingNulls(Math.floor(days / 7), 2)
                },
                "%y": function(date) {
                    return (date.tm_year + 1900).toString().substring(2)
                },
                "%Y": function(date) {
                    return date.tm_year + 1900
                },
                "%z": function(date) {
                    var off = date.tm_gmtoff;
                    var ahead = off >= 0;
                    off = Math.abs(off) / 60;
                    off = off / 60 * 100 + off % 60;
                    return (ahead ? "+" : "-") + String("0000" + off).slice(-4)
                },
                "%Z": function(date) {
                    return date.tm_zone
                },
                "%%": function() {
                    return "%"
                }
            };
            pattern = pattern.replace(/%%/g, "\0\0");
            for (var rule in EXPANSION_RULES_2) {
                if (pattern.includes(rule)) {
                    pattern = pattern.replace(new RegExp(rule, "g"), EXPANSION_RULES_2[rule](date))
                }
            }
            pattern = pattern.replace(/\0\0/g, "%");
            var bytes = intArrayFromString(pattern, false);
            if (bytes.length > maxsize) {
                return 0
            }
            writeArrayToMemory(bytes, s);
            return bytes.length - 1
        }

        function _strftime_l(s, maxsize, format, tm, loc) {
            return _strftime(s, maxsize, format, tm)
        }
        var WebXR = {
            allowLayers: false,
            _curRAF: null,
            _nativize_vec3: function(offset, vec) {
                HEAPF32[offset++] = vec.x;
                HEAPF32[offset++] = vec.y;
                HEAPF32[offset++] = vec.z;
                return offset
            },
            _nativize_vec4: function(offset, vec) {
                offset = WebXR._nativize_vec3(offset, vec);
                HEAPF32[offset++] = vec.w;
                return offset
            },
            _nativize_matrix: function(offset, mat) {
                for (let i = 0; i < 16; ++i) HEAPF32[offset + i] = mat[i];
                return offset + 16
            },
            _nativize_rigid_transform: function(offset, t) {
                offset = WebXR._nativize_matrix(offset, t.matrix);
                offset = WebXR._nativize_vec3(offset, t.position);
                offset = WebXR._nativize_vec4(offset, t.orientation);
                return offset
            },
            _nativize_input_source: function(offset, inputSource, id) {
                let handedness = -1;
                if (inputSource.handedness == "left") handedness = 0;
                else if (inputSource.handedness == "right") handedness = 1;
                let targetRayMode = 0;
                if (inputSource.targetRayMode == "tracked-pointer") targetRayMode = 1;
                else if (inputSource.targetRayMode == "screen") targetRayMode = 2;
                HEAP32[offset++] = id;
                HEAP32[offset++] = handedness;
                HEAP32[offset++] = targetRayMode;
                return offset
            },
            _set_input_callback__deps: ["$dynCall"],
            _set_input_callback: function(event, callback, userData) {
                var s = Module.webxr_session;
                if (!s) return;
                if (!callback) return;
                s.addEventListener(event, function(e) {
                    const inputSource = _malloc(3 * 4);
                    WebXR._nativize_input_source(inputSource >> 2, e.inputSource, i);
                    dynCall("vii", callback, [inputSource, userData]);
                    _free(inputSource)
                })
            },
            _set_session_callback__deps: ["$dynCall"],
            _set_session_callback: function(event, callback, userData) {
                var s = Module.webxr_session;
                if (!s) return;
                if (!callback) return;
                s.addEventListener(event, function() {
                    dynCall("vi", callback, [userData])
                })
            }
        };

        function _webxr_get_input_pose(source, outPosePtr, space) {
            let f = Module.webxr_frame;
            if (!f) {
                console.warn("Cannot call webxr_get_input_pose outside of frame callback");
                return false
            }
            const id = HEAP32[source >> 2];
            const input = Module.webxr_session.inputSources[id];
            const s = space == 0 ? input.gripSpace : input.targetRaySpace;
            if (!s) return false;
            const pose = f.getPose(s, Module.webxr_refSpace);
            if (!pose || Number.isNaN(pose.transform.matrix[0])) return false;
            WebXR._nativize_rigid_transform(outPosePtr >> 2, pose.transform);
            return true
        }

        function _webxr_get_input_sources(outArrayPtr, max, outCountPtr) {
            let s = Module.webxr_session;
            if (!s) return;
            let i = 0;
            let i32Index = outArrayPtr >> 2;
            for (let inputSource of s.inputSources) {
                if (i >= max) break;
                i32Index = WebXR._nativize_input_source(i32Index, inputSource, i);
                ++i
            }
            HEAP32[outCountPtr >> 2] = i
        }

        function _webxr_init(frameCallback, startSessionCallback, endSessionCallback, errorCallback, userData) {
            function onError(errorCode) {
                if (!errorCallback) return;
                dynCall("vii", errorCallback, [userData, errorCode])
            }

            function onSessionEnd(mode) {
                if (!endSessionCallback) return;
                mode = {
                    "inline": 0,
                    "immersive-vr": 1,
                    "immersive-ar": 2
                } [mode];
                dynCall("vii", endSessionCallback, [userData, mode])
            }

            function onSessionStart(mode) {
                if (!startSessionCallback) return;
                mode = {
                    "inline": 0,
                    "immersive-vr": 1,
                    "immersive-ar": 2
                } [mode];
                dynCall("vii", startSessionCallback, [userData, mode])
            }
            const SIZE_OF_WEBXR_RIGID_TRANSFORM = (16 + 3 + 4) * 4;
            const SIZE_OF_WEBXR_VIEW = SIZE_OF_WEBXR_RIGID_TRANSFORM + 16 * 4 + 4 * 4 + 4;
            let viewCount = 0;
            let views = null;

            function onFrame(time, frame) {
                if (!frameCallback) return;
                const session = frame.session;
                if (Module.webxr_session != null) session.requestAnimationFrame(onFrame);
                const pose = WebXR.curPose = frame.getViewerPose(Module.webxr_refSpace);
                if (!pose) return;
                if (viewCount != pose.views.length) {
                    if (views != null) _free(views);
                    viewCount = pose.views.length;
                    views = _malloc(SIZE_OF_WEBXR_VIEW * viewCount + SIZE_OF_WEBXR_RIGID_TRANSFORM)
                }
                const glLayer = session.renderState.baseLayer;
                if (glLayer.framebuffer) {
                    const id = Module.webxr_fbo || GL.getNewId(GL.framebuffers);
                    glLayer.framebuffer.name = id;
                    GL.framebuffers[id] = glLayer.framebuffer;
                    Module.webxr_fbo = id;
                    _glBindFramebuffer(Module.ctx.FRAMEBUFFER, id)
                }
                for (let i = 0; i < pose.views.length; ++i) {
                    const view = pose.views[i];
                    const viewport = glLayer.getViewport(view);
                    let eyeIndex = 0;
                    switch (view.eye) {
                        case "left":
                            eyeIndex = 0;
                            break;
                        case "right":
                            eyeIndex = 1;
                            break;
                        default:
                            eyeIndex = i;
                            break
                    }
                    let offset = views + SIZE_OF_WEBXR_VIEW * eyeIndex;
                    offset = WebXR._nativize_rigid_transform(offset >> 2, view.transform);
                    offset = WebXR._nativize_matrix(offset, view.projectionMatrix);
                    HEAP32[offset++] = viewport.x;
                    HEAP32[offset++] = viewport.y;
                    HEAP32[offset++] = viewport.width;
                    HEAP32[offset++] = viewport.height;
                    HEAP32[offset++] = Module.webxr_fbo
                }
                const headPose = views + SIZE_OF_WEBXR_VIEW * viewCount;
                WebXR._nativize_rigid_transform(headPose >> 2, pose.transform);
                Module.webxr_frame = frame;
                dynCall("viiiii", frameCallback, [userData, time, headPose, views, pose.views.length]);
                Module.webxr_frame = null
            }

            function onFrameLayers(time, frame) {
                if (!frameCallback) return;
                const session = frame.session;
                if (Module.webxr_session != null) session.requestAnimationFrame(onFrameLayers);
                const pose = frame.getViewerPose(Module.webxr_refSpace);
                if (!pose) return;
                const layer = Module.webxr_baseLayer;
                const binding = Module.webxr_webglBinding;
                const gl = Module.ctx;
                const newFramebuffer = !Module.webxr_fbo;
                if (newFramebuffer && layer.textureArrayLength == 2) {
                    const ids = Module.webxr_fbo = [GL.getNewId(GL.framebuffers), GL.getNewId(GL.framebuffers)];
                    ids.forEach(id => {
                        const framebuffer = gl.createFramebuffer();
                        GL.framebuffers[id] = framebuffer;
                        framebuffer.name = id
                    })
                } else {
                    const id = GL.getNewId(GL.framebuffers);
                    const framebuffer = gl.createFramebuffer();
                    GL.framebuffers[id] = framebuffer;
                    framebuffer.name = id;
                    Module.webxr_fbo = [id, id]
                }
                const ids = Module.webxr_fbo;
                pose.views.forEach(function(view) {
                    const viewIndex = view.eye == "right" ? 1 : 0;
                    let offset = views + SIZE_OF_WEBXR_VIEW * viewIndex;
                    offset = WebXR._nativize_rigid_transform(offset >> 2, view.transform);
                    offset = WebXR._nativize_matrix(offset, view.projectionMatrix);
                    let subImage = binding.getViewSubImage(layer, view);
                    const viewport = subImage.viewport;
                    HEAP32[offset++] = viewport.x;
                    HEAP32[offset++] = viewport.y;
                    HEAP32[offset++] = viewport.width;
                    HEAP32[offset++] = viewport.height;
                    HEAP32[offset++] = ids[viewIndex];
                    if (!newFramebuffer) return;
                    const mv = Module["multiview"];
                    if (mv) {
                        if (viewIndex != 0) return;
                        gl.viewport(viewport.x, viewport.y, viewport.width, viewport.height);
                        const samples = Module["multiview_samples"];
                        mv.framebufferTextureMultisampleMultiviewOVR(gl.DRAW_FRAMEBUFFER, gl.COLOR_ATTACHMENT0, subImage.colorTexture, 0, samples, 0, 2);
                        mv.framebufferTextureMultisampleMultiviewOVR(gl.DRAW_FRAMEBUFFER, gl.DEPTH_STENCIL_ATTACHMENT, subImage.depthStencilTexture, 0, samples, 0, 2)
                    } else if (layer.textureArrayLength == 2) {
                        const colorImageId = subImage.colorTexture.name || GL.getNewId(GL.textures);
                        subImage.colorTexture.name = colorImageId;
                        GL.textures[colorImageId] = subImage.colorTexture;
                        const depthStencilImageId = subImage.depthStencilTexture.name || GL.getNewId(GL.textures);
                        subImage.depthStencilTexture.name = depthStencilImageId;
                        GL.textures[depthStencilImageId] = subImage.depthStencilTexture;
                        _glBindFramebuffer(gl.FRAMEBUFFER, ids[viewIndex]);
                        gl.framebufferTextureLayer(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, subImage.colorTexture, 0, subImage.imageIndex);
                        gl.framebufferTextureLayer(gl.FRAMEBUFFER, gl.DEPTH_STENCIL_ATTACHMENT, subImage.depthStencilTexture, 0, subImage.imageIndex);
                        if (!gl.checkFramebufferStatus(gl.FRAMEBUFFER)) {
                            console.error("Target framebuffer for", view.eye, "eye is incomplete.")
                        }
                    } else {
                        if (viewIndex != 0) return;
                        const colorImageId = subImage.colorTexture.name || GL.getNewId(GL.textures);
                        subImage.colorTexture.name = colorImageId;
                        GL.textures[colorImageId] = subImage.colorTexture;
                        const depthStencilImageId = subImage.depthStencilTexture.name || GL.getNewId(GL.textures);
                        subImage.depthStencilTexture.name = depthStencilImageId;
                        GL.textures[depthStencilImageId] = subImage.depthStencilTexture;
                        _glBindFramebuffer(gl.FRAMEBUFFER, ids[viewIndex]);
                        gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, subImage.colorTexture, 0);
                        gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.DEPTH_STENCIL_ATTACHMENT, gl.TEXTURE_2D, subImage.depthStencilTexture, 0)
                    }
                });
                const modelMatrix = views + SIZE_OF_WEBXR_VIEW * 2;
                WebXR._nativize_rigid_transform(modelMatrix >> 2, pose.transform);
                Module.webxr_frame = frame;
                dynCall("viiiii", frameCallback, [userData, time, modelMatrix, views, pose.views.length]);
                Module.webxr_frame = null
            }

            function onSessionStarted(session, mode) {
                if (session == Module.webxr_session) return;
                Module.webxr_session = session;
                session.addEventListener("end", function() {
                    Module.webxr_session.cancelAnimationFrame(WebXR._curRAF);
                    WebXR._curRAF = null;
                    Module.webxr_session = null;
                    onSessionEnd(mode)
                });
                Module.ctx.makeXRCompatible().then(() => {
                    let layer = null;
                    let binding = null;
                    const isEmulator = "CustomWebXRPolyfill" in window;
                    if (!isEmulator && "XRWebGLBinding" in window) {
                        binding = Module.webxr_webglBinding = new window.XRWebGLBinding(session, Module.ctx)
                    }
                    const useLayers = WebXR.allowLayers && binding;
                    if (useLayers) {
                        const mv = Module["multiview"];
                        layer = Module.webxr_baseLayer = binding.createProjectionLayer({
                            scaleFactor: Module.webxr_framebufferScaleFactor,
                            colorFormat: Module.webxr_colorFormat || 32856,
                            depthFormat: Module.webxr_depthFormat || 35056,
                            textureType: mv || !Module.webxr_textureType ? "texture-array" : Module.webxr_textureType
                        });
                        session.updateRenderState({
                            layers: [layer]
                        })
                    } else {
                        layer = Module.webxr_baseLayer = new window.XRWebGLLayer(session, Module.ctx, {
                            framebufferScaleFactor: Module.webxr_framebufferScaleFactor
                        });
                        session.updateRenderState({
                            baseLayer: layer
                        })
                    }
                    Module.webxr_refSpaces = {};
                    const SpaceTypes = ["viewer", "local", "local-floor", "bounded-floor", "unbounded"];
                    let promises = [];
                    for (const s of SpaceTypes) {
                        promises.push(session.requestReferenceSpace(s).then(refSpace => {
                            Module.webxr_refSpaces[s] = refSpace;
                            return refSpace
                        }))
                    }
                    Promise.allSettled(promises).then(results => {
                        for (i = results.length - 1; i >= 0; --i) {
                            if (results[i].status === "rejected") continue;
                            Module.webxr_refSpaceType = SpaceTypes[i];
                            Module.webxr_refSpace = results[i].value;
                            break
                        }
                        onSessionStart(mode);
                        session.requestAnimationFrame(useLayers ? onFrameLayers : onFrame)
                    })
                }, function() {
                    onError(-3)
                })
            }
            if (navigator.xr) {
                const gl = Module.ctx;
                Module["multiview_samples"] = gl.getParameter(gl.MAX_SAMPLES);
                const mv = Module["multiview"] = null;
                if (mv) {
                    console.log("OCULUS_multiview extension is supported")
                } else {
                    console.warn("OCULUS_multiview extension is not supported")
                }
                const sessionParams = function(mode, requiredFeatures, optionalFeatures, extra) {
                    if (typeof mode !== "string") {
                        mode = ["inline", "immersive-vr", "immersive-ar"][mode]
                    }
                    const toFeatureList = function(bitMask) {
                        const f = [];
                        const features = ["local", "local-floor", "bounded-floor", "unbounded", "hit-test"];
                        for (let i = 0; i < features.length; ++i) {
                            if ((bitMask & 1 << i) != 0) {
                                f.push(features[i])
                            }
                        }
                        return features
                    };
                    if (typeof requiredFeatures === "number") {
                        requiredFeatures = toFeatureList(requiredFeatures)
                    }
                    if (typeof optionalFeatures === "number") {
                        optionalFeatures = toFeatureList(optionalFeatures)
                    }
                    let depthSensingParams = undefined;
                    if (requiredFeatures.includes("depth-sensing") || optionalFeatures.includes("depth-sensing")) {
                        depthSensingParams = {
                            usagePreference: ["gpu-optimized", "cpu-optimized"],
                            dataFormatPreference: ["float32", "luminance-alpha"]
                        }
                    }
                    if (WebXR.allowLayers && !optionalFeatures.includes("layers")) {
                        optionalFeatures.push("layers")
                    }
                    const params = {
                        requiredFeatures: requiredFeatures,
                        optionalFeatures: optionalFeatures,
                        depthSensing: depthSensingParams
                    };
                    Object.assign(params, extra);
                    return params
                };
                Module.webxr_requestSession = function(mode, requiredFeatures, optionalFeatures, extra) {
                    const params = sessionParams(mode, requiredFeatures, optionalFeatures, extra);
                    return navigator.xr.requestSession(mode, params).then(function(s) {
                        onSessionStarted(s, mode);
                        return s
                    })
                };
                if (navigator.xr.offerSession) {
                    Module.webxr_offerSession = function(mode, requiredFeatures, optionalFeatures, extra) {
                        const params = sessionParams(mode, requiredFeatures, optionalFeatures, extra);
                        return navigator.xr.offerSession(mode, params).then(function(s) {
                            onSessionStarted(s, mode);
                            return s
                        })
                    }
                } else {
                    Module.webxr_offerSession = function() {
                        return Promise.reject("WebXR offerSession() unsupported in this browser.")
                    }
                }
            } else {
                Module.webxr_requestSession = Module.webxr_offerSession = function() {
                    return Promise.reject("WebXR unsupported in this browser.")
                };
                const isLocalhost = location.hostname === "localhost" || location.hostname === "127.0.0.1";
                const missingHTTPS = location.protocol !== "https:" && !isLocalhost;
                onError(missingHTTPS ? -1 : -2)
            }
        }

        function _webxr_set_projection_params(near, far) {
            const s = Module.webxr_session;
            if (!s) return;
            s.updateRenderState({
                depthNear: near,
                depthFar: far
            })
        }

        function _wljs_component_create(scene, index, id, type, object) {
            Module._wljs_component_create(scene, index, id, type, object)
        }

        function _wljs_component_init(scene, component) {
            Module._wljs_component_init(scene, component)
        }

        function _wljs_component_markDestroyed(scene, manager, component) {
            Module._wljs_component_markDestroyed(scene, manager, component)
        }

        function _wljs_component_onActivate(component) {
            Module._wljs_component_onActivate(component)
        }

        function _wljs_component_onDeactivate(component) {
            Module._wljs_component_onDeactivate(component)
        }

        function _wljs_component_update(component, dt) {
            Module._wljs_component_update(component, dt)
        }

        function _wljs_copy(sourceScene, source, destScene, dest, offsets) {
            Module._wljs_copy(sourceScene, source, destScene, dest, offsets)
        }

        function _wljs_destroy_image(index) {
            return Module._wljs_destroy_image(index)
        }

        function _wljs_get_component_type_index(namePtr, namePtrEnd) {
            return Module._wljs_get_component_type_index(namePtr, namePtrEnd)
        }

        function _wljs_init(withPhysX) {
            const oldUpdateViews = updateMemoryViews;
            updateMemoryViews = function(buf) {
                oldUpdateViews(buf);
                Module.HEAP8 = HEAP8;
                Module.HEAP16 = HEAP16;
                Module.HEAP32 = HEAP32;
                Module.HEAPU8 = HEAPU8;
                Module.HEAPU16 = HEAPU16;
                Module.HEAPU32 = HEAPU32;
                Module.HEAPF32 = HEAPF32;
                Module.HEAPF64 = HEAPF64;
                Module.updateTempMemory()
            };
            updateMemoryViews();
            Module._wljs_init(withPhysX)
        }

        function _wljs_objects_markDestroyed(scene, idsPtr, count) {
            return Module._wljs_objects_markDestroyed(scene, idsPtr, count)
        }

        function _wljs_scene_initialize(scene, start, end, p, pe, o, oe) {
            Module._wljs_scene_initialize(scene, start, end, p, pe, o, oe)
        }

        function _wljs_scene_switch(index) {
            Module._wljs_scene_switch(index)
        }

        function _wljs_set_component_param_translation(scene, c, p, v, ve) {
            Module._wljs_set_component_param_translation(scene, c, p, v, ve)
        }

        function _wljs_swap(scene, a, b) {
            Module._wljs_swap(scene, a, b)
        }

        function _wljs_trigger_animationEvent(component, namePtr, namePtrEnd) {
            Module._wljs_trigger_animationEvent(component, namePtr, namePtrEnd)
        }

        function _wljs_xr_disable() {
            Module._wljs_xr_disable()
        }

        function _wljs_xr_session_end() {
            Module._wljs_xr_session_end()
        }

        function _wljs_xr_session_start(mode) {
            Module._wljs_xr_session_start(["inline", "immersive-vr", "immersive-ar"][mode])
        }

        function uleb128Encode(n, target) {
            assert(n < 16384);
            if (n < 128) {
                target.push(n)
            } else {
                target.push(n % 128 | 128, n >> 7)
            }
        }

        function sigToWasmTypes(sig) {
            var typeNames = {
                "i": "i32",
                "j": "i32",
                "f": "f32",
                "d": "f64",
                "p": "i32"
            };
            var type = {
                parameters: [],
                results: sig[0] == "v" ? [] : [typeNames[sig[0]]]
            };
            for (var i = 1; i < sig.length; ++i) {
                assert(sig[i] in typeNames, "invalid signature char: " + sig[i]);
                type.parameters.push(typeNames[sig[i]]);
                if (sig[i] === "j") {
                    type.parameters.push("i32")
                }
            }
            return type
        }

        function generateFuncType(sig, target) {
            var sigRet = sig.slice(0, 1);
            var sigParam = sig.slice(1);
            var typeCodes = {
                "i": 127,
                "p": 127,
                "j": 126,
                "f": 125,
                "d": 124
            };
            target.push(96);
            uleb128Encode(sigParam.length, target);
            for (var i = 0; i < sigParam.length; ++i) {
                assert(sigParam[i] in typeCodes, "invalid signature char: " + sigParam[i]);
                target.push(typeCodes[sigParam[i]])
            }
            if (sigRet == "v") {
                target.push(0)
            } else {
                target.push(1, typeCodes[sigRet])
            }
        }

        function convertJsFunctionToWasm(func, sig) {
            if (typeof WebAssembly.Function == "function") {
                return new WebAssembly.Function(sigToWasmTypes(sig), func)
            }
            var typeSectionBody = [1];
            generateFuncType(sig, typeSectionBody);
            var bytes = [0, 97, 115, 109, 1, 0, 0, 0, 1];
            uleb128Encode(typeSectionBody.length, bytes);
            bytes.push.apply(bytes, typeSectionBody);
            bytes.push(2, 7, 1, 1, 101, 1, 102, 0, 0, 7, 5, 1, 1, 102, 0, 0);
            var module = new WebAssembly.Module(new Uint8Array(bytes));
            var instance = new WebAssembly.Instance(module, {
                "e": {
                    "f": func
                }
            });
            var wrappedFunc = instance.exports["f"];
            return wrappedFunc
        }

        function updateTableMap(offset, count) {
            if (functionsInTableMap) {
                for (var i = offset; i < offset + count; i++) {
                    var item = getWasmTableEntry(i);
                    if (item) {
                        functionsInTableMap.set(item, i)
                    }
                }
            }
        }
        var functionsInTableMap = undefined;

        function getFunctionAddress(func) {
            if (!functionsInTableMap) {
                functionsInTableMap = new WeakMap;
                updateTableMap(0, wasmTable.length)
            }
            return functionsInTableMap.get(func) || 0
        }
        var freeTableIndexes = [];

        function getEmptyTableSlot() {
            if (freeTableIndexes.length) {
                return freeTableIndexes.pop()
            }
            try {
                wasmTable.grow(1)
            } catch (err) {
                if (!(err instanceof RangeError)) {
                    throw err
                }
                throw "Unable to grow wasm table. Set ALLOW_TABLE_GROWTH."
            }
            return wasmTable.length - 1
        }

        function setWasmTableEntry(idx, func) {
            wasmTable.set(idx, func);
            wasmTableMirror[idx] = wasmTable.get(idx)
        }

        function addFunction(func, sig) {
            assert(typeof func != "undefined");
            var rtn = getFunctionAddress(func);
            if (rtn) {
                return rtn
            }
            var ret = getEmptyTableSlot();
            try {
                setWasmTableEntry(ret, func)
            } catch (err) {
                if (!(err instanceof TypeError)) {
                    throw err
                }
                assert(typeof sig != "undefined", "Missing signature argument to addFunction: " + func);
                var wrapped = convertJsFunctionToWasm(func, sig);
                setWasmTableEntry(ret, wrapped)
            }
            functionsInTableMap.set(func, ret);
            return ret
        }

        function removeFunction(index) {
            functionsInTableMap.delete(getWasmTableEntry(index));
            freeTableIndexes.push(index)
        }
        var FSNode = function(parent, name, mode, rdev) {
            if (!parent) {
                parent = this
            }
            this.parent = parent;
            this.mount = parent.mount;
            this.mounted = null;
            this.id = FS.nextInode++;
            this.name = name;
            this.mode = mode;
            this.node_ops = {};
            this.stream_ops = {};
            this.rdev = rdev
        };
        var readMode = 292 | 73;
        var writeMode = 146;
        Object.defineProperties(FSNode.prototype, {
            read: {
                get: function() {
                    return (this.mode & readMode) === readMode
                },
                set: function(val) {
                    val ? this.mode |= readMode : this.mode &= ~readMode
                }
            },
            write: {
                get: function() {
                    return (this.mode & writeMode) === writeMode
                },
                set: function(val) {
                    val ? this.mode |= writeMode : this.mode &= ~writeMode
                }
            },
            isFolder: {
                get: function() {
                    return FS.isDir(this.mode)
                }
            },
            isDevice: {
                get: function() {
                    return FS.isChrdev(this.mode)
                }
            }
        });
        FS.FSNode = FSNode;
        FS.staticInit();
        ERRNO_CODES = {
            "EPERM": 63,
            "ENOENT": 44,
            "ESRCH": 71,
            "EINTR": 27,
            "EIO": 29,
            "ENXIO": 60,
            "E2BIG": 1,
            "ENOEXEC": 45,
            "EBADF": 8,
            "ECHILD": 12,
            "EAGAIN": 6,
            "EWOULDBLOCK": 6,
            "ENOMEM": 48,
            "EACCES": 2,
            "EFAULT": 21,
            "ENOTBLK": 105,
            "EBUSY": 10,
            "EEXIST": 20,
            "EXDEV": 75,
            "ENODEV": 43,
            "ENOTDIR": 54,
            "EISDIR": 31,
            "EINVAL": 28,
            "ENFILE": 41,
            "EMFILE": 33,
            "ENOTTY": 59,
            "ETXTBSY": 74,
            "EFBIG": 22,
            "ENOSPC": 51,
            "ESPIPE": 70,
            "EROFS": 69,
            "EMLINK": 34,
            "EPIPE": 64,
            "EDOM": 18,
            "ERANGE": 68,
            "ENOMSG": 49,
            "EIDRM": 24,
            "ECHRNG": 106,
            "EL2NSYNC": 156,
            "EL3HLT": 107,
            "EL3RST": 108,
            "ELNRNG": 109,
            "EUNATCH": 110,
            "ENOCSI": 111,
            "EL2HLT": 112,
            "EDEADLK": 16,
            "ENOLCK": 46,
            "EBADE": 113,
            "EBADR": 114,
            "EXFULL": 115,
            "ENOANO": 104,
            "EBADRQC": 103,
            "EBADSLT": 102,
            "EDEADLOCK": 16,
            "EBFONT": 101,
            "ENOSTR": 100,
            "ENODATA": 116,
            "ETIME": 117,
            "ENOSR": 118,
            "ENONET": 119,
            "ENOPKG": 120,
            "EREMOTE": 121,
            "ENOLINK": 47,
            "EADV": 122,
            "ESRMNT": 123,
            "ECOMM": 124,
            "EPROTO": 65,
            "EMULTIHOP": 36,
            "EDOTDOT": 125,
            "EBADMSG": 9,
            "ENOTUNIQ": 126,
            "EBADFD": 127,
            "EREMCHG": 128,
            "ELIBACC": 129,
            "ELIBBAD": 130,
            "ELIBSCN": 131,
            "ELIBMAX": 132,
            "ELIBEXEC": 133,
            "ENOSYS": 52,
            "ENOTEMPTY": 55,
            "ENAMETOOLONG": 37,
            "ELOOP": 32,
            "EOPNOTSUPP": 138,
            "EPFNOSUPPORT": 139,
            "ECONNRESET": 15,
            "ENOBUFS": 42,
            "EAFNOSUPPORT": 5,
            "EPROTOTYPE": 67,
            "ENOTSOCK": 57,
            "ENOPROTOOPT": 50,
            "ESHUTDOWN": 140,
            "ECONNREFUSED": 14,
            "EADDRINUSE": 3,
            "ECONNABORTED": 13,
            "ENETUNREACH": 40,
            "ENETDOWN": 38,
            "ETIMEDOUT": 73,
            "EHOSTDOWN": 142,
            "EHOSTUNREACH": 23,
            "EINPROGRESS": 26,
            "EALREADY": 7,
            "EDESTADDRREQ": 17,
            "EMSGSIZE": 35,
            "EPROTONOSUPPORT": 66,
            "ESOCKTNOSUPPORT": 137,
            "EADDRNOTAVAIL": 4,
            "ENETRESET": 39,
            "EISCONN": 30,
            "ENOTCONN": 53,
            "ETOOMANYREFS": 141,
            "EUSERS": 136,
            "EDQUOT": 19,
            "ESTALE": 72,
            "ENOTSUP": 138,
            "ENOMEDIUM": 148,
            "EILSEQ": 25,
            "EOVERFLOW": 61,
            "ECANCELED": 11,
            "ENOTRECOVERABLE": 56,
            "EOWNERDEAD": 62,
            "ESTRPIPE": 135
        };
        var GLctx;
        for (var i = 0; i < 32; ++i) tempFixedLengthArray.push(new Array(i));
        var wasmImports = {
            "__cxa_throw": ___cxa_throw,
            "__syscall__newselect": ___syscall__newselect,
            "__syscall_connect": ___syscall_connect,
            "__syscall_faccessat": ___syscall_faccessat,
            "__syscall_fcntl64": ___syscall_fcntl64,
            "__syscall_fstat64": ___syscall_fstat64,
            "__syscall_ioctl": ___syscall_ioctl,
            "__syscall_openat": ___syscall_openat,
            "__syscall_recvfrom": ___syscall_recvfrom,
            "__syscall_sendto": ___syscall_sendto,
            "__syscall_socket": ___syscall_socket,
            "_emscripten_get_now_is_monotonic": __emscripten_get_now_is_monotonic,
            "abort": _abort,
            "corradeUtilityNodeEnvironmentValue": _corradeUtilityNodeEnvironmentValue,
            "emscripten_asm_const_double": _emscripten_asm_const_double,
            "emscripten_asm_const_int": _emscripten_asm_const_int,
            "emscripten_date_now": _emscripten_date_now,
            "emscripten_get_canvas_element_size": _emscripten_get_canvas_element_size,
            "emscripten_get_device_pixel_ratio": _emscripten_get_device_pixel_ratio,
            "emscripten_get_element_css_size": _emscripten_get_element_css_size,
            "emscripten_get_now": _emscripten_get_now,
            "emscripten_memcpy_big": _emscripten_memcpy_big,
            "emscripten_resize_heap": _emscripten_resize_heap,
            "emscripten_set_canvas_element_size": _emscripten_set_canvas_element_size,
            "emscripten_set_focus_callback_on_thread": _emscripten_set_focus_callback_on_thread,
            "emscripten_set_keydown_callback_on_thread": _emscripten_set_keydown_callback_on_thread,
            "emscripten_set_keyup_callback_on_thread": _emscripten_set_keyup_callback_on_thread,
            "emscripten_set_mousedown_callback_on_thread": _emscripten_set_mousedown_callback_on_thread,
            "emscripten_set_mousemove_callback_on_thread": _emscripten_set_mousemove_callback_on_thread,
            "emscripten_set_mouseup_callback_on_thread": _emscripten_set_mouseup_callback_on_thread,
            "emscripten_set_resize_callback_on_thread": _emscripten_set_resize_callback_on_thread,
            "emscripten_set_wheel_callback_on_thread": _emscripten_set_wheel_callback_on_thread,
            "emscripten_webgl_commit_frame": _emscripten_webgl_commit_frame,
            "emscripten_webgl_create_context": _emscripten_webgl_create_context,
            "emscripten_webgl_destroy_context": _emscripten_webgl_destroy_context,
            "emscripten_webgl_enable_extension": _emscripten_webgl_enable_extension,
            "emscripten_webgl_get_current_context": _emscripten_webgl_get_current_context,
            "emscripten_webgl_init_context_attributes": _emscripten_webgl_init_context_attributes,
            "emscripten_webgl_make_context_current": _emscripten_webgl_make_context_current,
            "environ_get": _environ_get,
            "environ_sizes_get": _environ_sizes_get,
            "exit": _exit,
            "fd_close": _fd_close,
            "fd_read": _fd_read,
            "fd_seek": _fd_seek,
            "fd_write": _fd_write,
            "getImageSize": getImageSize,
            "getaddrinfo": _getaddrinfo,
            "glActiveTexture": _glActiveTexture,
            "glAttachShader": _glAttachShader,
            "glBeginQuery": _glBeginQuery,
            "glBeginTransformFeedback": _glBeginTransformFeedback,
            "glBindBuffer": _glBindBuffer,
            "glBindBufferBase": _glBindBufferBase,
            "glBindBufferRange": _glBindBufferRange,
            "glBindFramebuffer": _glBindFramebuffer,
            "glBindRenderbuffer": _glBindRenderbuffer,
            "glBindTexture": _glBindTexture,
            "glBindTransformFeedback": _glBindTransformFeedback,
            "glBindVertexArray": _glBindVertexArray,
            "glBlendEquationSeparate": _glBlendEquationSeparate,
            "glBlendFuncSeparate": _glBlendFuncSeparate,
            "glBlitFramebuffer": _glBlitFramebuffer,
            "glBufferData": _glBufferData,
            "glBufferSubData": _glBufferSubData,
            "glCheckFramebufferStatus": _glCheckFramebufferStatus,
            "glClear": _glClear,
            "glClearBufferfi": _glClearBufferfi,
            "glClearBufferfv": _glClearBufferfv,
            "glClearBufferiv": _glClearBufferiv,
            "glClearBufferuiv": _glClearBufferuiv,
            "glClearColor": _glClearColor,
            "glClearDepthf": _glClearDepthf,
            "glClientWaitSync": _glClientWaitSync,
            "glColorMask": _glColorMask,
            "glCompileShader": _glCompileShader,
            "glCompressedTexSubImage2D": _glCompressedTexSubImage2D,
            "glCompressedTexSubImage3D": _glCompressedTexSubImage3D,
            "glCopyBufferSubData": _glCopyBufferSubData,
            "glCopyTexSubImage2D": _glCopyTexSubImage2D,
            "glCopyTexSubImage3D": _glCopyTexSubImage3D,
            "glCreateProgram": _glCreateProgram,
            "glCreateShader": _glCreateShader,
            "glDeleteBuffers": _glDeleteBuffers,
            "glDeleteFramebuffers": _glDeleteFramebuffers,
            "glDeleteProgram": _glDeleteProgram,
            "glDeleteQueries": _glDeleteQueries,
            "glDeleteRenderbuffers": _glDeleteRenderbuffers,
            "glDeleteShader": _glDeleteShader,
            "glDeleteSync": _glDeleteSync,
            "glDeleteTextures": _glDeleteTextures,
            "glDeleteTransformFeedbacks": _glDeleteTransformFeedbacks,
            "glDeleteVertexArrays": _glDeleteVertexArrays,
            "glDepthFunc": _glDepthFunc,
            "glDepthMask": _glDepthMask,
            "glDepthRangef": _glDepthRangef,
            "glDisable": _glDisable,
            "glDrawArrays": _glDrawArrays,
            "glDrawArraysInstanced": _glDrawArraysInstanced,
            "glDrawArraysInstancedBaseInstanceANGLE": _glDrawArraysInstancedBaseInstanceANGLE,
            "glDrawBuffers": _glDrawBuffers,
            "glDrawElements": _glDrawElements,
            "glDrawElementsInstanced": _glDrawElementsInstanced,
            "glDrawElementsInstancedBaseVertexBaseInstanceANGLE": _glDrawElementsInstancedBaseVertexBaseInstanceANGLE,
            "glDrawRangeElements": _glDrawRangeElements,
            "glEnable": _glEnable,
            "glEnableVertexAttribArray": _glEnableVertexAttribArray,
            "glEndQuery": _glEndQuery,
            "glEndTransformFeedback": _glEndTransformFeedback,
            "glFenceSync": _glFenceSync,
            "glFlush": _glFlush,
            "glFramebufferRenderbuffer": _glFramebufferRenderbuffer,
            "glFramebufferTexture2D": _glFramebufferTexture2D,
            "glFramebufferTextureLayer": _glFramebufferTextureLayer,
            "glGenBuffers": _glGenBuffers,
            "glGenFramebuffers": _glGenFramebuffers,
            "glGenQueries": _glGenQueries,
            "glGenRenderbuffers": _glGenRenderbuffers,
            "glGenTextures": _glGenTextures,
            "glGenTransformFeedbacks": _glGenTransformFeedbacks,
            "glGenVertexArrays": _glGenVertexArrays,
            "glGenerateMipmap": _glGenerateMipmap,
            "glGetBufferParameteriv": _glGetBufferParameteriv,
            "glGetBufferSubData": _glGetBufferSubData,
            "glGetError": _glGetError,
            "glGetFloatv": _glGetFloatv,
            "glGetIntegerv": _glGetIntegerv,
            "glGetProgramInfoLog": _glGetProgramInfoLog,
            "glGetProgramiv": _glGetProgramiv,
            "glGetQueryObjectuiv": _glGetQueryObjectuiv,
            "glGetShaderInfoLog": _glGetShaderInfoLog,
            "glGetShaderiv": _glGetShaderiv,
            "glGetString": _glGetString,
            "glGetStringi": _glGetStringi,
            "glGetUniformBlockIndex": _glGetUniformBlockIndex,
            "glGetUniformLocation": _glGetUniformLocation,
            "glInvalidateFramebuffer": _glInvalidateFramebuffer,
            "glInvalidateSubFramebuffer": _glInvalidateSubFramebuffer,
            "glLinkProgram": _glLinkProgram,
            "glMultiDrawArraysANGLE": _glMultiDrawArraysANGLE,
            "glMultiDrawArraysInstancedANGLE": _glMultiDrawArraysInstancedANGLE,
            "glMultiDrawArraysInstancedBaseInstanceANGLE": _glMultiDrawArraysInstancedBaseInstanceANGLE,
            "glMultiDrawElementsANGLE": _glMultiDrawElementsANGLE,
            "glMultiDrawElementsInstancedANGLE": _glMultiDrawElementsInstancedANGLE,
            "glMultiDrawElementsInstancedBaseVertexBaseInstanceANGLE": _glMultiDrawElementsInstancedBaseVertexBaseInstanceANGLE,
            "glPixelStorei": _glPixelStorei,
            "glReadBuffer": _glReadBuffer,
            "glReadPixels": _glReadPixels,
            "glRenderbufferStorage": _glRenderbufferStorage,
            "glRenderbufferStorageMultisample": _glRenderbufferStorageMultisample,
            "glShaderSource": _glShaderSource,
            "glStencilFunc": _glStencilFunc,
            "glStencilOp": _glStencilOp,
            "glTexImage2D": _glTexImage2D,
            "glTexImage3D": _glTexImage3D,
            "glTexParameterf": _glTexParameterf,
            "glTexParameterfv": _glTexParameterfv,
            "glTexParameteri": _glTexParameteri,
            "glTexParameteriv": _glTexParameteriv,
            "glTexStorage2D": _glTexStorage2D,
            "glTexStorage3D": _glTexStorage3D,
            "glTexSubImage2D": _glTexSubImage2D,
            "glTexSubImage3D": _glTexSubImage3D,
            "glTransformFeedbackVaryings": _glTransformFeedbackVaryings,
            "glUniform1f": _glUniform1f,
            "glUniform1i": _glUniform1i,
            "glUniform1ui": _glUniform1ui,
            "glUniform1uiv": _glUniform1uiv,
            "glUniform2f": _glUniform2f,
            "glUniform4f": _glUniform4f,
            "glUniform4i": _glUniform4i,
            "glUniformBlockBinding": _glUniformBlockBinding,
            "glUseProgram": _glUseProgram,
            "glVertexAttribDivisor": _glVertexAttribDivisor,
            "glVertexAttribIPointer": _glVertexAttribIPointer,
            "glVertexAttribPointer": _glVertexAttribPointer,
            "glViewport": _glViewport,
            "magnumPlatformCanvasId": _magnumPlatformCanvasId,
            "magnumPlatformKeyboardListeningElement": _magnumPlatformKeyboardListeningElement,
            "magnumPlatformRequestAnimationFrame": _magnumPlatformRequestAnimationFrame,
            "strftime_l": _strftime_l,
            "webxr_get_input_pose": _webxr_get_input_pose,
            "webxr_get_input_sources": _webxr_get_input_sources,
            "webxr_init": _webxr_init,
            "webxr_set_projection_params": _webxr_set_projection_params,
            "wljs_component_create": _wljs_component_create,
            "wljs_component_init": _wljs_component_init,
            "wljs_component_markDestroyed": _wljs_component_markDestroyed,
            "wljs_component_onActivate": _wljs_component_onActivate,
            "wljs_component_onDeactivate": _wljs_component_onDeactivate,
            "wljs_component_update": _wljs_component_update,
            "wljs_copy": _wljs_copy,
            "wljs_destroy_image": _wljs_destroy_image,
            "wljs_get_component_type_index": _wljs_get_component_type_index,
            "wljs_init": _wljs_init,
            "wljs_objects_markDestroyed": _wljs_objects_markDestroyed,
            "wljs_scene_initialize": _wljs_scene_initialize,
            "wljs_scene_switch": _wljs_scene_switch,
            "wljs_set_component_param_translation": _wljs_set_component_param_translation,
            "wljs_swap": _wljs_swap,
            "wljs_trigger_animationEvent": _wljs_trigger_animationEvent,
            "wljs_xr_disable": _wljs_xr_disable,
            "wljs_xr_session_end": _wljs_xr_session_end,
            "wljs_xr_session_start": _wljs_xr_session_start
        };
        Module["UTF8ToString"] = UTF8ToString;
        Module["stringToUTF8"] = stringToUTF8;
        Module["lengthBytesUTF8"] = lengthBytesUTF8;
        Module["addFunction"] = addFunction;
        Module["removeFunction"] = removeFunction;
        var missingLibrarySymbols = ["getHostByName", "traverseStack", "convertPCtoSourceLocation", "runMainThreadEmAsm", "jstoi_s", "listenOnce", "autoResumeAudioContext", "getDynCaller", "callUserCallback", "safeSetTimeout", "asmjsMangle", "HandleAllocator", "getNativeTypeSize", "STACK_SIZE", "STACK_ALIGN", "POINTER_SIZE", "ASSERTIONS", "writeI53ToI64Clamped", "writeI53ToI64Signaling", "writeI53ToU64Clamped", "writeI53ToU64Signaling", "convertU32PairToI53", "getCFunc", "ccall", "cwrap", "reallyNegative", "unSign", "strLen", "reSign", "formatString", "setValue", "getValue", "intArrayToString", "AsciiToString", "stringToAscii", "UTF16ToString", "stringToUTF16", "lengthBytesUTF16", "UTF32ToString", "stringToUTF32", "lengthBytesUTF32", "allocateUTF8", "writeStringToMemory", "fillDeviceOrientationEventData", "registerDeviceOrientationEventCallback", "fillDeviceMotionEventData", "registerDeviceMotionEventCallback", "screenOrientation", "fillOrientationChangeEventData", "registerOrientationChangeEventCallback", "fillFullscreenChangeEventData", "registerFullscreenChangeEventCallback", "JSEvents_requestFullscreen", "JSEvents_resizeCanvasForFullscreen", "registerRestoreOldStyle", "hideEverythingExceptGivenElement", "restoreHiddenElements", "setLetterbox", "softFullscreenResizeWebGLRenderTarget", "doRequestFullscreen", "fillPointerlockChangeEventData", "registerPointerlockChangeEventCallback", "registerPointerlockErrorEventCallback", "requestPointerLock", "fillVisibilityChangeEventData", "registerVisibilityChangeEventCallback", "registerTouchEventCallback", "fillGamepadEventData", "registerGamepadEventCallback", "registerBeforeUnloadEventCallback", "fillBatteryEventData", "battery", "registerBatteryEventCallback", "setCanvasElementSize", "getCanvasElementSize", "demangle", "demangleAll", "jsStackTrace", "stackTrace", "checkWasiClock", "createDyncallWrapper", "setImmediateWrapped", "clearImmediateWrapped", "polyfillSetImmediate", "getPromise", "makePromise", "makePromiseCallback", "exception_addRef", "exception_decRef", "_setNetworkCallback", "emscriptenWebGLGetUniform", "emscriptenWebGLGetVertexAttrib", "writeGLArray", "SDL_unicode", "SDL_ttfContext", "SDL_audio", "GLFW_Window", "runAndAbortIfError", "emscriptenWebGLGetIndexed", "ALLOC_NORMAL", "ALLOC_STACK", "allocate"];
        missingLibrarySymbols.forEach(missingLibrarySymbol);
        var unexportedSymbols = ["run", "UTF8ArrayToString", "stringToUTF8Array", "addOnPreRun", "addOnInit", "addOnPreMain", "addOnExit", "addOnPostRun", "addRunDependency", "removeRunDependency", "FS_createFolder", "FS_createPath", "FS_createDataFile", "FS_createPreloadedFile", "FS_createLazyFile", "FS_createLink", "FS_createDevice", "FS_unlink", "out", "err", "callMain", "abort", "keepRuntimeAlive", "wasmMemory", "stackAlloc", "stackSave", "stackRestore", "getTempRet0", "setTempRet0", "writeStackCookie", "checkStackCookie", "ptrToString", "zeroMemory", "stringToNewUTF8", "getHeapMax", "emscripten_realloc_buffer", "ENV", "ERRNO_CODES", "ERRNO_MESSAGES", "setErrNo", "inetPton4", "inetNtop4", "inetPton6", "inetNtop6", "readSockaddr", "writeSockaddr", "DNS", "Protocols", "Sockets", "getRandomDevice", "timers", "warnOnce", "UNWIND_CACHE", "readEmAsmArgsArray", "readEmAsmArgs", "runEmAsmFunction", "jstoi_q", "getExecutableName", "dynCallLegacy", "dynCall", "asyncLoad", "alignMemory", "mmapAlloc", "writeI53ToI64", "readI53FromI64", "readI53FromU64", "convertI32PairToI53", "convertI32PairToI53Checked", "uleb128Encode", "sigToWasmTypes", "generateFuncType", "convertJsFunctionToWasm", "freeTableIndexes", "functionsInTableMap", "getEmptyTableSlot", "updateTableMap", "getFunctionAddress", "PATH", "PATH_FS", "intArrayFromString", "UTF16Decoder", "allocateUTF8OnStack", "writeArrayToMemory", "writeAsciiToMemory", "SYSCALLS", "getSocketFromFD", "getSocketAddress", "JSEvents", "registerKeyEventCallback", "specialHTMLTargets", "maybeCStringToJsString", "findEventTarget", "findCanvasEventTarget", "getBoundingClientRect", "fillMouseEventData", "registerMouseEventCallback", "registerWheelEventCallback", "registerUiEventCallback", "registerFocusEventCallback", "currentFullscreenStrategy", "restoreOldWindowedStyle", "getEnvStrings", "doReadv", "doWritev", "dlopenMissingError", "promiseMap", "uncaughtExceptionCount", "exceptionLast", "exceptionCaught", "ExceptionInfo", "FS", "MEMFS", "TTY", "PIPEFS", "SOCKFS", "tempFixedLengthArray", "miniTempWebGLFloatBuffers", "heapObjectForWebGLType", "heapAccessShiftForWebGLHeap", "GL", "emscriptenWebGLGet", "computeUnpackAlignedImageSize", "emscriptenWebGLGetTexPixelData", "webglGetUniformLocation", "webglPrepareUniformLocationsBeforeFirstUse", "webglGetLeftBracePos", "AL", "SDL", "SDL_gfx", "GLUT", "EGL", "GLFW", "GLEW", "IDBStore", "WebXR"];
        unexportedSymbols.forEach(unexportedRuntimeSymbol);

        function run() {
            var ret = _main();
            checkStackCookie()
        }

        function initRuntime(asm) {
            runtimeInitialized = true;
            _emscripten_stack_init();
            writeStackCookie();
            asm["__wasm_call_ctors"]();
            if (!Module["noFSInit"] && !FS.init.initialized) FS.init();
            FS.ignorePermissions = false;
            SOCKFS.root = FS.mount(SOCKFS, {}, null)
        }
        var imports = {
            "env": wasmImports,
            "wasi_snapshot_preview1": wasmImports
        };
        var _main, _free, _malloc, _htons, _wl_set_error_callback, _wl_nextUpdate, _wl_nextFrame, _wl_deactivate_activeScene, _wl_reset, _wl_reset_context, _wl_set_loading_screen_progress, _wl_scene_set_sky_material, _wl_scene_get_sky_material, _wl_scene_environment_set_intensity, _wl_scene_environment_get_intensity, _wl_scene_environment_set_tint, _wl_scene_environment_get_tint, _wl_scene_environment_set_coefficients, _wl_scene_environment_get_coefficients, _wl_scene_set_clearColor, _wl_scene_enableColorClear, _wl_object_id, _wl_object_index, _wl_object_name, _wl_object_set_name, _wl_object_remove, _wl_object_markedDestroyed, _wl_object_clone, _wl_object_trans_local, _wl_object_trans_world, _wl_object_trans_world_to_local, _wl_object_scaling_world_to_local, _wl_object_get_translation_local, _wl_object_get_translation_world, _wl_object_set_translation_local, _wl_object_set_translation_world, _wl_object_set_rotation_local, _wl_object_set_rotation_world, _wl_object_transformVectorWorld, _wl_object_transformPointWorld, _wl_object_transformVectorInverseWorld, _wl_object_transformPointInverseWorld, _wl_object_transformVectorLocal, _wl_object_transformPointLocal, _wl_object_transformVectorInverseLocal, _wl_object_transformPointInverseLocal, _wl_object_toWorldSpaceTransform, _wl_object_toObjectSpaceTransform, _wl_object_scaling_local, _wl_object_scaling_world, _wl_object_set_scaling_local, _wl_object_set_scaling_world, _wl_object_parent, _wl_object_set_parent, _wl_object_reset_translation_rotation, _wl_object_reset_translation, _wl_object_reset_rotation, _wl_object_reset_scaling, _wl_object_translate, _wl_object_translate_obj, _wl_object_translate_world, _wl_object_rotate_axis_angle, _wl_object_rotate_axis_angle_rad, _wl_object_rotate_quat, _wl_object_rotate_axis_angle_obj, _wl_object_rotate_axis_angle_rad_obj, _wl_object_rotate_quat_obj, _wl_object_scale, _wl_object_lookAt, _wl_object_set_dirty, _wl_object_get_children_count, _wl_object_findByName, _wl_object_findByNameRecursive, _wl_object_get_children, _wl_object_get_components, _wl_object_get_component_types, _wl_object_add_component, _wl_object_add_js_component, _wl_object_is_changed, _wl_get_component_id, _wl_component_get_object, _wl_component_setActive, _wl_component_isActive, _wl_component_remove, _wl_component_manager_name, _wl_get_js_component_index, _wl_get_js_component_index_for_id, _wl_collision_component_get_collider, _wl_collision_component_get_extents, _wl_collision_component_get_group, _wl_collision_component_set_collider, _wl_collision_component_set_group, _wl_collision_component_query_overlaps, _wl_text_component_get_horizontal_alignment, _wl_text_component_get_vertical_alignment, _wl_text_component_get_character_spacing, _wl_text_component_get_line_spacing, _wl_text_component_get_effect, _wl_text_component_get_wrapMode, _wl_text_component_get_wrapWidth, _wl_text_component_get_text, _wl_animation_component_play, _wl_animation_component_pause, _wl_animation_component_stop, _wl_animation_component_state, _wl_animation_component_get_animation, _wl_animation_component_set_animation, _wl_animation_component_get_playCount, _wl_animation_component_set_playCount, _wl_animation_component_get_speed, _wl_animation_component_set_speed, _wl_animation_component_getGraphParamValue, _wl_animation_component_setGraphParamValue, _wl_animation_component_getGraphParamIndex, _wl_animation_component_get_rootMotionMode, _wl_animation_component_set_rootMotionMode, _wl_animation_component_get_rootMotion_translation, _wl_animation_component_get_rootMotion_rotation, _wl_animation_component_get_iteration, _wl_animation_component_get_position, _wl_animation_component_get_duration, _wl_animation_get_duration, _wl_animation_get_trackCount, _wl_animation_retarget, _wl_animation_retargetToSkin, _wl_text_component_set_horizontal_alignment, _wl_text_component_set_vertical_alignment, _wl_text_component_set_character_spacing, _wl_text_component_set_line_spacing, _wl_text_component_set_effect, _wl_text_component_set_wrapMode, _wl_text_component_set_wrapWidth, _wl_text_component_set_text, _wl_text_component_get_material, _wl_text_component_get_boundingBox, _wl_text_component_set_material, _wl_view_component_get_projectionType, _wl_view_component_set_projectionType, _wl_view_component_get_projection_matrix, _wl_view_component_get_near, _wl_view_component_set_near, _wl_view_component_get_far, _wl_view_component_set_far, _wl_view_component_get_fov, _wl_view_component_set_fov, _wl_view_component_get_extent, _wl_view_component_set_extent, _wl_input_component_get_type, _wl_input_component_set_type, _wl_light_component_get_color, _wl_light_component_get_type, _wl_light_component_set_type, _wl_light_component_get_intensity, _wl_light_component_set_intensity, _wl_light_component_get_outerAngle, _wl_light_component_set_outerAngle, _wl_light_component_get_innerAngle, _wl_light_component_set_innerAngle, _wl_light_component_get_shadows, _wl_light_component_set_shadows, _wl_light_component_get_shadowRange, _wl_light_component_set_shadowRange, _wl_light_component_get_shadowBias, _wl_light_component_set_shadowBias, _wl_light_component_get_shadowNormalBias, _wl_light_component_set_shadowNormalBias, _wl_light_component_get_shadowTexelSize, _wl_light_component_set_shadowTexelSize, _wl_light_component_get_cascadeCount, _wl_light_component_set_cascadeCount, _wl_mesh_component_get_material, _wl_mesh_component_set_material, _wl_mesh_component_get_mesh, _wl_mesh_component_set_mesh, _wl_mesh_component_get_skin, _wl_mesh_component_set_skin, _wl_mesh_component_get_morph_targets, _wl_mesh_component_set_morph_targets, _wl_mesh_component_get_morph_target_weight, _wl_mesh_component_get_morph_target_weights, _wl_mesh_component_set_morph_target_weight, _wl_mesh_component_set_morph_target_weights, _wl_material_definition_get_param_count, _wl_material_definition_get_param_name, _wl_material_definition_get_param_type, _wl_material_create, _wl_material_clone, _wl_material_get_definition, _wl_material_get_param_value, _wl_material_set_param_value_float, _wl_material_set_param_value_uint, _wl_material_get_pipeline, _wl_mesh_destroy, _wl_mesh_get_indexData, _wl_mesh_get_vertexCount, _wl_mesh_update, _wl_mesh_create, _wl_mesh_get_attribute, _wl_mesh_set_attribute_values, _wl_mesh_get_attribute_values, _wl_mesh_get_boundingSphere, _wl_font_get_emHeight, _wl_font_get_capHeight, _wl_font_get_xHeight, _wl_font_get_outlineSize, _wl_skin_joint_ids, _wl_skin_inverse_bind_transforms, _wl_skin_inverse_bind_scalings, _wl_skin_get_joint_count, _wl_morph_targets_get_target_count, _wl_morph_targets_get_target_name, _wl_morph_targets_get_target_index, _wl_load_main_scene, _wl_scene_create_chunked_start, _wl_scene_create_chunked_end_main, _wl_scene_create_chunked_next, _wl_scene_create_chunked_abort, _wl_scene_initialize, _wl_get_images, _wl_get_material_definition_count, _wl_get_material_definition_index, _wl_scene_create, _wl_scene_create_chunked_end_prefab, _wl_scene_create_chunked_buffer_size, _wl_scene_create_chunked_end_queued, _wl_scene_create_empty, _wl_scene_destroy, _wl_scene_instantiate, _wl_scene_activate, _wl_scene_queued_bin_count, _wl_scene_queued_bin_path, _wl_scene_clear_queued_bin_list, _wl_scene_load_queued_bin, _wl_scene_activatable, _wl_scene_active, _wl_scene_get_baseURL, _wl_scene_get_filename, _wl_scene_get_component_manager_index, _wl_scene_get_active_views, _wl_scene_ray_cast, _wl_scene_add_object, _wl_scene_add_objects, _wl_scene_reserve_objects, _wl_renderer_set_mesh_layout, _wl_renderer_reserveImage, _wl_renderer_updateImage, _wl_renderer_streaming_idle, _wl_image_create, _wl_image_size, _wl_image_get_jsImage_index, _wl_texture_create, _wl_texture_destroy, _wl_texture_get_image_index, _wl_i18n_setLanguage, _wl_i18n_currentLanguage, _wl_i18n_currentLanguageIndex, _wl_i18n_translate, _wl_i18n_languageCount, _wl_i18n_languageIndex, _wl_i18n_languageCode, _wl_i18n_languageName, _wl_i18n_languageFile, _wl_math_cubicHermite, _wl_application_version, _wl_application_start, _wl_application_stop, _wl_application_resize, _fflush, _htonl, _ntohs, _emscripten_stack_init, _emscripten_stack_get_free, _emscripten_stack_get_base, _emscripten_stack_get_end, stackSave, stackRestore, stackAlloc, _emscripten_stack_get_current, ___cxa_is_pointer_type, dynCall_viijii, dynCall_ji, dynCall_jii, dynCall_viij, dynCall_jiji, dynCall_iiiiij, dynCall_iiiiijj, dynCall_iiiiiijj;
        if (!Module["wasm"]) throw "Must load WebAssembly Module in to variable Module.wasm before adding compiled output .js script to the DOM";
        WebAssembly.instantiate(Module["wasm"], imports).then(function(output) {
            var asm = output.instance.exports;
            Module["_main"] = _main = asm["__main_argc_argv"];
            Module["_free"] = _free = asm["free"];
            Module["_malloc"] = _malloc = asm["malloc"];
            Module["_htons"] = _htons = asm["htons"];
            Module["_wl_set_error_callback"] = _wl_set_error_callback = asm["wl_set_error_callback"];
            Module["_wl_nextUpdate"] = _wl_nextUpdate = asm["wl_nextUpdate"];
            Module["_wl_nextFrame"] = _wl_nextFrame = asm["wl_nextFrame"];
            Module["_wl_deactivate_activeScene"] = _wl_deactivate_activeScene = asm["wl_deactivate_activeScene"];
            Module["_wl_reset"] = _wl_reset = asm["wl_reset"];
            Module["_wl_reset_context"] = _wl_reset_context = asm["wl_reset_context"];
            Module["_wl_set_loading_screen_progress"] = _wl_set_loading_screen_progress = asm["wl_set_loading_screen_progress"];
            Module["_wl_scene_set_sky_material"] = _wl_scene_set_sky_material = asm["wl_scene_set_sky_material"];
            Module["_wl_scene_get_sky_material"] = _wl_scene_get_sky_material = asm["wl_scene_get_sky_material"];
            Module["_wl_scene_environment_set_intensity"] = _wl_scene_environment_set_intensity = asm["wl_scene_environment_set_intensity"];
            Module["_wl_scene_environment_get_intensity"] = _wl_scene_environment_get_intensity = asm["wl_scene_environment_get_intensity"];
            Module["_wl_scene_environment_set_tint"] = _wl_scene_environment_set_tint = asm["wl_scene_environment_set_tint"];
            Module["_wl_scene_environment_get_tint"] = _wl_scene_environment_get_tint = asm["wl_scene_environment_get_tint"];
            Module["_wl_scene_environment_set_coefficients"] = _wl_scene_environment_set_coefficients = asm["wl_scene_environment_set_coefficients"];
            Module["_wl_scene_environment_get_coefficients"] = _wl_scene_environment_get_coefficients = asm["wl_scene_environment_get_coefficients"];
            Module["_wl_scene_set_clearColor"] = _wl_scene_set_clearColor = asm["wl_scene_set_clearColor"];
            Module["_wl_scene_enableColorClear"] = _wl_scene_enableColorClear = asm["wl_scene_enableColorClear"];
            Module["_wl_object_id"] = _wl_object_id = asm["wl_object_id"];
            Module["_wl_object_index"] = _wl_object_index = asm["wl_object_index"];
            Module["_wl_object_name"] = _wl_object_name = asm["wl_object_name"];
            Module["_wl_object_set_name"] = _wl_object_set_name = asm["wl_object_set_name"];
            Module["_wl_object_remove"] = _wl_object_remove = asm["wl_object_remove"];
            Module["_wl_object_markedDestroyed"] = _wl_object_markedDestroyed = asm["wl_object_markedDestroyed"];
            Module["_wl_object_clone"] = _wl_object_clone = asm["wl_object_clone"];
            Module["_wl_object_trans_local"] = _wl_object_trans_local = asm["wl_object_trans_local"];
            Module["_wl_object_trans_world"] = _wl_object_trans_world = asm["wl_object_trans_world"];
            Module["_wl_object_trans_world_to_local"] = _wl_object_trans_world_to_local = asm["wl_object_trans_world_to_local"];
            Module["_wl_object_scaling_world_to_local"] = _wl_object_scaling_world_to_local = asm["wl_object_scaling_world_to_local"];
            Module["_wl_object_get_translation_local"] = _wl_object_get_translation_local = asm["wl_object_get_translation_local"];
            Module["_wl_object_get_translation_world"] = _wl_object_get_translation_world = asm["wl_object_get_translation_world"];
            Module["_wl_object_set_translation_local"] = _wl_object_set_translation_local = asm["wl_object_set_translation_local"];
            Module["_wl_object_set_translation_world"] = _wl_object_set_translation_world = asm["wl_object_set_translation_world"];
            Module["_wl_object_set_rotation_local"] = _wl_object_set_rotation_local = asm["wl_object_set_rotation_local"];
            Module["_wl_object_set_rotation_world"] = _wl_object_set_rotation_world = asm["wl_object_set_rotation_world"];
            Module["_wl_object_transformVectorWorld"] = _wl_object_transformVectorWorld = asm["wl_object_transformVectorWorld"];
            Module["_wl_object_transformPointWorld"] = _wl_object_transformPointWorld = asm["wl_object_transformPointWorld"];
            Module["_wl_object_transformVectorInverseWorld"] = _wl_object_transformVectorInverseWorld = asm["wl_object_transformVectorInverseWorld"];
            Module["_wl_object_transformPointInverseWorld"] = _wl_object_transformPointInverseWorld = asm["wl_object_transformPointInverseWorld"];
            Module["_wl_object_transformVectorLocal"] = _wl_object_transformVectorLocal = asm["wl_object_transformVectorLocal"];
            Module["_wl_object_transformPointLocal"] = _wl_object_transformPointLocal = asm["wl_object_transformPointLocal"];
            Module["_wl_object_transformVectorInverseLocal"] = _wl_object_transformVectorInverseLocal = asm["wl_object_transformVectorInverseLocal"];
            Module["_wl_object_transformPointInverseLocal"] = _wl_object_transformPointInverseLocal = asm["wl_object_transformPointInverseLocal"];
            Module["_wl_object_toWorldSpaceTransform"] = _wl_object_toWorldSpaceTransform = asm["wl_object_toWorldSpaceTransform"];
            Module["_wl_object_toObjectSpaceTransform"] = _wl_object_toObjectSpaceTransform = asm["wl_object_toObjectSpaceTransform"];
            Module["_wl_object_scaling_local"] = _wl_object_scaling_local = asm["wl_object_scaling_local"];
            Module["_wl_object_scaling_world"] = _wl_object_scaling_world = asm["wl_object_scaling_world"];
            Module["_wl_object_set_scaling_local"] = _wl_object_set_scaling_local = asm["wl_object_set_scaling_local"];
            Module["_wl_object_set_scaling_world"] = _wl_object_set_scaling_world = asm["wl_object_set_scaling_world"];
            Module["_wl_object_parent"] = _wl_object_parent = asm["wl_object_parent"];
            Module["_wl_object_set_parent"] = _wl_object_set_parent = asm["wl_object_set_parent"];
            Module["_wl_object_reset_translation_rotation"] = _wl_object_reset_translation_rotation = asm["wl_object_reset_translation_rotation"];
            Module["_wl_object_reset_translation"] = _wl_object_reset_translation = asm["wl_object_reset_translation"];
            Module["_wl_object_reset_rotation"] = _wl_object_reset_rotation = asm["wl_object_reset_rotation"];
            Module["_wl_object_reset_scaling"] = _wl_object_reset_scaling = asm["wl_object_reset_scaling"];
            Module["_wl_object_translate"] = _wl_object_translate = asm["wl_object_translate"];
            Module["_wl_object_translate_obj"] = _wl_object_translate_obj = asm["wl_object_translate_obj"];
            Module["_wl_object_translate_world"] = _wl_object_translate_world = asm["wl_object_translate_world"];
            Module["_wl_object_rotate_axis_angle"] = _wl_object_rotate_axis_angle = asm["wl_object_rotate_axis_angle"];
            Module["_wl_object_rotate_axis_angle_rad"] = _wl_object_rotate_axis_angle_rad = asm["wl_object_rotate_axis_angle_rad"];
            Module["_wl_object_rotate_quat"] = _wl_object_rotate_quat = asm["wl_object_rotate_quat"];
            Module["_wl_object_rotate_axis_angle_obj"] = _wl_object_rotate_axis_angle_obj = asm["wl_object_rotate_axis_angle_obj"];
            Module["_wl_object_rotate_axis_angle_rad_obj"] = _wl_object_rotate_axis_angle_rad_obj = asm["wl_object_rotate_axis_angle_rad_obj"];
            Module["_wl_object_rotate_quat_obj"] = _wl_object_rotate_quat_obj = asm["wl_object_rotate_quat_obj"];
            Module["_wl_object_scale"] = _wl_object_scale = asm["wl_object_scale"];
            Module["_wl_object_lookAt"] = _wl_object_lookAt = asm["wl_object_lookAt"];
            Module["_wl_object_set_dirty"] = _wl_object_set_dirty = asm["wl_object_set_dirty"];
            Module["_wl_object_get_children_count"] = _wl_object_get_children_count = asm["wl_object_get_children_count"];
            Module["_wl_object_findByName"] = _wl_object_findByName = asm["wl_object_findByName"];
            Module["_wl_object_findByNameRecursive"] = _wl_object_findByNameRecursive = asm["wl_object_findByNameRecursive"];
            Module["_wl_object_get_children"] = _wl_object_get_children = asm["wl_object_get_children"];
            Module["_wl_object_get_components"] = _wl_object_get_components = asm["wl_object_get_components"];
            Module["_wl_object_get_component_types"] = _wl_object_get_component_types = asm["wl_object_get_component_types"];
            Module["_wl_object_add_component"] = _wl_object_add_component = asm["wl_object_add_component"];
            Module["_wl_object_add_js_component"] = _wl_object_add_js_component = asm["wl_object_add_js_component"];
            Module["_wl_object_is_changed"] = _wl_object_is_changed = asm["wl_object_is_changed"];
            Module["_wl_get_component_id"] = _wl_get_component_id = asm["wl_get_component_id"];
            Module["_wl_component_get_object"] = _wl_component_get_object = asm["wl_component_get_object"];
            Module["_wl_component_setActive"] = _wl_component_setActive = asm["wl_component_setActive"];
            Module["_wl_component_isActive"] = _wl_component_isActive = asm["wl_component_isActive"];
            Module["_wl_component_remove"] = _wl_component_remove = asm["wl_component_remove"];
            Module["_wl_component_manager_name"] = _wl_component_manager_name = asm["wl_component_manager_name"];
            Module["_wl_get_js_component_index"] = _wl_get_js_component_index = asm["wl_get_js_component_index"];
            Module["_wl_get_js_component_index_for_id"] = _wl_get_js_component_index_for_id = asm["wl_get_js_component_index_for_id"];
            Module["_wl_collision_component_get_collider"] = _wl_collision_component_get_collider = asm["wl_collision_component_get_collider"];
            Module["_wl_collision_component_get_extents"] = _wl_collision_component_get_extents = asm["wl_collision_component_get_extents"];
            Module["_wl_collision_component_get_group"] = _wl_collision_component_get_group = asm["wl_collision_component_get_group"];
            Module["_wl_collision_component_set_collider"] = _wl_collision_component_set_collider = asm["wl_collision_component_set_collider"];
            Module["_wl_collision_component_set_group"] = _wl_collision_component_set_group = asm["wl_collision_component_set_group"];
            Module["_wl_collision_component_query_overlaps"] = _wl_collision_component_query_overlaps = asm["wl_collision_component_query_overlaps"];
            Module["_wl_text_component_get_horizontal_alignment"] = _wl_text_component_get_horizontal_alignment = asm["wl_text_component_get_horizontal_alignment"];
            Module["_wl_text_component_get_vertical_alignment"] = _wl_text_component_get_vertical_alignment = asm["wl_text_component_get_vertical_alignment"];
            Module["_wl_text_component_get_character_spacing"] = _wl_text_component_get_character_spacing = asm["wl_text_component_get_character_spacing"];
            Module["_wl_text_component_get_line_spacing"] = _wl_text_component_get_line_spacing = asm["wl_text_component_get_line_spacing"];
            Module["_wl_text_component_get_effect"] = _wl_text_component_get_effect = asm["wl_text_component_get_effect"];
            Module["_wl_text_component_get_wrapMode"] = _wl_text_component_get_wrapMode = asm["wl_text_component_get_wrapMode"];
            Module["_wl_text_component_get_wrapWidth"] = _wl_text_component_get_wrapWidth = asm["wl_text_component_get_wrapWidth"];
            Module["_wl_text_component_get_text"] = _wl_text_component_get_text = asm["wl_text_component_get_text"];
            Module["_wl_animation_component_play"] = _wl_animation_component_play = asm["wl_animation_component_play"];
            Module["_wl_animation_component_pause"] = _wl_animation_component_pause = asm["wl_animation_component_pause"];
            Module["_wl_animation_component_stop"] = _wl_animation_component_stop = asm["wl_animation_component_stop"];
            Module["_wl_animation_component_state"] = _wl_animation_component_state = asm["wl_animation_component_state"];
            Module["_wl_animation_component_get_animation"] = _wl_animation_component_get_animation = asm["wl_animation_component_get_animation"];
            Module["_wl_animation_component_set_animation"] = _wl_animation_component_set_animation = asm["wl_animation_component_set_animation"];
            Module["_wl_animation_component_get_playCount"] = _wl_animation_component_get_playCount = asm["wl_animation_component_get_playCount"];
            Module["_wl_animation_component_set_playCount"] = _wl_animation_component_set_playCount = asm["wl_animation_component_set_playCount"];
            Module["_wl_animation_component_get_speed"] = _wl_animation_component_get_speed = asm["wl_animation_component_get_speed"];
            Module["_wl_animation_component_set_speed"] = _wl_animation_component_set_speed = asm["wl_animation_component_set_speed"];
            Module["_wl_animation_component_getGraphParamValue"] = _wl_animation_component_getGraphParamValue = asm["wl_animation_component_getGraphParamValue"];
            Module["_wl_animation_component_setGraphParamValue"] = _wl_animation_component_setGraphParamValue = asm["wl_animation_component_setGraphParamValue"];
            Module["_wl_animation_component_getGraphParamIndex"] = _wl_animation_component_getGraphParamIndex = asm["wl_animation_component_getGraphParamIndex"];
            Module["_wl_animation_component_get_rootMotionMode"] = _wl_animation_component_get_rootMotionMode = asm["wl_animation_component_get_rootMotionMode"];
            Module["_wl_animation_component_set_rootMotionMode"] = _wl_animation_component_set_rootMotionMode = asm["wl_animation_component_set_rootMotionMode"];
            Module["_wl_animation_component_get_rootMotion_translation"] = _wl_animation_component_get_rootMotion_translation = asm["wl_animation_component_get_rootMotion_translation"];
            Module["_wl_animation_component_get_rootMotion_rotation"] = _wl_animation_component_get_rootMotion_rotation = asm["wl_animation_component_get_rootMotion_rotation"];
            Module["_wl_animation_component_get_iteration"] = _wl_animation_component_get_iteration = asm["wl_animation_component_get_iteration"];
            Module["_wl_animation_component_get_position"] = _wl_animation_component_get_position = asm["wl_animation_component_get_position"];
            Module["_wl_animation_component_get_duration"] = _wl_animation_component_get_duration = asm["wl_animation_component_get_duration"];
            Module["_wl_animation_get_duration"] = _wl_animation_get_duration = asm["wl_animation_get_duration"];
            Module["_wl_animation_get_trackCount"] = _wl_animation_get_trackCount = asm["wl_animation_get_trackCount"];
            Module["_wl_animation_retarget"] = _wl_animation_retarget = asm["wl_animation_retarget"];
            Module["_wl_animation_retargetToSkin"] = _wl_animation_retargetToSkin = asm["wl_animation_retargetToSkin"];
            Module["_wl_text_component_set_horizontal_alignment"] = _wl_text_component_set_horizontal_alignment = asm["wl_text_component_set_horizontal_alignment"];
            Module["_wl_text_component_set_vertical_alignment"] = _wl_text_component_set_vertical_alignment = asm["wl_text_component_set_vertical_alignment"];
            Module["_wl_text_component_set_character_spacing"] = _wl_text_component_set_character_spacing = asm["wl_text_component_set_character_spacing"];
            Module["_wl_text_component_set_line_spacing"] = _wl_text_component_set_line_spacing = asm["wl_text_component_set_line_spacing"];
            Module["_wl_text_component_set_effect"] = _wl_text_component_set_effect = asm["wl_text_component_set_effect"];
            Module["_wl_text_component_set_wrapMode"] = _wl_text_component_set_wrapMode = asm["wl_text_component_set_wrapMode"];
            Module["_wl_text_component_set_wrapWidth"] = _wl_text_component_set_wrapWidth = asm["wl_text_component_set_wrapWidth"];
            Module["_wl_text_component_set_text"] = _wl_text_component_set_text = asm["wl_text_component_set_text"];
            Module["_wl_text_component_get_material"] = _wl_text_component_get_material = asm["wl_text_component_get_material"];
            Module["_wl_text_component_get_boundingBox"] = _wl_text_component_get_boundingBox = asm["wl_text_component_get_boundingBox"];
            Module["_wl_text_component_set_material"] = _wl_text_component_set_material = asm["wl_text_component_set_material"];
            Module["_wl_view_component_get_projectionType"] = _wl_view_component_get_projectionType = asm["wl_view_component_get_projectionType"];
            Module["_wl_view_component_set_projectionType"] = _wl_view_component_set_projectionType = asm["wl_view_component_set_projectionType"];
            Module["_wl_view_component_get_projection_matrix"] = _wl_view_component_get_projection_matrix = asm["wl_view_component_get_projection_matrix"];
            Module["_wl_view_component_get_near"] = _wl_view_component_get_near = asm["wl_view_component_get_near"];
            Module["_wl_view_component_set_near"] = _wl_view_component_set_near = asm["wl_view_component_set_near"];
            Module["_wl_view_component_get_far"] = _wl_view_component_get_far = asm["wl_view_component_get_far"];
            Module["_wl_view_component_set_far"] = _wl_view_component_set_far = asm["wl_view_component_set_far"];
            Module["_wl_view_component_get_fov"] = _wl_view_component_get_fov = asm["wl_view_component_get_fov"];
            Module["_wl_view_component_set_fov"] = _wl_view_component_set_fov = asm["wl_view_component_set_fov"];
            Module["_wl_view_component_get_extent"] = _wl_view_component_get_extent = asm["wl_view_component_get_extent"];
            Module["_wl_view_component_set_extent"] = _wl_view_component_set_extent = asm["wl_view_component_set_extent"];
            Module["_wl_input_component_get_type"] = _wl_input_component_get_type = asm["wl_input_component_get_type"];
            Module["_wl_input_component_set_type"] = _wl_input_component_set_type = asm["wl_input_component_set_type"];
            Module["_wl_light_component_get_color"] = _wl_light_component_get_color = asm["wl_light_component_get_color"];
            Module["_wl_light_component_get_type"] = _wl_light_component_get_type = asm["wl_light_component_get_type"];
            Module["_wl_light_component_set_type"] = _wl_light_component_set_type = asm["wl_light_component_set_type"];
            Module["_wl_light_component_get_intensity"] = _wl_light_component_get_intensity = asm["wl_light_component_get_intensity"];
            Module["_wl_light_component_set_intensity"] = _wl_light_component_set_intensity = asm["wl_light_component_set_intensity"];
            Module["_wl_light_component_get_outerAngle"] = _wl_light_component_get_outerAngle = asm["wl_light_component_get_outerAngle"];
            Module["_wl_light_component_set_outerAngle"] = _wl_light_component_set_outerAngle = asm["wl_light_component_set_outerAngle"];
            Module["_wl_light_component_get_innerAngle"] = _wl_light_component_get_innerAngle = asm["wl_light_component_get_innerAngle"];
            Module["_wl_light_component_set_innerAngle"] = _wl_light_component_set_innerAngle = asm["wl_light_component_set_innerAngle"];
            Module["_wl_light_component_get_shadows"] = _wl_light_component_get_shadows = asm["wl_light_component_get_shadows"];
            Module["_wl_light_component_set_shadows"] = _wl_light_component_set_shadows = asm["wl_light_component_set_shadows"];
            Module["_wl_light_component_get_shadowRange"] = _wl_light_component_get_shadowRange = asm["wl_light_component_get_shadowRange"];
            Module["_wl_light_component_set_shadowRange"] = _wl_light_component_set_shadowRange = asm["wl_light_component_set_shadowRange"];
            Module["_wl_light_component_get_shadowBias"] = _wl_light_component_get_shadowBias = asm["wl_light_component_get_shadowBias"];
            Module["_wl_light_component_set_shadowBias"] = _wl_light_component_set_shadowBias = asm["wl_light_component_set_shadowBias"];
            Module["_wl_light_component_get_shadowNormalBias"] = _wl_light_component_get_shadowNormalBias = asm["wl_light_component_get_shadowNormalBias"];
            Module["_wl_light_component_set_shadowNormalBias"] = _wl_light_component_set_shadowNormalBias = asm["wl_light_component_set_shadowNormalBias"];
            Module["_wl_light_component_get_shadowTexelSize"] = _wl_light_component_get_shadowTexelSize = asm["wl_light_component_get_shadowTexelSize"];
            Module["_wl_light_component_set_shadowTexelSize"] = _wl_light_component_set_shadowTexelSize = asm["wl_light_component_set_shadowTexelSize"];
            Module["_wl_light_component_get_cascadeCount"] = _wl_light_component_get_cascadeCount = asm["wl_light_component_get_cascadeCount"];
            Module["_wl_light_component_set_cascadeCount"] = _wl_light_component_set_cascadeCount = asm["wl_light_component_set_cascadeCount"];
            Module["_wl_mesh_component_get_material"] = _wl_mesh_component_get_material = asm["wl_mesh_component_get_material"];
            Module["_wl_mesh_component_set_material"] = _wl_mesh_component_set_material = asm["wl_mesh_component_set_material"];
            Module["_wl_mesh_component_get_mesh"] = _wl_mesh_component_get_mesh = asm["wl_mesh_component_get_mesh"];
            Module["_wl_mesh_component_set_mesh"] = _wl_mesh_component_set_mesh = asm["wl_mesh_component_set_mesh"];
            Module["_wl_mesh_component_get_skin"] = _wl_mesh_component_get_skin = asm["wl_mesh_component_get_skin"];
            Module["_wl_mesh_component_set_skin"] = _wl_mesh_component_set_skin = asm["wl_mesh_component_set_skin"];
            Module["_wl_mesh_component_get_morph_targets"] = _wl_mesh_component_get_morph_targets = asm["wl_mesh_component_get_morph_targets"];
            Module["_wl_mesh_component_set_morph_targets"] = _wl_mesh_component_set_morph_targets = asm["wl_mesh_component_set_morph_targets"];
            Module["_wl_mesh_component_get_morph_target_weight"] = _wl_mesh_component_get_morph_target_weight = asm["wl_mesh_component_get_morph_target_weight"];
            Module["_wl_mesh_component_get_morph_target_weights"] = _wl_mesh_component_get_morph_target_weights = asm["wl_mesh_component_get_morph_target_weights"];
            Module["_wl_mesh_component_set_morph_target_weight"] = _wl_mesh_component_set_morph_target_weight = asm["wl_mesh_component_set_morph_target_weight"];
            Module["_wl_mesh_component_set_morph_target_weights"] = _wl_mesh_component_set_morph_target_weights = asm["wl_mesh_component_set_morph_target_weights"];
            Module["_wl_material_definition_get_param_count"] = _wl_material_definition_get_param_count = asm["wl_material_definition_get_param_count"];
            Module["_wl_material_definition_get_param_name"] = _wl_material_definition_get_param_name = asm["wl_material_definition_get_param_name"];
            Module["_wl_material_definition_get_param_type"] = _wl_material_definition_get_param_type = asm["wl_material_definition_get_param_type"];
            Module["_wl_material_create"] = _wl_material_create = asm["wl_material_create"];
            Module["_wl_material_clone"] = _wl_material_clone = asm["wl_material_clone"];
            Module["_wl_material_get_definition"] = _wl_material_get_definition = asm["wl_material_get_definition"];
            Module["_wl_material_get_param_value"] = _wl_material_get_param_value = asm["wl_material_get_param_value"];
            Module["_wl_material_set_param_value_float"] = _wl_material_set_param_value_float = asm["wl_material_set_param_value_float"];
            Module["_wl_material_set_param_value_uint"] = _wl_material_set_param_value_uint = asm["wl_material_set_param_value_uint"];
            Module["_wl_material_get_pipeline"] = _wl_material_get_pipeline = asm["wl_material_get_pipeline"];
            Module["_wl_mesh_destroy"] = _wl_mesh_destroy = asm["wl_mesh_destroy"];
            Module["_wl_mesh_get_indexData"] = _wl_mesh_get_indexData = asm["wl_mesh_get_indexData"];
            Module["_wl_mesh_get_vertexCount"] = _wl_mesh_get_vertexCount = asm["wl_mesh_get_vertexCount"];
            Module["_wl_mesh_update"] = _wl_mesh_update = asm["wl_mesh_update"];
            Module["_wl_mesh_create"] = _wl_mesh_create = asm["wl_mesh_create"];
            Module["_wl_mesh_get_attribute"] = _wl_mesh_get_attribute = asm["wl_mesh_get_attribute"];
            Module["_wl_mesh_set_attribute_values"] = _wl_mesh_set_attribute_values = asm["wl_mesh_set_attribute_values"];
            Module["_wl_mesh_get_attribute_values"] = _wl_mesh_get_attribute_values = asm["wl_mesh_get_attribute_values"];
            Module["_wl_mesh_get_boundingSphere"] = _wl_mesh_get_boundingSphere = asm["wl_mesh_get_boundingSphere"];
            Module["_wl_font_get_emHeight"] = _wl_font_get_emHeight = asm["wl_font_get_emHeight"];
            Module["_wl_font_get_capHeight"] = _wl_font_get_capHeight = asm["wl_font_get_capHeight"];
            Module["_wl_font_get_xHeight"] = _wl_font_get_xHeight = asm["wl_font_get_xHeight"];
            Module["_wl_font_get_outlineSize"] = _wl_font_get_outlineSize = asm["wl_font_get_outlineSize"];
            Module["_wl_skin_joint_ids"] = _wl_skin_joint_ids = asm["wl_skin_joint_ids"];
            Module["_wl_skin_inverse_bind_transforms"] = _wl_skin_inverse_bind_transforms = asm["wl_skin_inverse_bind_transforms"];
            Module["_wl_skin_inverse_bind_scalings"] = _wl_skin_inverse_bind_scalings = asm["wl_skin_inverse_bind_scalings"];
            Module["_wl_skin_get_joint_count"] = _wl_skin_get_joint_count = asm["wl_skin_get_joint_count"];
            Module["_wl_morph_targets_get_target_count"] = _wl_morph_targets_get_target_count = asm["wl_morph_targets_get_target_count"];
            Module["_wl_morph_targets_get_target_name"] = _wl_morph_targets_get_target_name = asm["wl_morph_targets_get_target_name"];
            Module["_wl_morph_targets_get_target_index"] = _wl_morph_targets_get_target_index = asm["wl_morph_targets_get_target_index"];
            Module["_wl_load_main_scene"] = _wl_load_main_scene = asm["wl_load_main_scene"];
            Module["_wl_scene_create_chunked_start"] = _wl_scene_create_chunked_start = asm["wl_scene_create_chunked_start"];
            Module["_wl_scene_create_chunked_end_main"] = _wl_scene_create_chunked_end_main = asm["wl_scene_create_chunked_end_main"];
            Module["_wl_scene_create_chunked_next"] = _wl_scene_create_chunked_next = asm["wl_scene_create_chunked_next"];
            Module["_wl_scene_create_chunked_abort"] = _wl_scene_create_chunked_abort = asm["wl_scene_create_chunked_abort"];
            Module["_wl_scene_initialize"] = _wl_scene_initialize = asm["wl_scene_initialize"];
            Module["_wl_get_images"] = _wl_get_images = asm["wl_get_images"];
            Module["_wl_get_material_definition_count"] = _wl_get_material_definition_count = asm["wl_get_material_definition_count"];
            Module["_wl_get_material_definition_index"] = _wl_get_material_definition_index = asm["wl_get_material_definition_index"];
            Module["_wl_scene_create"] = _wl_scene_create = asm["wl_scene_create"];
            Module["_wl_scene_create_chunked_end_prefab"] = _wl_scene_create_chunked_end_prefab = asm["wl_scene_create_chunked_end_prefab"];
            Module["_wl_scene_create_chunked_buffer_size"] = _wl_scene_create_chunked_buffer_size = asm["wl_scene_create_chunked_buffer_size"];
            Module["_wl_scene_create_chunked_end_queued"] = _wl_scene_create_chunked_end_queued = asm["wl_scene_create_chunked_end_queued"];
            Module["_wl_scene_create_empty"] = _wl_scene_create_empty = asm["wl_scene_create_empty"];
            Module["_wl_scene_destroy"] = _wl_scene_destroy = asm["wl_scene_destroy"];
            Module["_wl_scene_instantiate"] = _wl_scene_instantiate = asm["wl_scene_instantiate"];
            Module["_wl_scene_activate"] = _wl_scene_activate = asm["wl_scene_activate"];
            Module["_wl_scene_queued_bin_count"] = _wl_scene_queued_bin_count = asm["wl_scene_queued_bin_count"];
            Module["_wl_scene_queued_bin_path"] = _wl_scene_queued_bin_path = asm["wl_scene_queued_bin_path"];
            Module["_wl_scene_clear_queued_bin_list"] = _wl_scene_clear_queued_bin_list = asm["wl_scene_clear_queued_bin_list"];
            Module["_wl_scene_load_queued_bin"] = _wl_scene_load_queued_bin = asm["wl_scene_load_queued_bin"];
            Module["_wl_scene_activatable"] = _wl_scene_activatable = asm["wl_scene_activatable"];
            Module["_wl_scene_active"] = _wl_scene_active = asm["wl_scene_active"];
            Module["_wl_scene_get_baseURL"] = _wl_scene_get_baseURL = asm["wl_scene_get_baseURL"];
            Module["_wl_scene_get_filename"] = _wl_scene_get_filename = asm["wl_scene_get_filename"];
            Module["_wl_scene_get_component_manager_index"] = _wl_scene_get_component_manager_index = asm["wl_scene_get_component_manager_index"];
            Module["_wl_scene_get_active_views"] = _wl_scene_get_active_views = asm["wl_scene_get_active_views"];
            Module["_wl_scene_ray_cast"] = _wl_scene_ray_cast = asm["wl_scene_ray_cast"];
            Module["_wl_scene_add_object"] = _wl_scene_add_object = asm["wl_scene_add_object"];
            Module["_wl_scene_add_objects"] = _wl_scene_add_objects = asm["wl_scene_add_objects"];
            Module["_wl_scene_reserve_objects"] = _wl_scene_reserve_objects = asm["wl_scene_reserve_objects"];
            Module["_wl_renderer_set_mesh_layout"] = _wl_renderer_set_mesh_layout = asm["wl_renderer_set_mesh_layout"];
            Module["_wl_renderer_reserveImage"] = _wl_renderer_reserveImage = asm["wl_renderer_reserveImage"];
            Module["_wl_renderer_updateImage"] = _wl_renderer_updateImage = asm["wl_renderer_updateImage"];
            Module["_wl_renderer_streaming_idle"] = _wl_renderer_streaming_idle = asm["wl_renderer_streaming_idle"];
            Module["_wl_image_create"] = _wl_image_create = asm["wl_image_create"];
            Module["_wl_image_size"] = _wl_image_size = asm["wl_image_size"];
            Module["_wl_image_get_jsImage_index"] = _wl_image_get_jsImage_index = asm["wl_image_get_jsImage_index"];
            Module["_wl_texture_create"] = _wl_texture_create = asm["wl_texture_create"];
            Module["_wl_texture_destroy"] = _wl_texture_destroy = asm["wl_texture_destroy"];
            Module["_wl_texture_get_image_index"] = _wl_texture_get_image_index = asm["wl_texture_get_image_index"];
            Module["_wl_i18n_setLanguage"] = _wl_i18n_setLanguage = asm["wl_i18n_setLanguage"];
            Module["_wl_i18n_currentLanguage"] = _wl_i18n_currentLanguage = asm["wl_i18n_currentLanguage"];
            Module["_wl_i18n_currentLanguageIndex"] = _wl_i18n_currentLanguageIndex = asm["wl_i18n_currentLanguageIndex"];
            Module["_wl_i18n_translate"] = _wl_i18n_translate = asm["wl_i18n_translate"];
            Module["_wl_i18n_languageCount"] = _wl_i18n_languageCount = asm["wl_i18n_languageCount"];
            Module["_wl_i18n_languageIndex"] = _wl_i18n_languageIndex = asm["wl_i18n_languageIndex"];
            Module["_wl_i18n_languageCode"] = _wl_i18n_languageCode = asm["wl_i18n_languageCode"];
            Module["_wl_i18n_languageName"] = _wl_i18n_languageName = asm["wl_i18n_languageName"];
            Module["_wl_i18n_languageFile"] = _wl_i18n_languageFile = asm["wl_i18n_languageFile"];
            Module["_wl_math_cubicHermite"] = _wl_math_cubicHermite = asm["wl_math_cubicHermite"];
            Module["_wl_application_version"] = _wl_application_version = asm["wl_application_version"];
            Module["_wl_application_start"] = _wl_application_start = asm["wl_application_start"];
            Module["_wl_application_stop"] = _wl_application_stop = asm["wl_application_stop"];
            Module["_wl_application_resize"] = _wl_application_resize = asm["wl_application_resize"];
            Module["_fflush"] = _fflush = asm["fflush"];
            _htonl = asm["htonl"];
            Module["_ntohs"] = _ntohs = asm["ntohs"];
            _emscripten_stack_init = asm["emscripten_stack_init"];
            _emscripten_stack_get_free = asm["emscripten_stack_get_free"];
            _emscripten_stack_get_base = asm["emscripten_stack_get_base"];
            _emscripten_stack_get_end = asm["emscripten_stack_get_end"];
            stackSave = asm["stackSave"];
            stackRestore = asm["stackRestore"];
            stackAlloc = asm["stackAlloc"];
            _emscripten_stack_get_current = asm["emscripten_stack_get_current"];
            ___cxa_is_pointer_type = asm["__cxa_is_pointer_type"];
            dynCall_viijii = asm["dynCall_viijii"];
            dynCall_ji = asm["dynCall_ji"];
            dynCall_jii = asm["dynCall_jii"];
            dynCall_viij = asm["dynCall_viij"];
            dynCall_jiji = asm["dynCall_jiji"];
            dynCall_iiiiij = asm["dynCall_iiiiij"];
            dynCall_iiiiijj = asm["dynCall_iiiiijj"];
            dynCall_iiiiiijj = asm["dynCall_iiiiiijj"];
            wasmTable = asm["__indirect_function_table"];
            assert(wasmTable);
            wasmMemory = asm["memory"];
            assert(wasmMemory);
            assert(wasmMemory.buffer.byteLength === 25165824);
            updateMemoryViews();
            initRuntime(asm);
            ready()
        }, function(error) {
            console.error(error)
        });


        return instantiateWonderlandRuntime.ready
    }