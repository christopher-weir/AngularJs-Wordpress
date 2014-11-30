'use strict';

// Setting up route
angular.module('core').config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {

        // Redirect to home view when route not found
        $urlRouterProvider.otherwise('/');
        var isUserLoggedIn = window.isUserLoggedIn;
        // Home state routing
        $stateProvider.
        state('home', {
            url: '/',
            templateUrl: function (){
                if( isUserLoggedIn ){

                    return 'modules/feed/views/feed.html';
                }else{
                    return 'modules/core/views/home.client.view.html';
                }
            }
        });
    }
]);
