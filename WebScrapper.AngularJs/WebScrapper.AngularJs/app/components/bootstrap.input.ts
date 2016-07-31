module app.components.bootstrap.input {

    

    angular.module('webScrapperManagement')
        .component("bootstrapInput",
        {
            templateUrl: "app/components/bootstrap.input.html",
            controller: bootstrapInputCtrl,
            bindings: {
                title: "@",
                value: "=",
                req: "@"
            }
        });
}