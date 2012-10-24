define(function(require) {
    var $        = require('jquery'), 
        Backbone = require('backbone'), 
        _        = require('underscore'), 
        
        template         = require('text!app/template/BookTemplate.html'),
        compiledTemplate = _.template(template);
    
    // `el` and `model` are inject via constructor
    var BookView = Backbone.View.extend({
        render: function(){
            this.$el.append(compiledTemplate(this.model.toJSON()));    
        }
    });
    
    return BookView;
});