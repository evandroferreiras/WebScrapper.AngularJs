var app;
(function (app) {
    var components;
    (function (components) {
        var bootstrap;
        (function (bootstrap) {
            var input;
            (function (input) {
                angular.module('webScrapperManagement')
                    .component("bootstrapInput", {
                    templateUrl: "app/components/bootstrap.input.html",
                    controller: bootstrap.bootstrapInputCtrl,
                    bindings: {
                        title: "@",
                        value: "=",
                        req: "@"
                    }
                });
            })(input = bootstrap.input || (bootstrap.input = {}));
        })(bootstrap = components.bootstrap || (components.bootstrap = {}));
    })(components = app.components || (app.components = {}));
})(app || (app = {}));
