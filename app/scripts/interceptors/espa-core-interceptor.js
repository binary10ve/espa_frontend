angular.module('eSpa')
  .config([
    '$httpProvider',
    function ($httpProvider) {
      var sessionInterceptor = [
        '$q',
        '$location',
        function ($q, $location) {     
          return {
            'responseError': function (response) {
              var status = response.status;
              console.log("status",status)
              if (status == 401) {
              // $location.path('/login');
              }
              return $q.reject(response);
            }
        }
    }];

    $httpProvider.interceptors.push(sessionInterceptor);

  }]);