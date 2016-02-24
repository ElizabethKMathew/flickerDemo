app.controller('userDetailsController',['$scope','$http',function($scope,$http){
	$http({
  	method : 'GET',
  	url:"assets/json/users.json"
  }).then(function success(response) {
      $scope.userImages = response.data.users;
      
});

}]);
