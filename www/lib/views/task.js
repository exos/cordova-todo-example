
define(['backbone', 'text!templates/task.html'],
function (Backbone, Template) {
    "use stricts";

    return Backbone.View.extend({
        template: _.template(Template),

        initialize: function () {

           this.$el = Backbone.$('<li />');

           this.listenTo(this.model, 'change:estado', this.changeEstado);
           this.listenTo(this.model, 'destroy', this.remove());
        },

        changeEstado: function () {
            if (this.model.get('estado') == "listo") {
                this.$el.find('[name="estado"]').prop('checked', true);
            } else {
                this.$el.find('[name="estado"]').prop('checked', false);
            }
        },

        remove: function () {
            var self = this;

            this.$el.slideUp('slow', function () {
                self.$el.remove();
            });
        },

        render: function () {

            var self = this;

            this.$el = Backbone.$(this.template(
                this.model.attributes
            ));

            this.$el.find('[name="estado"]').click(function (ev) {
                var mode = $(this).is(':checked') ? 'listo' : 'nueva';
                self.model.save({
                    estado: mode
                });
            });

            this.changeEstado();
            return this.$el;

        }

    });

});

