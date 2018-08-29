//creating a service for parsing the json files:

weatherApp.factory('jsonSer', function($http, $q){

    // array of cities data:
    var citiesArray=[];
    //var wasEverLoaded=false;
    
    
    // uploading cities with a $q load function:
    var load =function(){

        var async = $q.defer();
        // Checking if the cities array was ever loaded:
        // if (wasEverLoaded) {
        //     // Immediatly resolving the promise since cities already available
        //     async.resolve();
        // } else {}
        loadJsonFile("results.json");
        loadJsonFile("results2.json");
        loadJsonFile("results3.json");

        //wasEverLoaded=true; 
        async.resolve();

        
        return async.promise;   
    };


    //function for loading the external json file into citiesArray:
    function loadJsonFile(jsonFile){
        $http.get(jsonFile).then(function(response){
            //onsuccess:
            // console.log(response);
            for(var i=0; i<response.data.length; i++){
                let city = response.data[i];
                
                citiesArray.push((city)); 
                
                  
                }          
                                   
            
            },
                // onfail:
            function(response){
                console.log("error");
                async.reject();
            }
        );

    }
    // the service object access:
   return {
       load:load,
       citiesArray:citiesArray
   }

});