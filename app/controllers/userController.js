app.controller('userController', ['$scope', '$http', 'jsonFetchService', function($scope, $http, jsonFetchService) {
     var dataFetch = jsonFetchService.fetchAllData();
      dataFetch.success(function(response) {
        $scope.userData = response.users;
        
    });
}]);