module app.models{
    export interface IResultAction{
        id : number;
        name : string;        
    }

    export class ResultAction implements IResultAction{        
        constructor(public id : number,
                    public name : string ) {                
        }
    }
}