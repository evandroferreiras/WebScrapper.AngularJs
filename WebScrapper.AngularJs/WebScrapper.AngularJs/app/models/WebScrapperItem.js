var app;
(function (app) {
    var models;
    (function (models) {
        var WebScrapperItem = (function () {
            function WebScrapperItem(id, title, description) {
                this.id = id;
                this.title = title;
                this.description = description;
            }
            return WebScrapperItem;
        }());
        models.WebScrapperItem = WebScrapperItem;
    })(models = app.models || (app.models = {}));
})(app || (app = {}));
//# sourceMappingURL=WebScrapperItem.js.map