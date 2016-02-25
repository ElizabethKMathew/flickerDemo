app.service('jsonFetchService',['$http','$routeParams',function($http,$routeParams){
	var params = $routeParams;
	var fetchAllData = function(){
	var data = $http.get("assets/json/users.json");
	return data;
};

return {
	params : params,
	fetchAllData : fetchAllData
};
}]);