import fs from 'fs/promises';
import path from 'path';
import process  from 'process';
import { createReadStream, createWriteStream } from "fs";

export const move = async (input) => {
    try{
        if(input.split(" ").length == 3) {
            let file = path.join(process.cwd(), input.split(" ")[1])
            let dict = path.join(input.split(" ")[2])
        await fs.access(file)
        await fs.access(dict)

        const readStr = createReadStream(file)
        const writeStr = createWriteStream(path.join(dict, path.basename(file)))
        readStr.pipe(writeStr)
        fs.rm(file)
        } else {
            console.log("invalid input")
        }
    }catch(err) {
        console.log('Operation failed')
    }
        
}