var app;
(function (app) {
    var models;
    (function (models) {
        var Item = (function () {
            function Item(id, title, description, actions) {
                this.id = id;
                this.title = title;
                this.description = description;
                this.actions = actions;
            }
            return Item;
        }());
        models.Item = Item;
    })(models = app.models || (app.models = {}));
})(app || (app = {}));
