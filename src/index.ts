import {RequestDto} from "./request.dto";
import minimist from "minimist"
import {getImage, mergeImage, saveImage} from "./image.service"
import {validateNumber, validateString} from "./validation.service";

const argv = minimist(process.argv.slice(2))

let {
    greeting = 'Hello', who = 'You',
    width = 400, height = 500, color = 'Pink', size = 100,
} = argv;

// validate the parameters which will be acquired from user
const validateInputs = (): void => {
    greeting = validateString(greeting, 'greeting')
    who = validateString(who, 'who')
    width = validateNumber(width, 'width')
    height = validateNumber(height, 'height')
    color = validateString(color, 'color')
    size = validateNumber(size, 'size')
}

const run = async (): Promise<void> => {
    try {
        validateInputs()
        // Image one url details
        const firstRequest: RequestDto = new RequestDto('https://cataas.com/cat/says/',
            greeting, width, height, color, size, 'binary')

        // Image two url details
        const secondRequest: RequestDto = new RequestDto('https://cataas.com/cat/says/',
            who, width, height, color, size, 'binary')

        const imageOne: string = await getImage(firstRequest)
        const imageTwo: string = await getImage(secondRequest)
        const buffer: Buffer = await mergeImage(imageOne, imageTwo, 0, 0, 0, 0);
        saveImage(`/cat-card.jpg`, buffer)
    } catch (err) {
        console.log("Exception happened while processing the images")
        console.error(`Reason: ${err}`)
        console.log("Aborting the program")
    }
}

run()
