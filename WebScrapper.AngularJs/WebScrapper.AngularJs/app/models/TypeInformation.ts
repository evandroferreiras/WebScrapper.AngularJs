module app.models{
    export interface ITypeInformation {
        id: string
        name : string
    }

    export class TypeInformation implements ITypeInformation{
        constructor( public id : string,
                     public name : string) {            
        }
    }
}