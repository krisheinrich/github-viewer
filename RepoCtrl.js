(function() {

  var app = angular.module("githubExplorer");

  var RepoCtrl = function($scope, $routeParams, $log, github) {

    // cb for fetching GitHub repo data
    var onRepo = function(data) {
      $scope.repo = data;
      $log.log($scope.repo);
    };

    // cb for handling errors in HTTP requests
    var onError = function(reason) {
      $scope.error = reason;
    };

    // Get reponame and username from URL (route parameters)
    var username = $routeParams.username;
    var reponame = $routeParams.reponame;

    github.getRepoDetails(username, reponame)
          .then(onRepo, onError);

  };


  app.controller("RepoCtrl", RepoCtrl);

})();
