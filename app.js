#!/usr/bin/env node

import os from 'os';
import process from 'process';
import readline from 'readline';
import {list} from "./src/navigation/list.js"
import {cdDirectory} from "./src/navigation/newDirectory.js"
import {up} from "./src/navigation/up.js"
import {showInfo} from "./src/os/system.js"
import {read} from "./src/fs/read.js"

async function StartApp() {
    const commangs = ['.exit', 'up', 'cd', 'ls', 'cat', 'add', 'rn',
     'cp', 'mv', 'rm','os --EOL', 'os --cpus', 'os --homedir', 'os --username', 'os --arch' ]


    process.chdir(os.homedir())
    
    let name =  process.argv.slice(2).toString().split("=")[1]
    console.log(`Welcome to the File Manager, ${name} `)
    console.log('You are currently in ' + process.cwd())

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    // if (answer == 'up') {
    //     process.chdir('./src');
    //     console.log('New directory: ' + process.cwd());
    // }

    
    process.on("exit", () => {
        console.log(`Thank you for using File Manager, ${name}!`)
        process.exit()
    })

    // rl.on('SIGTSTP', () => {
    //     // This will override SIGTSTP and prevent the program from going to the
    //     // background.
    //     console.log('Caught SIGTSTP.');
    //   });

    rl.on('line', async (input)  => {
        
        console.log(input.split(" "))
        
        await trySwitch(input)
         
        console.log("You are currently in ", process.cwd())

      });

}

StartApp()

async function trySwitch(input) {
    switch(input.split(" ")[0]) {
        case 'ls':
            await list(process.cwd())
            break;
        case 'cd':
            await cdDirectory(input)
            break;
        case 'up':
            await up()
            break;
        case 'os':
            await showInfo(input)
            break
        case 'cat':
            await read(input)
            break;


    }
}