define(function(require) {
    var $        = require('jquery'), 
        Backbone = require('backbone'), 
        _        = require('underscore'), 
        template = require('text!app/template/BookTemplate.html'),
        
        compiledTemplate = _.template(template);
    
    // View's constructor will only receive `el` and 
    // `model` as parameter
    var BookView = Backbone.View.extend({
        render: function(){
            this.$el.append(compiledTemplate(this.model.toJSON()));    
        }
    });
    
    return BookView;
});