'use strict';

angular.module('core')

.factory('$ilnPages', [


    '$http',
    '$ilnCore',

    function( $http, $ilnCore ) {

        return  {

            getPageById: function( _id, callback ){

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

            getPages: function( callback ){

                $http({

                    method  : 'GET',
                    url     : $ilnCore.getJsonUrl() + 'posts?type[]=page'

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
