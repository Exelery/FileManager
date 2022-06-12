import fs from 'fs/promises';
import path from 'path';


export const remove = async (input) => {
    try{
        if(input.split(" ").length > 1) {
            let file = path.join(process.cwd(), input.split(" ").slice(1).join(" "))
        await fs.access(file)

        await fs.rm(file)
        } else console,log("Invalid input")
    }catch(err){
        console.log("Operation failed")
    }
}