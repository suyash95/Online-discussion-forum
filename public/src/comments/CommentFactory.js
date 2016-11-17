(function() {
    'use strict';

    angular.module('miniRvce')
        .factory('Comment', function($http, $window) {
            return{
                getComments: function (a_id) {
                    return $http.get('/comments/?ans_id=' + a_id);
                },
                postComm: function (data) {
                    return $http.post('/comments',data);
                }

            }

        });
})();