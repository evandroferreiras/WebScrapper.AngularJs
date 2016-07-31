module app.components.bootstrap.textarea {

    

    angular.module('webScrapperManagement')
        .component("bootstrapTextarea",
        {
            templateUrl: "app/components/bootstrap.textarea.html",
            controller: bootstrapInputCtrl,
            bindings: {
                title: "@",
                value: "=",
                req: "@"
            }
        });
}