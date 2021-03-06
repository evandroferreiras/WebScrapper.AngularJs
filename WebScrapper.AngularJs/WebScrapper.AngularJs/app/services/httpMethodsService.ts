module app.services {
    export interface IResultActionResource extends ng.resource.IResource<app.models.IHttpMethods> {

    }

    export interface IResultActionResourceClass extends ng.resource.IResourceClass<IResultActionResource>{

    }

    interface IHttpMethodsService {
        getResource() : IResultActionResourceClass
    }

    export class HttpMethodsService implements IHttpMethodsService {
        static $inject = ["$resource"];
        config : app.config.ConstantsValues;
        
        constructor(private $resource : ng.resource.IResourceService) {
            this.config = app.config.Constants.Default;            
        }

        getResource() : IResultActionResourceClass{
            return this.$resource(this.config.apiUrl + "api/httpmethods/");
        }
        
    }
    angular.module("common.services")
        .service("httpMethodsService", HttpMethodsService);
}