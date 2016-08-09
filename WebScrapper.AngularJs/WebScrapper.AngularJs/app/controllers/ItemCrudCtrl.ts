module app.itemCrudCtrl {

    export interface IItemCrudCtrl {
        titleWindow: string;
        item: app.models.IItem;
        alerts: app.models.IAlert[];
        resource: app.services.IWebScrapperItemResourceClass;
        alertSuccess();
        alertError();
        closeAlert(index);
        save(): void;
        ParametersEncode(parameters: app.models.IParameter[]): string;
        openModalParameters(action: app.models.Action): void;
        newActionModal(): void;
        editActionModal(action: app.models.IAction): void;
    }

    export class ItemCrudCtrl implements IItemCrudCtrl {

        titleWindow: string;
        item: app.models.IItem;
        alerts: app.models.IAlert[];
        resource: app.services.IWebScrapperItemResourceClass;

        location: angular.ILocationService
        static $inject = ["$routeParams", "dataAccessService", "$location", "$uibModal"];
        constructor(private $routeParams: app.models.IItemParams,
            private dataAccessService: services.DataAccessService,
            private $location: angular.ILocationService,
            private $uibModal: ng.ui.bootstrap.IModalService) {
            this.resource = dataAccessService.getWebScrapperItemResource();
            this.location = $location;
        }


        save(): void {
            var castItem = <app.models.Item>this.item;
            console.log(castItem);
            if (castItem.id > 0) {
                this.resource.update(this.item);
            } else {
                this.resource.save(this.item);
            }

            this.alertSuccess()

        }
        ParametersEncode(parameters: app.models.IParameter[]): string {
            var result = "";
            parameters.forEach(p => {
                result = result.concat(`${p.name}=${p.value}&`)
            });

            if (result == "") {
                result = "Add parameters"
            }
            return result;
        }
        alertSuccess() {
            this.alerts = [];
            this.alerts.push(new app.models.Alert("success", "Saved with sucess"));
        }

        alertError() {
            this.alerts = [];
            this.alerts.push(new app.models.Alert("danger", "Error"));
        }

        closeAlert(index) {
            this.alerts.splice(index, 1);
        };

        deleteAction(action: app.models.IAction): void {
            var index = this.item.actions.indexOf(action, 0);
            if (index > -1) {
                this.item.actions.splice(index, 1);
            }
        }

        openModalParameters(action: app.models.IAction): void {
            new app.modalParametersEdit.ModalParametersEditParent(this.$uibModal).openModal(action);
        };

        newActionModal(): void {
            var action = new app.models.Action(0, "", "", []);
            new app.modalCrudAction.ModalCrudActionParent(this.$uibModal).openModal(action, this.item);
        }

        editActionModal(action: app.models.IAction): void {
            new app.modalCrudAction.ModalCrudActionParent(this.$uibModal).openModal(action, this.item);
        }
    }

} 