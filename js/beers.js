app.controller('beer', function ($scope, $http) {

    // get the data
    $http.get('https://api.punkapi.com/v2/beers/').then(

        function (response) {
            $scope.beers = response.data;

            console.table($scope.beers);
        }



    );
   
});