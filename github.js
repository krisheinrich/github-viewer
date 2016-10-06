(function() {
  
  var github = function($http) {
    
    /* Each of the exposed methods returns a promise which
      provides an API payload as the first argument to any
      function called via .then() */
    
    var getUser = function(username) {
      return $http.get("https://api.github.com/users/" + username)
                  .then(function(res) {
                    return res.data;
                  });
    };
    
    var getRepos = function(user) {
      return $http.get(user.repos_url)
                  .then(function(res) {
                    return res.data;
                  });
    };
    
    var getRepoDetails = function(username, reponame) {
      var repo;
      var repoUrl = "https://api.github.com/repos/" + username + "/" + reponame;
      
      return $http.get(repoUrl)
                  .then(function(res) {
                    repo = res.data;
                    return $http.get(repoUrl + '/contributors');
                  })
                  .then(function(res) {
                    repo.contributors = res.data;
                    return repo;
                  });
    };
    
    return {
      getUser: getUser,
      getRepos: getRepos,
      getRepoDetails: getRepoDetails
    };
    
  };
  
  
  var module = angular.module("githubViewer");
  module.factory("github", github);
  
  
})();