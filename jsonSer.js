//creating a service for parsing the json files:

weatherApp.factory('jsonSer', function($http, $q){

    //constructor of city objects:
    var City = function(cityObj){
        this.city = changeCityName(cityObj);
        this.link = setCityLink(cityObj);
        this.temp = setCityTemp(cityObj);
        this.img = setCityImage(cityObj);
        this.humidity = setCityHumid(cityObj);
        this.wind = setCityWind(cityObj);
    }
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
                
                citiesArray.push(new City(city)); 
                
                  
                }          
                                   
            
            },
                // onfail:
            function(response){
                console.log("error");
                async.reject();
            }
        );
        
    }
    // console.log(citiesArray);
    


   // functions for adjusting the locatedCity details for publidshing:
    // uppercase first letter of city name:
    function changeCityName(cityObj){
       
        cityObj.city=cityObj.city.charAt(0).toUpperCase()+cityObj.city.substr(1);
        return cityObj.city;
    }

    //setting city link:
    function setCityLink(cityObj){
      
        return cityObj.link;
    }

    //setting city temperature:
    function setCityTemp(cityObj){
       
        return cityObj.temp;
    }


    //setting city image:
    function setCityImage(cityObj){
      
        return cityObj.img;
    }

    //setting city humiditiy:
    function setCityHumid(cityObj){
       
        return cityObj.humidity;
    }
    
    //setting city wind:
    function setCityWind(cityObj){
        if(cityObj.wind){
        var windIndex=cityObj.wind.search('Wind');
        locatedCityWind=cityObj.wind.slice(windIndex);
        return locatedCityWind;
        }else{
            return locatedCityWind='';
        }
    }



    return {
        load:load,
        citiesArray:citiesArray
    }
});