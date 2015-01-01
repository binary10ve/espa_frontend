angular.module('eSpa')
.controller('eSpaHeaderCtrl',['$rootScope','$location',function($rootScope, $location){

  $rootScope.preLogin = $location.path() === '/login'



}])