'use strict';

angular.module('posts')
    .controller('PostsCtrl', [
        '$scope',
        '$Posts',
        function ( $scope, $Posts ) {

            $Posts.getPosts( function(_data){
                console.log(_data);
            });


        }
    ]);