angular
.module('dentist')
.directive('login', function () {
	return {
		replace: true,
		controller: 'loginController as login',
		templateUrl: 'js/directives/login/tpl.html'
	}
})