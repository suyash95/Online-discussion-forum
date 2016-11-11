(function () {
    'use strict';
    angular.module('miniRvce')
        .controller('QuestionController', function($rootScope, $window, $stateParams,Question){
            var self = this;

            self.answerList = [];
            self.curQuestionId = $stateParams.ques_id;
            self.new_answer = null;
            self.user =  null;
            self.user = $window.localStorage.getItem('user_id');
            var cur_id =  self.curQuestionId;
            var curDet = function() {
                Question.getCurDet(cur_id)
                    .then(function (response) {
                        console.log(response);
                        self.allData = response.data.QUESTION;

                    }).catch(function (reason) {
                        console.log(reason);
                    });
            };
            curDet();
            var upd = function() {
                Question.getAnswers(self.curQuestionId)
                    .then(function (response) {
                        console.log('answers: ', response);
                        self.answerList = response.data.ANSWERS;
                    }).catch(function (reason) {
                        console.log(reason);
                    });
            };
            upd();
            self.addAnswer = function (){
                var ans_data = {
                    u_id: self.user,
                    q_id: self.curQuestionId,
                    contents: self.new_answer
                };
                Question.postAns(ans_data)
                    .then((function(response){
                        upd();
                    })).catch(function(reason){
                        console.log("Error in posting answer",reason);
                    });

            };

            self.update_up = function (id){
                Question.upd_up(id)
                    .then(function(response){
                        console.log(response);
                        //self.getall();
                    }).catch(function(reason){
                        console.log(reason);
                    });
            };
            self.update_dw = function (id){
                Question.upd_dw(id)
                    .then(function(response){
                        console.log(response);
                    }).catch(function(reason){
                        console.log(reason);
                    });
            };


        });
})();