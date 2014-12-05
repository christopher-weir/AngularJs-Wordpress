'use strict';

angular.module('pages')

.factory('$Pages', [


    '$http',
    '$Core',

    function( $http, $Core ) {

        return  {

            getPageById: function( _id, callback ){

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

            getPages: function( callback ){

                $http({

                    method  : 'GET',
                    url     : $Core.getJsonUrl() + 'posts?type[]=page'

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
