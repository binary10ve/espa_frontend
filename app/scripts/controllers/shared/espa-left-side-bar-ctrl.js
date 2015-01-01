angular.module('eSpa')
.controller('eSpaLeftSideBarCtrl',['$rootScope','$location',function($rootScope, $location){

 console.log($location.path())
  $rootScope.preLogin = $location.path() === '/login'


}])