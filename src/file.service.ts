import {writeFile, WriteFileOptions} from "fs";
import * as util from "util";

const writeFileAsync = util.promisify(writeFile);

//write image buffer to file system
export const saveFile = (filePath: string, buffer: Buffer, type: WriteFileOptions): void => {
    writeFileAsync(filePath, buffer, type).then(res => {
        console.log("The file was saved!");
    }).catch(err => {
        console.log(err);
    })
}
