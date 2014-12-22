'use strict';

angular.module('home')
    .controller('HomeCtrl', [
        '$scope',
        '$sce',
        '$ilnWpPosts',
        '$ilnWpTaxonomies',
        function ( $scope, $sce, $ilnWpPosts, $ilnWpTaxonomies ) {

            $scope.posts = null;

            $scope.to_trusted = function(html_code) {
                return $sce.trustAsHtml(html_code);
            }

            $ilnWpPosts.getPosts(function( _data ){
                console.log(_data);
                $scope.posts = _data;
            });

            $ilnWpTaxonomies.getCategories(function( _data ){
//                console.log( _data );
            });

        }
    ]);


