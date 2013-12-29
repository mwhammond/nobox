

App.factory('ProjectItems', function($resource) {
    return $resource(
        '/projects/:id',  // URL template
        {id: '@id'},                    // default values
        {
            create: {method: 'POST'},
            update: {method:'PUT', params: {id: '@id'}}
        }
    );
});



App.factory('MessageItems', function($resource) {
    return $resource(
        '/messages/:id',  // URL template
        {id: '@id'},                    // default values
        {
            create: {method: 'POST'},
            update: {method:'PUT', params: {id: '@id'}}
        }
    );
});


// PAGE SWITCH



//{ 'get':    {method:'GET'},
//  'save':   {method:'POST'},
//  'query':  {method:'GET', isArray:true},
//  'remove': {method:'DELETE'},
//  'delete': {method:'DELETE'} };