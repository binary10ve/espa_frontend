angular.module('eSpa')
  .controller('eSpaPosCtrl',['$scope','$http',function($scope, $http){


    $scope.client = {first_name : '', last_name : '', email_id : ""}

    $scope.getPhoneNo = function(val) {
      return $http.get('api/v1/clients.json', {
        params: {
          phone: val
        }
      }).then(function(response){

        return response.data.map(function(item){
          return item;
        });
      });
    };


    $scope.onPhoneSelect = function($item){
      $scope.client = $item
    }


    $scope.getEmailId = function(val) {
      return $http.get('api/v1/clients.json', {
        params: {
          email_id: val
        }
      }).then(function(response){

        return response.data.map(function(item){
          return item;
        });
      });
    };


    $scope.onEmailSelect = function($item){
      $scope.client = $item
    }

  }]);