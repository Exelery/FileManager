import * as fs from 'fs/promises';
import * as fsSync from 'fs';
import path from 'path';


export const rename = async (input) => {
    // Write your code here 
    
    let oldPath = path.join(process.cwd(), input.split(" ").slice(1).join(" "))
    let newPath = "./src/fs/files/properFilename.md"
    fs.rename(oldPath, newPath )
};