
define(['backbone','underscore', 'models/task', 'views/taskslist'],
function (Backbone,_,  TaskModel, View) {
    "use stricts";

    return Backbone.Collection.extend({
        model: TaskModel,

        // Necesario para IndexedDB Addapter:
        database: TaskModel.prototype.database,
        storeName: TaskModel.prototype.storeName,

        clearTasks: function () {
            var tasks = this.where({estado: 'listo'});

            _.each(tasks, function (task) {
                task.destroy({success: function () {
                    task.view.remove();
                }});
            });

            return tasks.length;

        },

        render: function () {
            
            var view = new View({
                collection: this
            });

            return view.render();
        }

    });

});
