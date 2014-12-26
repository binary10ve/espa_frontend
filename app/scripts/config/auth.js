'use strict';
angular
  .module('eSpa')
  .config(['AuthProvider','GLOBAL_CONFIG', function(AuthProvider, config) {
  	var API =  config.END_URL + config.API
    AuthProvider.loginPath(API+'sessions.json');

  }]);