angular.module('eSpa')
.controller('eSpaHomeCtrl',['$scope','$http',function($scope, $http){


    $scope.eventSources = [];
	$http.get('/api/v1/home.json').
  success(function(data, status, headers, config) {
    // this callback will be called asynchronously
    // when the response is available
  }).
  error(function(data, status, headers, config) {
    // called asynchronously if an error occurs
    // or server returns response with an error status.
  });



}])