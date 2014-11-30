'use strict';

angular.module('core')
    .controller('PagesCtrl', [
        '$scope',
        '$Pages',
        function ( $scope, $Pages ) {

            $Pages.getPages( function(_data){
                console.log(_data);
            });

            $Pages.getPageById( 5, function(_data){
                console.log(_data);
            });


        }
    ]);
