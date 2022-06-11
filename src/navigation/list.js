import * as fsProm from 'fs/promises';

export const list = async (path) => {
    // Write your code here 
    console.log(path)
    try {
    
    console.log(await fsProm.readdir(path))
    } catch(err) {
        console.log("Operation failed");
    }
};
