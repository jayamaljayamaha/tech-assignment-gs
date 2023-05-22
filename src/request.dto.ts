export class RequestDto {

    url: string;
    encoding: string;
    constructor(baseUrl: string, resource: string, width: string, height: string, color: string, size: string, encoding: string) {
        this.url = `${baseUrl}${resource}?width=${width}&height=${height}&color=${color}&s=${size}`
        this.encoding = encoding
    }
}
