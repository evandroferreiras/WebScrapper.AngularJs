module app.models{
    export interface ITypeInformation {
        name : string
    }

    export class TypeInformation implements ITypeInformation{
        constructor(public name : string) {            
        }
    }
}