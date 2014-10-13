'use strict';
angular
  .module('eSpa')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/login', {
        templateUrl: 'views/pre-login/login.html',
        controller: 'eSpaLoginCtrl'
      })
      .when('/dashboard', {
        templateUrl :"views/home/dashboard.html",
        controller : "eSpaHomeCtrl"
      })
      .when('/pos', {
        templateUrl :"views/pos/pos.html",
        controller : "eSpaPosCtrl"
      })
      .when('/manage/staff', {
        templateUrl :"views/staff/staff.html",
        controller : "eSpaStaffCtrl"
      })
      .when('/staff/new', {
        templateUrl :"views/staff/new-staff.html",
        controller : "eSpaNewStaffCtrl"
      })
      .otherwise({
        redirectTo: '/dashboard'
      });
  })