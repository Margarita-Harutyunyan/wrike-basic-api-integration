import fs from 'fs';

export function writeFilePromise(fileName: string, data: string): Promise<void> {
    return new Promise(function(resolve, reject) {
        fs.writeFile(fileName, data, (error) => {
            if (error) {
                reject(error);
            } else {
                resolve();
            }
        })
    })
};