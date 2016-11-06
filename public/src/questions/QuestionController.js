(function () {
    'use strict';
    angular.module('miniRvce')
        .controller('QuestionController', function($rootScope, $window, $stateParams,Question){
            var self = this;

            self.answerList = [];
            self.curQuestionId = $stateParams.ques_id;


            Question.getAnswers(self.curQuestionId)
                .then(function(response){
                    console.log('answers: ',response);
                    self.answerList = response.data.ANSWERS;
                }).catch(function(reason){
                    console.log(reason);
                });

        });
})();