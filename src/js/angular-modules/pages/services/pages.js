'use strict';

angular.module('pages')

.factory('$Pages', [


    '$http',

    function( $http ) {

        return  {

            getPageById: function(){
                console.log('page');
            }

        };
    }
])


;
