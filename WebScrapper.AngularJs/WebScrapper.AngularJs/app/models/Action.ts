module app.models{
    export interface IAction  {
        id: number;
        url: string;
        httpMethod: string;
        parameters : app.models.IParameter[]
        responseAction : app.models.IResponseAction; 
    }

    export class Action implements IAction{

        constructor( public id: number,
                     public url: string,
                     public httpMethod: string,
                     public parameters : app.models.IParameter[],
                     public responseAction : app.models.IResponseAction) 
        {       
        }
    }
}