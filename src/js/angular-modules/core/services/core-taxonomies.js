'use strict';

angular.module('core')

.factory('$ilnTaxonomies', [


    '$http',
    '$ilnCore',

    function( $http, $ilnCore ) {

        return  {

            getCategories: function( callback ){

                $http({

                    method  : 'GET',
                    url     : $ilnCore.getJsonUrl() + 'taxonomies/category/terms'

                }).
                success(function(data) {
                    callback( data );
                }).
                error(function (data) {
                    callback( data );
                });
            },

            getTaxonomyTerms: function( _taxonomy, callback ){

                $http({

                    method  : 'GET',
                    url     : $ilnCore.getJsonUrl() + 'taxonomies/' + _taxonomy + '/terms'

                }).
                success(function(data) {
                    callback( data );
                }).
                error(function (data) {
                    callback( data );
                });
            },

            getTaxonomy: function( _taxonomy, callback ){

                $http({

                    method  : 'GET',
                    url     : $ilnCore.getJsonUrl() + 'taxonomies/' + _taxonomy

                }).
                success(function(data) {
                    callback( data );
                }).
                error(function (data) {
                    callback( data );
                });
            },

            getTaxonomies: function( callback ){

                $http({

                    method  : 'GET',
                    url     : $ilnCore.getJsonUrl() + 'taxonomies'

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
