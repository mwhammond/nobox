

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



function findById(source, id) {
return source.filter(function( obj ) {
    // coerce both obj.id and id to numbers 
    // for val & type comparison
    return +obj.id === +id;
})[ 0 ];
}


//{ 'get':    {method:'GET'},
//  'save':   {method:'POST'},
//  'query':  {method:'GET', isArray:true},
//  'remove': {method:'DELETE'},
//  'delete': {method:'DELETE'} };