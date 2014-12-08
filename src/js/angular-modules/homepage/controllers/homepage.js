'use strict';

angular.module('home')
    .controller('HomeCtrl', [
        '$scope',
        '$sce',
        '$ilnPosts',
        function ( $scope, $sce, $ilnPosts ) {

            $scope.posts = null;
            
            $scope.to_trusted = function(html_code) {
                return $sce.trustAsHtml(html_code);
            }

            $ilnPosts.getPosts(function( _data ){
                $scope.posts = _data;
            });
            
        }
    ]);


