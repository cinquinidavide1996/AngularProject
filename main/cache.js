var cache = undefined;
app.run(function ($cacheFactory) {
    cache = $cacheFactory('dataCache', {
        capacity: 10
    });
});