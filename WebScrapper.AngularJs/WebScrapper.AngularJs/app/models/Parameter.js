var app;
(function (app) {
    var models;
    (function (models) {
        var Parameter = (function () {
            function Parameter(name, value) {
                this.name = name;
                this.value = value;
            }
            return Parameter;
        }());
        models.Parameter = Parameter;
    })(models = app.models || (app.models = {}));
})(app || (app = {}));
