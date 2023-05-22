import {writeFile, WriteFileOptions} from "fs";
export const saveFile = (filePath: string, buffer: Buffer, type: WriteFileOptions) => {
    writeFile(filePath, buffer, type, (err) => {
        if (err) {
            console.log(err);
            return;
        }

        console.log("The file was saved!");
    });
}
