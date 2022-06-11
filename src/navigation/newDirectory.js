import process from 'process';

 export const cdDirectory = async(to) => {
    try {
        if(to.split(" ").length > 1) {    
            process.chdir(process.cwd() +"/" + to.split(" ").slice(1).join(" "))
        } else console.log("Invalid input")
    }catch(err){
        console.log("Operation failed")
    }
}