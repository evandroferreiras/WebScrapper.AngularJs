var app;
(function (app) {
    var components;
    (function (components) {
        var bootstrap;
        (function (bootstrap) {
            var bootstrapInputCtrl = (function () {
                function bootstrapInputCtrl() {
                }
                bootstrapInputCtrl.prototype.hasError = function () {
                    return (this.req.toString().toLowerCase() === 'true' && !this.value);
                };
                return bootstrapInputCtrl;
            }());
            bootstrap.bootstrapInputCtrl = bootstrapInputCtrl;
            ;
        })(bootstrap = components.bootstrap || (components.bootstrap = {}));
    })(components = app.components || (app.components = {}));
})(app || (app = {}));
