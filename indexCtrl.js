weatherApp.controller('indexCtrl', function($scope, jsonSer){

    // calling for loading and passing the cities info from the json files:    
    jsonSer.load();
    $scope.cities=jsonSer.citiesArray;
    var locatedCity;
    $scope.isWrong=false;
    $scope.isExamp=false;
    $scope.isDis=false;

    console.log($scope.cities)
    // 2 cities input:
    //first city: 
        $scope.show = function(){
            $scope.isExamp=true;
            $scope.isDis=true;
            $scope.berlin = $scope.cities.find(function(city){
                    
                return city.city == "Berlin";        
            });
            
            $scope.chicago = $scope.cities.find(function(city){
                    
                return city.city == "Chicago";        
            });
            //console.log($scope.berlin)
        }
       
        
    //getting the user cityInput and publishing its details:
    $scope.showCityDetails= function(cityEntered){
        if (!cityEntered){
            $scope.isCity=false;
        }else{
        //locating the city in the citiesArray:
        compareCities(cityEntered)        
        $scope.userCity=locatedCity;
        $scope.cityInput='';        
        }
    }    
    

    function compareCities(cityEntered){

        locatedCity=$scope.cities.find(function(city){
            
            city.city=city.city.toLowerCase();
            cityEntered=cityEntered.toLowerCase();
            return city.city == cityEntered;
        });
        if(locatedCity==undefined){            
            $scope.isCity=false; 
            $scope.isWrong=true;           
            return locatedCity;
        }else{
            $scope.isCity=true;
            $scope.isWrong=false;
            locatedCity.city=locatedCity.city.charAt(0).toUpperCase()+locatedCity.city.substr(1);
            return locatedCity;
        }
    }


    
});