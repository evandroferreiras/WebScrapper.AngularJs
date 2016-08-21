module app.models{
    export interface IExtractInformation{
        id : number;
        typeInformation : ITypeInformation;
        cssSelector : string;
    }
    
    export class ExtractInformation implements IExtractInformation{
        
        constructor(public id : number,
                    public typeInformation : ITypeInformation,
                    public cssSelector : string) {
            
            
        }
    }
}