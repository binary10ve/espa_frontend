angular.module('eSpa')
  .controller('eSpaNewStaffCtrl',['$scope','$location','eSpaStaffRequestManagerSV',function($scope,$location, StaffModel){



    $scope.createStaff = function(){



        StaffModel.saveStaff($scope.staff).then(function(){
          $location.path('/manage/staff')
        }, function(){
          alert('error')
        })
    }



  }]);