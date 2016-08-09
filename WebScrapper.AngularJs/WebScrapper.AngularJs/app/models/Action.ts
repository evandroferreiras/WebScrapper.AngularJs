module app.models{
    export interface IAction  {
        id: number;
        url: string;
        httpMethod: string;
        parameters : app.models.IParameter[]

    }

    export class Action implements IAction{

        constructor( public id: number,
                     public url: string,
                     public httpMethod: string,
                     public parameters : app.models.IParameter[]) 
        {       
        }
    }
}