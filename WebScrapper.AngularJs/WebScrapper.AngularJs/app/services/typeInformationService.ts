module app.services {
     export interface ITypeInformationResource extends ng.resource.IResource<app.models.ITypeInformation>{

     }

     export interface ITypeInformationResourceClass extends ng.resource.IResourceClass<ITypeInformationResource>{

     } 

     interface ITypeInformationService {
         getResource() : ITypeInformationResourceClass;
     }

     export class TypeInformationService implements ITypeInformationService {
        static $inject = ["$resource"];
        config : app.config.ConstantsValues;
        constructor(private $resource: ng.resource.IResourceService ) { 
            this.config = app.config.Constants.Default
        }

        getResource() : ITypeInformationResourceClass{
            return this.$resource(this.config.apiUrl + "api/typeinformations/");
        }
     }

     angular.module("common.services")
     .service("typeInformationService", TypeInformationService)
}