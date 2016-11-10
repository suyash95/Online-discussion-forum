(function() {
    'use strict';

    angular.module('miniRvce')
        .factory('Question', function($http, $window) {
            return{
                getAnswers: function (q_id) {
                    return $http.get('/answer/?id=' + q_id);
                },
                getCurDet: function (data) {
                    return $http.post('/question/qid',data);
                },
                postAns: function (data) {
                    return $http.post('/answer',data);
                }
            }

        });
})();