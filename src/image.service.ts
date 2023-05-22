import request from "request";
import {RequestDto} from "./request.dto";
import mergeImg from "merge-img"
import {join} from "path";
import {saveFile} from "./file.service";

// get image from http
export const getImage = (req: RequestDto): Promise<string> => {
    return new Promise((resolve, reject) => {
        request.get(req, (err, response) => {
            if (err) {
                reject(err)
            } else {
                resolve(response.body)
            }
        })
    })
}

// merge two images with configurable offsets
export const mergeImage = (imageOne: string, imageTwo: string, imageOneOffsetX: number, imageOneOffsetY: number,
                           imageTwoOffsetX: number, imageTwoOffsetY: number): Promise<Buffer> => {
    return mergeImg([
        {src: new Buffer(imageOne, 'binary'), offsetX: imageOneOffsetX, offsetY: imageOneOffsetY},
        {src: new Buffer(imageTwo, 'binary'), offsetX: imageTwoOffsetX, offsetY: imageTwoOffsetY}
    ]).then(img => new Promise((resolve, reject) => {
        img.getBuffer('image/jpeg', (error, buffer) => {
            if (error) {
                reject(error)
            } else {
                resolve(buffer)
            }
        })
    }))
}

export const saveImage = (fileName: string, buffer: Buffer): void => {
    const fileOut: string = join(process.cwd(), fileName);
    saveFile(fileOut, buffer, 'binary')
}
