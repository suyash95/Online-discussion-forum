(function() {
    'use strict';

    angular.module('miniRvce')
        .factory('AddQues', function($http, $window) {
            return{
                postQues: function (data) {
                    return $http.post('/question',data);
                }
            }

        });
})();