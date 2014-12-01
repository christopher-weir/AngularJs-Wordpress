'use strict';

angular.module('posts')
    .controller('SiteCtrl', [
        '$scope',
        '$Core',
        function ( $scope, $Core ) {
            console.log('loaded');
            console.log('$Core.getJsonUrl(): ' + $Core.getJsonUrl() + '\n');
        }
    ]);


