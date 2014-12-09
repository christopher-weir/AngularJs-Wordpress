'use strict';

/**
 * @ngdoc service
 * @name core.ilnTaxonomies
 *
 * @description
 * A service to return the wordpress taxonomies being used
 */
angular.module('core')

.factory('$ilnTaxonomies', [


    '$http',
    '$ilnCore',

    function( $http, $ilnCore ) {

        return  {


            /**
             * @name getCategories
             * @description Get all categories being used by the site
             * @param {function} _callback - Callback
             * @returns {array} _data - The results if success or else the error
             *
             */
            getCategories: function( _callback ){

                $http({

                    method  : 'GET',
                    url     : $ilnCore.getJsonUrl() + 'taxonomies/category/terms'

                }).
                success( function( _data ) {
                    _callback( _data );
                }).
                error( function( _data ) {
                    _callback( _data );
                });
            },


            /**
             * @name getTaxonomyTerms
             * @description Get all terms of a specific taxonomy
             * @param {string} _taxonomy - The taxonomy to call
             * @param {function} _callback - Callback
             * @returns {array} _data - The results if success or else the error
             *
             */
            getTaxonomyTerms: function( _taxonomy, _callback ){

                $http({

                    method  : 'GET',
                    url     : $ilnCore.getJsonUrl() + 'taxonomies/' + _taxonomy + '/terms'

                }).
                success( function( _data ) {
                    _callback( _data );
                }).
                error( function( _data ) {
                    _callback( _data );
                });
            },


            /**
             * @name getTaxonomy
             * @description Get a specific taxonomy
             * @param {string} _taxonomy - The taxonomy to call
             * @param {function} _callback - Callback
             * @returns {array} _data - The results if success or else the error
             *
             */
            getTaxonomy: function( _taxonomy, _callback ){

                $http({

                    method  : 'GET',
                    url     : $ilnCore.getJsonUrl() + 'taxonomies/' + _taxonomy

                }).
                success( function( _data ) {
                    _callback( _data );
                }).
                error( function( _data ) {
                    _callback( _data );
                });
            },


            /**
             * @name getTaxonomy
             * @description Get all taxonomies being used in the site
             * @param {function} _callback - Callback
             * @returns {array} _data - The results if success or else the error
             *
             */
             getTaxonomies: function( _callback ){

                $http({

                    method  : 'GET',
                    url     : $ilnCore.getJsonUrl() + 'taxonomies'

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
