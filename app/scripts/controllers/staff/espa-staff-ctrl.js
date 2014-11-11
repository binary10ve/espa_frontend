angular.module('eSpa')
  .controller('eSpaStaffCtrl',['$scope','eSpaStaffRequestManagerSV',function($scope, StaffModel){


    var counter = 1,
    perPage = 5;

    /*
     You must specify a callback function to handle click events from the
     paginator.
     */
    $scope.nextPage = function(){
      fetchPage(counter);
    };

    $scope.staffs = []





    function fetchPage(page){
      StaffModel.getStaff(page).then(function(response){
          if(response.data.staffs.length){
            response.data.staffs.map(function(staff){
              $scope.staffs.push(staff)
            })

          }
          if(response.data.staffs.length < perPage) {
            $scope.hideShowMoreButton = true
          }

          counter += 1 ;
        },
        function(){
          alert('error')
        })
    }

    fetchPage(1)




  }]);