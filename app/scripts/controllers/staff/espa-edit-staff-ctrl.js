angular.module('eSpa')
  .controller('eSpaEditStaffCtrl',['$scope','$location','$routeParams','eSpaStaffRequestManagerSV',function($scope,$location, $routeParams, StaffModel){

       StaffModel.findStaff($routeParams.id).then(function(response){
         $scope.staff = response.data.staff
       });


      $scope.updateStaff = function(){
        StaffModel.updateStaff($scope.staff).then(function(response){
          $location.path('/manage/staff')

        });
      }



  }]);