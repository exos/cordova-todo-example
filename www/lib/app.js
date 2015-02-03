
define(['jquery', 'collections/tasks'],
function ($, TasksController) {
    "use strict";

    var Tasks = new TasksController();

    return {

        init: function () {

            var self = this;

            this.captureEvents();

            Tasks.fetch({
                success: function () {
                    var list = Tasks.render($('#taks')); 
                    $('#tasks-container').find('*').remove();
                    $('#tasks-container').append(list);
                    $('#tasks-container').trigger('create');
                }
            });

        },

        captureEvents: function () {

            var self = this;
          
            $('#cmd-clear').click(function (ev) {
                Tasks.clearTasks();
            });

            $('#cmd-new').click(function (ev) {
                var page = $('#new-task');

                page.find('input').each(function () {
                    $(this).val('');
                });

                $.mobile.changePage('#new-task');

            });

            $('#cmd-add').click(function (ev) {
                var titulo = $('#input-title').val();
        
                Tasks.create({
                    titulo: titulo
                });

                $.mobile.changePage('#main');

            });

        }

    }

});
