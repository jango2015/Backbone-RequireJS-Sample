define(['backbone'], function (Backbone) {
    var BookModel = Backbone.Model.extend({
        validate: function(attrs) {
            if (!attrs.firstname) 
                return "firstname is a required field";
                
            if (!attrs.lastname) 
                return "lastname is a required field";
        }    
    });
    
    return BookModel;
});