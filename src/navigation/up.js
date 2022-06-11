import process from 'process';

export const up = async () => {
    try{
    process.chdir('../');
    } catch(err) {
        console.log(err)
    }
}