'use strict';

// Setting up route
angular.module('page').config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {

        // Redirect to home view when route not found
        $urlRouterProvider.otherwise('/');


        // Home state routing
        $stateProvider.
        state('page', {
            url: '/page/:id',
            controller: 'PageCtrl',
            templateUrl: 'about/views/page.html'
        })

        ;
    }
]);