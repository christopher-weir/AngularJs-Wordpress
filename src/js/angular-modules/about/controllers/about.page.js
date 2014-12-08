'use strict';

angular.module('about')
    .controller('AboutCtrl', [
        '$scope',
        '$ilnCore',
        function ( $scope, $ilnCore ) {
            console.log('about loaded');
        }
    ]);


