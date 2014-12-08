'use strict';

angular.module('core')
    .controller('AboutCtrl', [
        '$scope',
        '$ilnCore',
        function ( $scope, $ilnCore ) {
            console.log('about loaded');
        }
    ]);


