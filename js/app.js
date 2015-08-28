var app = angular.module('myApp', ['ngRoute']);

app.config(function($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'partials/home.html',
        controller: 'HomeController',
        controller:  'zenController'

      })
      .when('/resume', {
        templateUrl: 'partials/resume.html',
        controller: 'resumeController'
      })
      .when('/projects', {
        templateUrl: 'partials/projects.html',
        controller: 'projectsController'
      })
      .when('/bio', {
        templateUrl: 'partials/bio.html',
        controller: 'bioController'
      })
      .when('/add/:num1/:num2' ,{
        templateUrl: 'partials/add.html',
        controller: 'addController'
      })
      .when('/addquery/' ,{
        templateUrl: 'partials/query.html',
        controller: 'queryController'
      })


    $locationProvider.html5Mode(true);

});
