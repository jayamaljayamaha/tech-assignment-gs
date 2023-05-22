import {saveFile} from "../src/file.service";

const request = require('request');
import {RequestDto} from "../src/request.dto";
import {getImage, saveImage} from "../src/image.service";

jest.mock('request')
jest.mock('../src/file.service')

describe("test getImage", () => {
    test("Should call get method of request module", async() => {
        const req: RequestDto = jest.requireMock("../src/request.dto")
        const mockGet = jest.fn((_url, callback) => {
            callback(null, { statusCode: 200 , body: "response body"});
        });
        request.get.mockImplementation(mockGet);
        const result = await getImage(req)
        expect(mockGet).toHaveBeenCalled()
        expect(result).toBe("response body")
    })
})

describe("test saveImage", () => {
    test("Should call saveFile method of file service", () => {
        saveImage("/cat-card.jpg", Buffer.alloc(10))
        expect(saveFile).toHaveBeenCalled()
    })
})

