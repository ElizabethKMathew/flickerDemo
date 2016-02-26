var app = angular.module('flickerApp', ['ui.router']);
app.config(function($stateProvider, $urlRouterProvider) 
            {
            	$urlRouterProvider.otherwise('/dashboard')
                $stateProvider.state('dashboard', {
                	url:'/dashboard',
                    templateUrl: 'views/dashboard.html',
                    controller: 'dashboardController'
                }).state('user',{
                	url:'/user',
                    templateUrl: 'views/users.html',
                    resolve:{
                    	jsonFetchService:'jsonFetchService'
                    },
                    controller: 'userController'

                }).state('users',{
                	url:'/user/:uid',
                    templateUrl: 'views/user-details.html',
                    resolve:{
                    	jsonFetchService:'jsonFetchService'
                    },
                    controller: 'userDetailsController'
                }).state('images',{
                	url:'/user/:uid/image/:id',
                    templateUrl: 'views/img-details.html',
                    resolve:{
                    	jsonFetchService:'jsonFetchService'
                    },
                    controller: 'userDetailsController'
                })
;
                
          });




  