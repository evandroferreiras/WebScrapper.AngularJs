module app.models{
    export interface IHttpMethods {
        name : string
    }

    export class HttpMethods implements IHttpMethods{
        constructor(public name : string) {            
        }
    }
}