var app;
(function (app) {
    var models;
    (function (models) {
        var Alert = (function () {
            function Alert(type, msg) {
                this.type = type;
                this.msg = msg;
            }
            return Alert;
        }());
        models.Alert = Alert;
    })(models = app.models || (app.models = {}));
})(app || (app = {}));
