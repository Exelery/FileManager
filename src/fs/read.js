import fs from 'fs/promises';
import path from 'path';
import process  from 'process';


export const read = async (input) => {
    try{
        if(input.split(" ").length > 1) {
            
            let to = path.join(process.cwd(), input.split(" ").slice(1).join(" "))
            console.log("test ", to)
            const streamTxt = fs.createReadStream(to, 'utf8',)
            streamTxt.on('data', chunk =>  console.log(chunk)); 
            streamTxt.on('error', (er)=> {
                console.log("Operation failed")
            })
        }else  console.log("Invalid input")

    
    }catch(err) {
        console.log("Invalid input")
    }
    // Write your code here 
};

