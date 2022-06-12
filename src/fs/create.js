import fs from 'fs';
import path from 'path';
import process  from 'process';


export const create = async (input) => {
    try{
        if(input.split(" ").length > 1) {
            let to = path.join(process.cwd(), input.split(" ").slice(1).join(" "))
            const tempFile = fs.createWriteStream(to, {flags: "w", encoding: "utf8",})
            tempFile.on("ready", async() => {
                console.log(`File ${input.split(" ").slice(1).join(" ")} is created`);
              });
            
        }else  console.log("Invalid input")

    
    }catch(err) {
        console.log("Operation failed")
    }
    // Write your code here 
};
