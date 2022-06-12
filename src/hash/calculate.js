import fs from 'fs/promises';
import crypto from "crypto";

import path from 'path';
import process  from 'process';
import { createReadStream} from "fs";

export const calculate = async (input) => {
    try{
        
        if(input.split(" ").length > 1) {
            
            let file = path.join(process.cwd(), input.split(" ").slice(1).join(" "))
            const stat = await fs.lstat(file)
            console.log(file)
            if(!stat.isFile()) {
                throw Error
            }

            let hash = crypto.createHash("sha256")
            let stream = createReadStream(file)
            stream.on('data', (data) => {
                hash.update(data)
            })
            stream.on("end", ()=> {
                console.log(hash.digest("hex"))
            })
    }else {
        console.log("Invalid input")
    }
    }catch(err) {
        console.log("Operaton failed")
    }

}