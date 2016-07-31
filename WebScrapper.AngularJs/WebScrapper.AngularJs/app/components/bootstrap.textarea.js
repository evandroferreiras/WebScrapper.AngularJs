var app;
(function (app) {
    var components;
    (function (components) {
        var bootstrap;
        (function (bootstrap) {
            var textarea;
            (function (textarea) {
                angular.module('webScrapperManagement')
                    .component("bootstrapTextarea", {
                    templateUrl: "app/components/bootstrap.textarea.html",
                    controller: bootstrap.bootstrapInputCtrl,
                    bindings: {
                        title: "@",
                        value: "=",
                        req: "@"
                    }
                });
            })(textarea = bootstrap.textarea || (bootstrap.textarea = {}));
        })(bootstrap = components.bootstrap || (components.bootstrap = {}));
    })(components = app.components || (app.components = {}));
})(app || (app = {}));
//# sourceMappingURL=bootstrap.textarea.js.map