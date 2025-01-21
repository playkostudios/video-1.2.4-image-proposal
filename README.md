# Setup

1. run `npm i` and it should install the custom API package/all other dependencies
2. make a copy of a self-signed certificate in the root of the project, and call it `cert.pem` (for HTTPS serving)
3. do the same with a private key and call it `key.pem`
4. create a `static` folder
5. copy Big Buck Bunny to the `static` folder and call it `bbb.webm` (I used this one: https://upload.wikimedia.org/wikipedia/commons/transcoded/c/c0/Big_Buck_Bunny_4K.webm/Big_Buck_Bunny_4K.webm.720p.vp9.webm)

# Running

Don't run from the editor! Do this instead:
1. open the project in the editor
2. package it
3. serve the project with `npm run serve`