angular.module('eSpa')
  .controller('eSpaPosCtrl',['$scope','$http',function($scope, $http){


    $scope.check = {
      a: false,
      b: true,
      c: false
    };

    $scope.radio = {
      value: "b"
    };

    $scope.assign_radio_values = function(e) {
      $scope.radio.value = "a";
    };


  }]);