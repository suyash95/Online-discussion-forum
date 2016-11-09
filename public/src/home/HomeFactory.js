(function () {
    'use strict';
    angular.module('miniRvce').
        factory('Home',['$http', '$window', function ($http, $window) {

            return{
                getQuestions : function() {
                    return $http.get('/question/all');
                },
                getTags: function() {
                    return $http.get('/tags');
                }
            };
        }]);
})();