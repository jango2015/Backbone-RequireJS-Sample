define(function (require) {
    var $         = require('jquery'),
    
        BookModel = require('./model/BookModel'),
        BookView  = require('./view/BookView');

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
