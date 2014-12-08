'use strict';

// Setting up route
angular.module('pages').config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {

        // Redirect to home view when route not found
        $urlRouterProvider.otherwise('/');
        
        
        // Home state routing
        $stateProvider.
        state('about', {
            url: '/about',
            controller: 'ProfileCtrl',
            templateUrl: 'pages/views/about.page.html'
        })

        ;
    }
]);