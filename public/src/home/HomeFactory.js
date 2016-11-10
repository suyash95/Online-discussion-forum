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
                },
                upd_up: function(id) {
                    return $http.post('/question/up',{q_id : id});
                },
                upd_dw: function(id) {
                    return $http.post('/question/dw', {q_id : id});
                }

            };
        }]);
})();