angular.module('eSpa')
.controller('eSpaHomeCtrl',['$rootScope','$scope','$http','eSpaDashboardRequestManagerSV',function($rootScope,$scope, $http, Dashboard){


    $scope.eventSources = [];
    $rootScope.preLogin = false;
	Dashboard.getDashboardData().
  success(function(data, status, headers, config) {
    // this callback will be called asynchronously
    // when the response is available
  }).
  error(function(data, status, headers, config) {
    // called asynchronously if an error occurs
    // or server returns response with an error status.
  });



}])