'use strict';

angular.module('core')

.factory('$ilnPosts', [


    '$http',
    '$ilnCore',

    function( $http, $ilnCore ) {

        return  {

            getPostByCategoryName: function( _category, callback ){

                $http({

                    method  : 'GET',
                    url     : $ilnCore.getJsonUrl() + 'posts?filter[category_name]=' + _category

                }).
                success(function(data) {
                    callback( data );
                }).
                error(function (data) {
                    callback( data );
                });
            },

            getPostById: function( _id, callback ){

                $http({

                    method  : 'GET',
                    url     : $ilnCore.getJsonUrl() + 'posts/' + String( _id )

                }).
                success(function(data) {
                    callback( data );
                }).
                error(function (data) {
                    callback( data );
                });
            },

            getPosts: function( callback ){

                $http({

                    method  : 'GET',
                    url     : $ilnCore.getJsonUrl() + 'posts'

                }).
                success(function(data) {
                    callback( data );
                }).
                error(function (data) {
                    callback( data );
                });
            }

        };
    }
])


;
