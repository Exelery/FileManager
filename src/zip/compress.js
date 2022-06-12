import fs from 'fs/promises';
import crypto from "crypto";
import zlib from "zlib"

import path from 'path';
import process  from 'process';
import { createReadStream, createWriteStream, } from "fs";

export const compress = async (input) => {
    try{
        if(input.split(" ").length > 2) {
            let file = path.join(process.cwd(), input.split(" ")[1])
            let file2 = path.join(process.cwd(), input.split(" ")[2],)
            console.log(file2)

            const readStream = createReadStream(file);
            const writeStream = createWriteStream(file2);
            const brotli = zlib.createBrotliCompress();

            const stream = readStream.pipe(brotli).pipe(writeStream);

            stream.on('finish', () => {
                console.log('Done compressing 😎')
            });

        }else {

        }

    }catch(err) {

    }

}