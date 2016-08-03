module app.itemCrudCtrl {

    export interface IItemCrudCtrl {
        titleWindow: string;
        item: app.models.IItem;
        alerts: IAlerts[];
        resource: app.services.IWebScrapperItemResourceClass;
        alertSuccess();
        alertError();
        closeAlert(index);
        save(): void;
    }

    export class ItemCrudCtrl implements IItemCrudCtrl {

        titleWindow: string;
        item: app.models.IItem;
        alerts: IAlerts[];
        resource: app.services.IWebScrapperItemResourceClass;
        
        location : angular.ILocationService

        static $inject = ["$routeParams", "dataAccessService", "$location"];
        constructor(private $routeParams: app.models.IWebScrapperItemParams,
            private dataAccessService: services.DataAccessService,
            private $location : angular.ILocationService) {

            
            this.resource = dataAccessService.getWebScrapperItemResource();
            this.location = $location;
        }


        save(): void {
            var castItem = <app.models.IWebScrapperItem> this.item;
            if (castItem.id > 0){
                this.resource.update(this.item);
            } else{
                this.resource.save(this.item);
            }

            this.alertSuccess()

        }

        alertSuccess() {
            this.alerts = [];
            this.alerts.push(new Alerts("success", "Saved with sucess"));
        }

        alertError() {
            this.alerts = [];
            this.alerts.push(new Alerts("danger", "Error"));
        }

        closeAlert(index) {
            this.alerts.splice(index, 1);
        };
    }

    export interface IAlerts {
        type: string;
        msg: string;
    }

    export class Alerts implements IAlerts {


        type: string;
        msg: string;

        constructor(type: string, msg: string) {
            this.type = type;
            this.msg = msg;
        }

    }




} 