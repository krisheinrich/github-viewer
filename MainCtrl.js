// Code goes here

(function() {

  var app = angular.module("githubExplorer");

  var MainCtrl = function($scope, $location) {


    // Search for username by passing as a route parameter
    $scope.search = function(username) {
      $location.path("/user/" + username);
    };

    // Initialize model data
    $scope.username = "angular";

  };


  app.controller("MainCtrl", MainCtrl);

})();
