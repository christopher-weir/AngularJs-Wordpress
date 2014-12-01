'use strict';

angular.module('core')
    .controller('PostsCtrl', [
        '$scope',
        '$Posts',
        function ( $scope, $Posts ) {

            $Posts.getPosts( function(_data){
                console.log(_data);
            });


        }
    ]);