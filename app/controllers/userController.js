app.controller('userController',['$scope','$http','$routeParams',function($scope,$http,$routeParams){
$scope.params = $routeParams;
$scope.userId = $scope.params.uid;
$http({
  	method : 'GET',
  	url:"assets/json/users.json"
  }).then(function success(response) {
      $scope.userData = response.data.users;
      $scope.userName = $scope.userData[$scope.userId].uname;
      $scope.userImages = $scope.userData[$scope.userId].images;
     
     });
}]);