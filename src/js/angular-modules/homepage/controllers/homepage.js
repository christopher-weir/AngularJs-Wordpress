'use strict';

angular.module('home')
    .controller('HomeCtrl', [
        '$scope',
        '$sce',
        '$ilnPosts',
        '$ilnTaxonomies',
        function ( $scope, $sce, $ilnPosts, $ilnTaxonomies ) {

            $scope.posts = null;

            $scope.to_trusted = function(html_code) {
                return $sce.trustAsHtml(html_code);
            }

            $ilnPosts.getPosts(function( _data ){
                $scope.posts = _data;
            });

            $ilnTaxonomies.getCategories(function( _data ){
                console.log( _data );
            });

        }
    ]);


