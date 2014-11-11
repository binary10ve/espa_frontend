angular.module('eSpa')
.controller('eSpaLoginCtrl',['$scope','$http','$location','Auth',function($scope, $http, $location ,Auth){


		$scope.signIn = function(){

        Auth.login({
        	 email: $scope.email,
            password: $scope.password
        }).then(function(user) {
            $location.path('/dashboard');
        }, function(error) {

        });
		}



}])