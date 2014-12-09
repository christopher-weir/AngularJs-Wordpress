'use strict';

/**
 * @ngdoc service
 * @name core.ilnPages
 *
 * @description
 * A service to return pages from the wp db
 */
angular.module('core')

.factory('$ilnPages', [


    '$http',
    '$ilnCore',

    function( $http, $ilnCore ) {

        return  {


            /**
             * @name getPageById
             * @description Get a page by its ID
             * @param {string} _id - The ID of the page, needs to be a string.
             * @param {function} _callback - Callback after the http request has been returned
             * @returns {array} _data - The results if success or else the error
             *
             */
            getPageById: function( _id, _callback ){

                $http({

                    method  : 'GET',
                    url     : $ilnCore.getJsonUrl() + 'posts/' + _id

                }).
                success( function( _data ) {
                    _callback( _data );
                }).
                error( function( _data ) {
                    _callback( _data );
                });
            },


            /**
             * @name getPages
             * @description Get all pages from the db
             * @param {function} _callback - Callback after the posts have been returned
             * @returns {array} _data - The results if success or else the error
             *
             */
            getPages: function( _callback ){

                $http({

                    method  : 'GET',
                    url     : $ilnCore.getJsonUrl() + 'posts?type[]=page'

                }).
                success( function( _data ) {
                    _callback( _data );
                }).
                error( function( _data ) {
                    _callback( _data );
                });
            }

        };
    }
])


;
