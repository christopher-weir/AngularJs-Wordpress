'use strict';

angular.module('core')
    .controller('SiteCtrl', [
        '$scope',
        '$ilnCore',
        function ( $scope, $ilnCore ) {
            console.log('loaded');
//            console.log('$Core.getJsonUrl(): ' + $Core.getJsonUrl() + '\n');
        }
    ]);


