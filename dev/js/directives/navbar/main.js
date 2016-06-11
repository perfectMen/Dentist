angular
.module('dentist')
.directive('navbar', function(){
	return {
		replace: true,
		controller: 'navbarController as navbar',
		templateUrl: 'js/directives/navbar/tpl.html'
	}
})