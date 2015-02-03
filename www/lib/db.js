define([
    'backbone',
    'IndexedDBShim',
    'backbone-indexeddb'],
function () {

    return {
        id: "TODOExampleDB",
        description: "TODO Example DataBase",                                                                                                                               
        migrations : [                                                                                                                                                 
        {                                                                                                                                                          
            version: 1,                                                                                                                                            

            migrate: function(transaction, next) {

                var tasks = transaction.db.createObjectStore("Tasks");
                var options = transaction.db.createObjectStore("Options");

                options.createIndex('byName', 'name', {unique: true});

                next();

            }
        }
        ]
    };

});
