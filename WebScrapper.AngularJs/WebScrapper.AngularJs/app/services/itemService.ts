module app.services {
    export interface IItemResource extends ng.resource.IResource<app.models.IItem> {

    }
    export interface IItemResourceClass extends ng.resource.IResourceClass<IItemResource> {
        update(IItem): app.models.IItem;
    }

    interface IItemService {
        getResource(): IItemResourceClass;
    }

    export class ItemService implements IItemService {

        static $inject = ["$resource"];
        config : app.config.ConstantsValues;
        constructor(private $resource: ng.resource.IResourceService ) { 
            this.config = app.config.Constants.Default
        }

        getResource(): IItemResourceClass {
            var updateAction: ng.resource.IActionDescriptor = {
                method: 'PUT',
                isArray: false
            };

            return <IItemResourceClass>this.$resource(this.config.apiUrl + "api/items/:id", { id: "@id" }, { update: updateAction });
        }
    }

    angular.module("common.services")
        .service("itemService", ItemService);
} 