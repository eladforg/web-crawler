weatherApp.controller('indexCtrl', function($scope, jsonSer){

    // calling for loading and passing the cities info from the json files:    
    jsonSer.load();
    $scope.cities=jsonSer.citiesArray;
    
    
    //getting the user cityInput and comparing to citiesarray:
    $scope.findCityDetails= function(cityEntered){
        
        $scope.locatedCity=$scope.cities.find(function(city){
            city.city=city.city.toLowerCase();
            cityEntered=cityEntered.toLowerCase();
            return city.city == cityEntered;
        });
        
        
    }

    
});