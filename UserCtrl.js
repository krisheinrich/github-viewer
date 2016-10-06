(function() {
  
  var app = angular.module("githubViewer");
  
  var UserCtrl = function($scope, $routeParams, github) {
    
    var onUserComplete, // cb for fetching GitHub user data
        onRepos,        // cb for fetching data from a certain repo
        onError;        // cb for handling errors in HTTP requests
    
    // First retrieve user data from GitHub API
    onUserComplete = function(data) {
      $scope.user = data;
      github.getRepos($scope.user)
            .then(onRepos, onError);
    };
    
    // Then grab repo data from the user's "repo_url" field
    onRepos = function(data) {
      $scope.repos = data;
    };
    
    onError = function(reason) {
      $scope.error = "Could not fetch the data";
    };
    

    // Get searched username from URL (route parameter)
    $scope.username = $routeParams.username;
    $scope.repoSortOrder = "-stargazer_count";
    github.getUser($scope.username).then(onUserComplete, onError);
    
  }; 
  
  
  app.controller("UserCtrl", UserCtrl);
  
})();
