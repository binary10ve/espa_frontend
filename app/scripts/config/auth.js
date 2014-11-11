'use strict';
angular
  .module('eSpa')
  .config(['AuthProvider', function(AuthProvider) {
    AuthProvider.loginPath('/api/sessions.json');

  }]);