angular.module('app', ['ngRoute']);

angular.module('app').config(function($routeProvider) {
  $routeProvider
    .when('/', {templateUrl:'feed.html'})
    .when('/single-post', {templateUrl:'single-post.html'})
    .when('/show-profile', {templateUrl:'show-profile.html'})
    .when('/edit-profile', {templateUrl:'edit-profile.html'})
    .when('/faq', {templateUrl:'faq.html'})
    .otherwise({redirectTo:'/'});
});