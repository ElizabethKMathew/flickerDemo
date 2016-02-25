var app = angular.module('flickerApp', ['ngRoute']);
app.config(function($routeProvider) 
            {
                $routeProvider.when('/dashboard', {
                    templateUrl: 'views/dashboard.html',
                    controller: 'dashboardController'
                }).when('/user',{
                    templateUrl: 'views/users.html',
                    controller: 'userController'
                }).when('/user/:uid',{
                    templateUrl: 'views/user-details.html',
                    controller: 'userDetailsController'
                }).when('/user/:uid/image/:id',{
                    templateUrl: 'views/img-details.html',
                    controller: 'userDetailsController'
                });
                
          });