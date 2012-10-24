define([
    'require',
    'jquery', 
    'app/model/BookModel', 
    'app/view/BookView', 
    'jquery.validate'
], 
function (require) {
    var $ = require('jquery');
    
    var BookModel = require('app/model/BookModel'),
        BookView  = require('app/view/BookView');

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
