angular.module('eSpa')
.service('eSpaStaffRequestManagerSV',['GLOBAL_CONFIG','$http',function(config,$http){


      var API = config.API + config.END_URL



      this.getDashboardData   = function(){
       return  $http.get(API + '/home.json',{params : { page : page}}) 
      }

	    this.getStaff = function(page){
       return  $http.get(API + '/staffs.json',{params : { page : page}})
      }

      this.saveStaff = function(staff){
        return  $http.post(API + '/staffs.json', {user : staff})
      }

      this.updateStaff = function(staff){
        return  $http.put(API + '/staffs/' + staff.id + '.json', {user : staff})
      }
      this.findStaff = function(id){
      return  $http.get(API +'/staffs/'+ id+'.json')
      }

}]);