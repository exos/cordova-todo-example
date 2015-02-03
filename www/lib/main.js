
requirejs.config({

    baseUrl: 'lib/',

    paths: {
        jquery: './vendor/jquery/jquery.min',
        jqm: './vendor/jquery-mobile-bower/js/jquery.mobile-1.4.2.min',
        underscore: './vendor/underscore/underscore',
        text: './vendor/requirejs-text/text',
        backbone: './vendor/backbone/backbone',
        'backbone-indexeddb': './vendor/indexeddb-backbonejs-adapter/backbone-indexeddb',
        IndexedDBShim: './vendor/IndexedDBShim/dist/IndexedDBShim.min'
    }

});


require(['app', 'jquery', 'jqm'], 
function (App, $){
    document.addEventListener("deviceready",function () {
        App.init();
    }, false);
});
