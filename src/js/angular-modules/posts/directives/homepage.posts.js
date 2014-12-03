'use strict';

angular.module('posts')
    .directive('ilnPostsHomepage', function() {
        return {
            restrict: 'E',
            templateUrl: 'posts/views/homepage.posts.html'
        };
    });
