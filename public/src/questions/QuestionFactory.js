(function() {
    'use strict';

    angular.module('miniRvce')
        .factory('Question', function($http, $window) {
            return{
                getAnswers: function (q_id) {
                    return $http.get('/answer/?id=' + q_id);
                },
                getCurDet: function (data) {
                    return $http.get('/question/qid/?q_id='+data);
                },
                postAns: function (data) {
                    return $http.post('/answer',data);
                },
                upd_up: function(id) {
                    return $http.post('/answer/up',{a_id : id});
                },
                upd_dw: function(id) {
                    return $http.post('/answer/dw',{a_id : id});
                }

            }

        });
})();