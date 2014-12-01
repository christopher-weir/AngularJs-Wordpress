'use strict';

angular.module('posts')

.factory('$Posts', [


    '$http',
    '$Core',

    function( $http, $Core ) {

        return  {

            getPostById: function( _id, callback ){

                $http({

                    method  : 'GET',
                    url     : $Core.getJsonUrl() + 'posts/' + String( _id )

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
                    url     : $Core.getJsonUrl() + 'posts'

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
