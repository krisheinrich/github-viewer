// Code goes here

(function() {
  
  var app = angular.module("githubViewer");
  
  var MainCtrl = function($scope, $location) {


    // Search for username by passing as a route parameter
    $scope.search = function(username) {
      $location.path("/user/" + username);
    };
  
    // Initialize model data
    $scope.username = "";
    
  }; 
  
  
  app.controller("MainCtrl", MainCtrl);
  
})();
