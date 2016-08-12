module app.services {
    export interface IHttpMethodsResource extends ng.resource.IResource<app.models.IHttpMethods> {

    }

    export interface IHttpMethodsResourceClass extends ng.resource.IResourceClass<IHttpMethodsResource>{

    }

    interface IHttpMethodsService {
        getResource() : IHttpMethodsResourceClass
    }

    export class HttpMethodsService implements IHttpMethodsService {
        static $inject = ["$resource"];
        config : app.config.ConstantsValues;
        
        constructor(private $resource : ng.resource.IResourceService) {
            this.config = app.config.Constants.Default;            
        }

        getResource() : IHttpMethodsResourceClass{
            return this.$resource(this.config.apiUrl + "api/httpMethods/");
        }
        
    }
    angular.module("common.services")
        .service("httpMethodsService", HttpMethodsService);
}