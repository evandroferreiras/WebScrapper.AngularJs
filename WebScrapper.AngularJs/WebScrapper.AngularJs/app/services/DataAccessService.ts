module app.services {

    export interface IWebScrapperItemResourceClass extends ng.resource.IResourceClass<IWebScrapperItemResource> {
        update(IWebScrapperItem): app.models.IWebScrapperItem;
    }

    interface IDataAccessService {
        getWebScrapperItemResource(): IWebScrapperItemResourceClass;
    }


    export interface IWebScrapperItemResource extends ng.resource.IResource<app.models.IWebScrapperItem> {

    }

    export class DataAccessService implements IDataAccessService {

        static $inject = ["$resource"];
        constructor(private $resource: ng.resource.IResourceService) { }


        getWebScrapperItemResource(): IWebScrapperItemResourceClass {
            var updateAction: ng.resource.IActionDescriptor = {
                method: 'PUT',
                isArray: false
            };

            return <IWebScrapperItemResourceClass>this.$resource("api/webScrapper/:id", { id: "@id" }, { update: updateAction });
        }
    }


    angular.module("common.services")
        .service("dataAccessService", DataAccessService);
} 