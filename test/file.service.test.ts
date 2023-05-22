import {writeFile} from 'fs';
import {saveFile} from "../src/file.service";

jest.mock('fs')

describe("test saveFile", () => {
    test("Should call write function in fs module", () => {
        saveFile("/cat-card.jpg", Buffer.alloc(10), 'binary')
        expect(writeFile).toHaveBeenCalled()
    })
})
