'use strict';

// Setting up route
angular.module('posts').config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {

        // Redirect to home view when route not found
        $urlRouterProvider.otherwise('/');
        var isUserLoggedIn = window.isUserLoggedIn;
        // Home state routing
        $stateProvider.
        state('post', {
            url: '/post/:id',
            controller: 'UserCtrl',
            templateUrl: 'posts/views/single.post.page.html'
        });
    }
]);
