module app.models{
    export interface IHttpMethods {
        id : number
        name : string
    }

    export class HttpMethods implements IHttpMethods{
        constructor(public id : number,
                    public name : string) {            
        }
    }
}