
define(['backbone', 'underscore'],
function (Backbone, _) {
    "use stricts";

    return Backbone.View.extend({

        initialize: function () {
            this.$el = Backbone.$('<ul data-role="listview" />');
            this.listenTo(this.collection, 'add', this.add);
            this.listenTo(this.collection, 'remove', this.remove);
        },

        add: function (model) {
            Backbone.$('#notasks').remove();
            this.$el.append(model.render());
        },

        remove: function () {
            if (!this.collection.length) {
                 this.$el.append($('<li />', {
                    id: 'notasks',
                    text: "No hay task"
                }));
            }
        },

        render: function () {

            var lis = _.map(this.collection.models, function (model) {
                return model.render();
            });

            this.$el.append(lis);

            this.remove();

            return this.$el;

        }

    });

});

