weatherApp.controller('indexCtrl', function($scope, jsonSer){

    // calling for loading and passing the cities info from the json files:    
    jsonSer.load();
    $scope.cities=jsonSer.citiesArray;
    
        
    //getting the user cityInput and publishing its details:
    $scope.showCityDetails= function(cityEntered){
        if (!cityEntered){
            $scope.isCity=false;
        }else{
        //locating the city in the citiesArray:
        compareCities(cityEntered);
        changeCityName();
        setCityLink();
        setCityTemp();
        setCityImage();
        setCityHumid();
        setCityWind();
        $scope.cityInput='';
                
        }
    }    
    

    function compareCities(cityEntered){

        $scope.locatedCity=$scope.cities.find(function(city){
            
            city.city=city.city.toLowerCase();
            cityEntered=cityEntered.toLowerCase();
            return city.city == cityEntered;
        });
    }


    // functions for adjusting the locatedCity details for publidshing:
    // uppercase first letter of city name:
    function changeCityName(){
        $scope.isCity=true;
        $scope.locatedCity.city=$scope.locatedCity.city.charAt(0).toUpperCase()+$scope.locatedCity.city.substr(1);
        
    }

    //setting city link:
    function setCityLink(){
      
        $scope.locatedCityLink=$scope.locatedCity.link;
    }

    //setting city temperature:
    function setCityTemp(){
       
        $scope.locatedCityTemp=$scope.locatedCity.temp;
    }


    //setting city image:
    function setCityImage(){
      
        $scope.locatedCityImage=$scope.locatedCity.img;
    }

    //setting city humiditiy:
    function setCityHumid(){
       
        $scope.locatedCityHumid=$scope.locatedCity.humidity;
    }
    
    //setting city wind:
    function setCityWind(){
        if($scope.locatedCity.wind){
        var windIndex=$scope.locatedCity.wind.search('Wind');
        $scope.locatedCityWind=$scope.locatedCity.wind.slice(windIndex);
        }else{
            $scope.locatedCityWind='';
        }
    }
});