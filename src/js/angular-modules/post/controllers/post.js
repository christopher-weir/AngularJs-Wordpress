'use strict';

angular.module('post')
    .controller('PostCtrl', [
        '$scope',
        '$state',
        function ( $scope, $state ) {
            console.log('post loaded');

            console.log('$state.current.name: ' + $state.current.name + '\n');

            console.log($state);
        }
    ]);


