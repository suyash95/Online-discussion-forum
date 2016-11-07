(function () {
    'use strict';
    angular.module('miniRvce').
        factory('Home',['$http', '$window', function ($http, $window) {

            return{
                getQuestions : function() {
                    return $http.get('/question/?tag_id=1');
                },
                getTags: function() {
                    return $http.get('/tags');
                }
            };
        }]);
})();