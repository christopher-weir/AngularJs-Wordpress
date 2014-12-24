'use strict';

angular.module('page')
    .controller('PageCtrl', [
        '$scope',
        '$state',
        function ( $scope, $state ) {
            console.log('page loaded');

            console.log('$state.current.name: ' + $state.current.name + '\n');

            console.log($state);
        }
    ]);


