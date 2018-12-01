var CACHE = undefined;
app.run(function ($cacheFactory) {
    CACHE = $cacheFactory('dataCache', {
        capacity: 10
    });
});