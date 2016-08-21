module app.modalResponseAction {
    export interface IModalResponseAction {
        action: app.models.IAction;
        responseAction: app.models.IResponseAction;
        newResponseAction: app.models.IResponseAction;
        save(): void;
        cancel(): void;
    }



    export class ModalResponseAction implements IModalResponseAction {


        public newResponseAction: app.models.IResponseAction;

        public gridOptionsIR: uiGrid.IGridOptionsOf<app.models.IInformationResult>;
        public gridOptionEI: uiGrid.IGridOptionsOf<app.models.IExtractInformation>;

        static $inject = ["$uibModalInstance", "responseAction", "action", "resultActionService", "typeInformationService"];
        constructor(private $uibModalInstance: angular.ui.bootstrap.IModalServiceInstance,
            public responseAction: app.models.IResponseAction,
            public action: app.models.IAction,
            public resultActionService: app.services.ResultActionService,
            public typeInformationService: app.services.TypeInformationService) {

            this.newResponseAction = angular.copy(responseAction, this.newResponseAction);



            this.gridOptionsIR = {};
            var resultActionResource = resultActionService.getResource();
            resultActionResource.query((data: app.models.IResultAction[]) => {
                var values = [];
                data.forEach(element => {
                    values.push({ id: element, name: element.name })
                });

                this.gridOptionsIR.columnDefs = [
                    { name: 'Css Selector', field: 'cssSelector' },
                    {
                        name: 'Result Action',
                        field: 'resultAction',
                        editableCellTemplate: 'ui-grid/dropdownEditor',
                        cellFilter: 'ComboBoxFilter',
                        editDropdownValueLabel: 'name',
                        editDropdownOptionsArray: values,
                    },
                    { name: 'Result Name', field: 'resultName' }
                ];
            });
            this.gridOptionsIR.data = this.newResponseAction.informationResults;

            this.gridOptionEI = {};
            var TypeInformationResource = typeInformationService.getResource();
            TypeInformationResource.query((data: app.models.ITypeInformation[]) => {
                var values = [];
                data.forEach(element => {
                    values.push({ id: element, name: element.name })
                });

                this.gridOptionEI.columnDefs = [
                    {
                        name: 'Type Information',
                        field: 'typeInformation',
                        editableCellTemplate: 'ui-grid/dropdownEditor',
                        cellFilter: 'ComboBoxFilter',
                        editDropdownValueLabel: 'name',
                        editDropdownOptionsArray: values,
                    },
                    { name: 'Css Selector', field: 'cssSelector' }
                ];
            })
            this.gridOptionEI.data = this.newResponseAction.extractInformations;

        }

        save(): void {
            this.responseAction = angular.copy(this.newResponseAction, this.responseAction);
            this.$uibModalInstance.close(this.responseAction);
        }

        cancel(): void {
            this.$uibModalInstance.dismiss('cancel');
        }
    }

    export class ModalResponseActionParent {

        static $inject = ["$uibModal"]
        constructor(private $uibModal: ng.ui.bootstrap.IModalService) { }

        openModal(responseAction: app.models.IResponseAction, action: app.models.IAction) {

            var options: ng.ui.bootstrap.IModalSettings =
                {
                    template: ` 
                                <div class="modal-header">
                                    <h3 class="modal-title">Reponse actions</h3>
                                </div>                                
                                <div class="modal-body">
                                    
                                    <div class="row">
                                        <div class="col-md-12">
                                            <div class="row">
                                                <h4>Extract Information</h4>
                                            </div>
                                            <div class="row">                                        
                                                <div ui-grid="c.gridOptionEI" ui-grid-edit style="height: 120px;"> </div>
                                            </div>                                                                                        
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-12">
                                            <div class="row">
                                                <h4>Information Results</h4>
                                            </div>                                           
                                            <div class="row">
                                                <div ui-grid="c.gridOptionsIR" ui-grid-edit style="height: 120px;"> </div>
                                            </div>                                                                                        
                                        </div>
                                    </div>
                                    
                                </div>
                                <div class="modal-footer">
                                    <button class="btn btn-primary" type="submit" ng-click="c.save()">Save</button>
                                    <button class="btn btn-warning" type="button" ng-click="c.cancel()">Cancel</button>
                                </div>`,
                    controller: ModalResponseAction,
                    resolve: {
                        responseAction: () => responseAction,
                        action: () => action
                    },
                    bindToController: true,
                    controllerAs: 'c'
                }
            this.$uibModal.open(options);
        }
    }
    angular.module('webScrapperManagement').controller("ModalResponseAction", ModalResponseAction)

    angular.module('webScrapperManagement').filter("ComboBoxFilter",
        function () {

            return function (input) {


                if (!input) {
                    return '';
                } else {
                    return input.name;
                }

            };
        });

}