import {Request} from "./request";
import minimist from "minimist"
import {getImage, mergeImage, saveImage} from "./image.service"

const argv = minimist(process.argv.slice(2))

const {
    greeting = 'Hello', who = 'You',
    width = 400, height = 500, color = 'Pink', size = 100,
} = argv;

const run = async () => {
    const firstRequest: Request = new Request('https://cataas.com/cat/says/',
        greeting, width, height, color, size, 'binary')

    const secondRequest: Request = new Request('https://cataas.com/cat/says/',
        who, width, height, color, size, 'binary')

    const imageOne: string = await getImage(firstRequest)
    const imageTwo: string = await getImage(secondRequest)
    const buffer: Buffer = await mergeImage(imageOne, imageTwo, 0, 0, 0, 0);
    saveImage(`/cat-card.jpg`, buffer)
}

run()
