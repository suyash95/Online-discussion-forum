(function () {
    'use strict';
    angular.module('miniRvce')
        .controller('AddQuesController', function($rootScope, $window, $stateParams,AddQues) {
            var self = this;

            self.user = null;
            
            self.user = $window.localStorage.getItem('user_id');
            self.uname = $window.localStorage.getItem('name');
            self.col_id = $window.localStorage.getItem('col_id');

            var ques_data = {};
            self.addQuestion = function () {
                ques_data = {
                    tag_id: self.tag_id,
                    u_id: self.user,
                    col_id: self.col_id,
                    contents: self.new_ques,
                    username: self.uname
                };
                AddQues.postQues(ques_data)
                    .then((function (response) {
                        console.log(response);
                    })).catch(function (reason) {
                        console.log("Error in posting question", reason);
                    });

            };
        });
})();