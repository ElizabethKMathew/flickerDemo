app.controller('userDetailsController', ['$scope', '$http', '$stateParams', 'jsonFetchService', function($scope, $http, $stateParams, jsonFetchService) {
    var params = jsonFetchService.params;
    var dataFetch = jsonFetchService.fetchAllData();
    $scope.userId = params.uid;
    $scope.imageId = params.id;
        dataFetch.success(function(response) {
        $scope.userData = response.users;
        $scope.userName = $scope.userData[$scope.userId].uname;
        $scope.userImages = $scope.userData[$scope.userId].images;
        $scope.selectedImage = $scope.userImages[$scope.imageId];
             
    });

}]);