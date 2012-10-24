define(['jquery', 'backbone', 'underscore', 'text!app/template/BookTemplate.html'], 

function ($, Backbone, _, template) {
    var compiledTemplate = _.template(template);
    
    // View's constructor will only receive `el` and 
    // `model` as parameter
    var BookView = Backbone.View.extend({
            
        render: function(){
            this.$el.append(compiledTemplate(this.model.toJSON()));    
        }
    });
    
    return BookView;
});