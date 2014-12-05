'use strict';

angular.module('posts')
    .controller('HomepagePostsCtrl', [
        '$scope',
        '$Posts',
        '$Pages',
        function ( $scope, $Posts, $Pages ) {

            $scope.posts = null;

            $Posts.getPostByCategoryName( 'awef-awef-aawe-f', function( _data ){
                console.log(_data);
                $scope.posts = _data;
            });

        }
    ]);  