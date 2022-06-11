import os from 'os'
import process from 'process';

export const showInfo = async (input) => {

    switch(input.split(" ")[1]) {
        case '--EOL':
            console.log(JSON.stringify(os.EOL))
            break;
        case '--cpus':
            console.log(`Overall amount of CPUs: ${os.cpus().length}`)
            let data =[]
            os.cpus().forEach((value)=>{
                data.push([value.model.split("CPU")[0].trim(), value.speed/1000])
            })
            
          console.table(data)
            break;
        case '--homedir':
            console.log(os.homedir())
            break;
        case '--username':
            console.log(os.userInfo().username)
            break;
        case '--architecture':
            console.log(process.arch)
            break;
        default:
            console.log('Invalid input')
    }
}