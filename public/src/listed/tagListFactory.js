(function () {
    'use strict';
    angular.module('miniRvce').
        factory('tagList',['$http', '$window', function ($http, $window) {

            return{
                getQuestions : function(t_id) {
                    return $http.get('/question/?tag_id='+t_id);
                }
            };
        }]);
})();