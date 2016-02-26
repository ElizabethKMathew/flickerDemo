app.service('jsonFetchService',['$http','$stateParams',function($http,$stateParams){
	var params = $stateParams;
	var fetchAllData = function(){
	var data = $http.get("assets/json/users.json");
	return data;
};

return {
	params : params,
	fetchAllData : fetchAllData
};
}]);