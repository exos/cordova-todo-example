
define(['db', 'backbone', 'views/task'],
function(db, Backbone, TaskView) {
    "use stricts";

    return Backbone.Model.extend({
        database: db,
        storeName: 'Options',

        initialize: function () {
            this.view = new TaskView({
                model: this
            });
        },

        defaults: function () {
            return {
                stado: 'nueva',
                creada: (new Date()).getTime()
            }
        },

        render: function () {
            return this.view.render({
                model: this
            });
        }

    });

})
