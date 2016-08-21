module app.models {
    export interface IResponseAction {
        extractInformations : IExtractInformation[];
        informationResults : IInformationResult[];
    }

    export class ResponseAction implements IResponseAction{
                
        constructor( public extractInformations : IExtractInformation[],
                     public informationResults : IInformationResult[])
        {            
        }
    }
}