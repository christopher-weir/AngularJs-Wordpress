'use strict';

// Setting up route
angular.module('post').config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {

        // Redirect to home view when route not found
        $urlRouterProvider.otherwise('/');


        // Home state routing
        $stateProvider.
        state('post', {
            url: '/post/:id',
            controller: 'PostCtrl',
            templateUrl: 'post/views/post.html'
        })

        ;
    }
]);