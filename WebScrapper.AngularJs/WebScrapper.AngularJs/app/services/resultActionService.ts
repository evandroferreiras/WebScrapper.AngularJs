module app.services{
    export interface IResultActionResource extends ng.resource.IResource<app.models.IResultAction> {

    }

    export interface IResultActionResourceClass extends ng.resource.IResourceClass<IResultActionResource>{

    }

    interface IResultActionService{
        getResource() : IResultActionResourceClass;        
    }

    export class ResultActionService implements IResultActionService {
        static $inject = ["$resource"];
        config : app.config.ConstantsValues;
        
        constructor(private $resource : ng.resource.IResourceService) {
            this.config = app.config.Constants.Default;            
        }

        getResource() : IResultActionResourceClass{
            return this.$resource(this.config.apiUrl + "api/resultactions/")
        }        
    }

    angular.module("common.services")
        .service("resultActionService", ResultActionService);

}