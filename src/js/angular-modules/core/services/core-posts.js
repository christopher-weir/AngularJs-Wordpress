'use strict';

/**
 * @ngdoc service
 * @name core.ilnPosts
 *
 * @description
 * A service to return posts from the wp db
 */
angular.module('core')

.factory('$ilnPosts', [


    '$http',
    '$ilnCore',

    function( $http, $ilnCore ) {

        return  {


            /**
             * @name getCustomPostType
             * @description Get custom post types by slug name
             * @param {string} _slug - The slug name of the custom post type
             * @param {function} _callback - Callback after the posts have been returned
             * @returns {array} _data - The results if success or else the error
             *
             */
            getCustomPostType: function( _slug, _callback ){

                $http({

                    method  : 'GET',
                    url     : $ilnCore.getJsonUrl() + 'posts?type[]=' + _slug

                }).
                success( function( _data ) {
                    _callback( _data );
                }).
                error( function( _data ) {
                    _callback( _data );
                });
            },


            /**
             * @name getPostByCategoryName
             * @description Get posts by the category slug
             * @param {string} _slug - The slug name of the category
             * @param {function} _callback - Callback after the posts have been returned
             * @returns {array} _data - The results if success or else the error
             *
             */
            getPostByCategoryName: function( _slug, _callback ){

                $http({

                    method  : 'GET',
                    url     : $ilnCore.getJsonUrl() + 'posts?filter[category_name]=' + _slug

                }).
                success( function( _data ) {
                    _callback( _data );
                }).
                error( function( _data ) {
                    _callback( _data );
                });
            },


            /**
             * @name getPostById
             * @description Get a post by its id
             * @param {string} _id - The ID of the post needs to be a string.
             * @param {function} _callback - Callback after the posts have been returned
             * @returns {array} _data - The results if success or else the error
             *
             */
            getPostById: function( _id, _callback ){

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
             * @name getPosts
             * @description Get all posts
             * @param {function} _callback - Callback after the posts have been returned
             * @returns {array} _data - The results if success or else the error
             *
             */
            getPosts: function( _callback ){

                $http({

                    method  : 'GET',
                    url     : $ilnCore.getJsonUrl() + 'posts'

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
