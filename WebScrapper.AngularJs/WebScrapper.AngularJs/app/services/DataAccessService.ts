module app.services {

    interface IDataAccessService {
        getWebScrapperItemResource() : ng.resource.IResourceClass<IWebScrapperItemResource>;
    }


    interface IWebScrapperItemResource extends ng.resource.IResource<app.models.IWebScrapperItem>{
        
    }

    export class DataAccessService implements IDataAccessService{        

        static $inject = ["$resource"];
        constructor(private $resource: ng.resource.IResourceService) { }


        getWebScrapperItemResource(): angular.resource.IResourceClass<IWebScrapperItemResource> {            

            return this.$resource("api/webScrapper/:id");
        }
    }

    
    angular.module("common.services")
        .service("dataAccessService", DataAccessService); 
} 