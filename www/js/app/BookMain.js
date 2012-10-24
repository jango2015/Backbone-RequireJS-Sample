define(function (require) {
    var BookModel = require('./model/BookModel'),
        BookView = require('./view/BookView'),
        
        $ = require('jquery');

    $(function () {
        var model = new BookModel({
            firstname : "John",
            lastname  : "Go"
        });
        
        var view = new BookView({
            el: $('#bookview'),
            model: model
        });
        
        view.render();
    });
});
