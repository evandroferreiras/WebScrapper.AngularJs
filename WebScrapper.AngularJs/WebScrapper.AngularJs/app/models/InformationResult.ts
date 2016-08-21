module app.models{
    export interface IInformationResult {
        id : number,
        cssSelector : string;
        resultAction : IResultAction;
        resultName : string; 
    }

    export class InformationResult implements IInformationResult{        
        constructor(public id : number,
                    public cssSelector : string,
                    public resultAction : IResultAction,
                    public resultName : string ) {                    
        }
    }
}