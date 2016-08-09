var app;
(function (app) {
    var models;
    (function (models) {
        var Action = (function () {
            function Action(id, url, httpMethod, parameters) {
                this.id = id;
                this.url = url;
                this.httpMethod = httpMethod;
                this.parameters = parameters;
            }
            return Action;
        }());
        models.Action = Action;
    })(models = app.models || (app.models = {}));
})(app || (app = {}));
