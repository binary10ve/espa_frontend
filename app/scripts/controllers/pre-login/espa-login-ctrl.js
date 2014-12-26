angular.module('eSpa')
.controller('eSpaLoginCtrl',['$rootScope','$scope','$http','$location','Auth',function($rootScope, $scope, $http, $location ,Auth){




		$rootScope.preLogin =  true;

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