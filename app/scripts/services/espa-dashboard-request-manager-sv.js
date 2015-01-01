angular.module('eSpa')
.service('eSpaDashboardRequestManagerSV',['GLOBAL_CONFIG','$http',function(config,$http){


      var API =  config.END_URL + config.API

      this.getDashboardData   = function(){

       return  $http.get(API + '/home.json') 
      }


}]);