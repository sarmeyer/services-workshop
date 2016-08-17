var app = angular.module('servicesWorkshop', ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: '/templates/messages.html',
        controller: 'MessagesController'
      })
      .when('/new', {
        templateUrl: '/templates/new_message.html',
        controller: 'PostMessageController'
      })
});
