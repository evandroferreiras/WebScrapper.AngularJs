module app.models{
    export interface ITypeInformation {
        id: number
        name : string
    }

    export class TypeInformation implements ITypeInformation{
        constructor( public id : number,
                     public name : string) {            
        }
    }
}