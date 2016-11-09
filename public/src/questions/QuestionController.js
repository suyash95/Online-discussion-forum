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

        });
})();