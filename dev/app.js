angular
.module(
	'dentist', 
	['ngRoute']
)
.config(config)

function config($routeProvider, $locationProvider) {

    $routeProvider
    .when('/', {
        templateUrl: '../views/home/index.html'
    })
    .when('/login', {
        templateUrl: '../views/login/index.html'
    })
    .when('/contact', {
        templateUrl: '../views/contact/index.html'
    })
    .otherwise({
    	redirectTo:'/'
    })
} 

config.$inject = ['$routeProvider', '$locationProvider']