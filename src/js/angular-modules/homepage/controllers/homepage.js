'use strict';

angular.module('home')
    .controller('HomeCtrl', [
        '$scope',
        '$sce',
        '$ilnWpPosts',
        '$ilnWpTaxonomies',
        '$ilnWpPages',
        function ( $scope, $sce, $ilnWpPosts, $ilnWpTaxonomies, $ilnWpPages ) {

            $scope.posts = null;

            $scope.to_trusted = function(html_code) {
                return $sce.trustAsHtml(html_code);
            }

            $ilnWpPosts.getPosts(function( _data ){
                console.log(_data);
                $scope.posts = _data;
            });

            $ilnWpPages.getPages(function( _data ){
               console.log( _data );
            });

        }
    ]);


