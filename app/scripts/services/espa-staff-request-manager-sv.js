angular.module('eSpa')
.service('eSpaStaffRequestManagerSV',['API','$http',function(API,$http){
	    this.getStaff = function(page){
       return  $http.get(API + '/staffs.json',{params : { page : page}})
      }

      this.saveStaff = function(staff){
        return  $http.post(API + '/staffs.json', {user : staff})
      }

      this.updateStaff = function(){

      }

}]);