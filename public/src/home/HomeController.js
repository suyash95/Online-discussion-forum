(function(){
    'use strict';

    angular.module('miniRvce')
        .controller('HomeController', function($state,$http, Home, $window, $stateParams,$rootScope,Question,Comment) {

            var self = this;
            self.tagsList = [];
            self.queslist = [];
            $rootScope.verifiedAcc = $window.localStorage.getItem('vfd');
            var ansL = null;
            var getTopAns = function(a){
                var k = Question.getAnswers(a)
                    .then(function(response){
                        return response.data.ANSWERS[0];
                    })
                    .catch(function(reason){
                        return reason;
                    });
                return k;
            };
            var getTopComm = function(a){
              var co = Comment.getComments(a)
                  .then(function (response){
                      return response.data.COMMENTS[3];
                  }).catch(function(reason){
                      return null;
                  });
                return co;
            };
            self.getall = function () {
                Home.getQuestions()
                    .then(function (response) {
                        //console.log(response);
                        self.queslist = response.data.QUESTION;
                        for(var i = 0;i<self.queslist.length; i++ ){
                            ansL = getTopAns(self.queslist[i].id);
                            //console.log(ansL);
                            self.queslist[i].topAns =  ansL;
                            var zz = ansL.$$state;
                            //while(!zz.value);
                            if(zz.value) {
                                console.log(ansL.$$state);
                                 var comL = getTopComm(zz.value.id);
                                    self.queslist[i].topAns.topCom = comL;

                            }


                            console.log("jjj",i,self.queslist[i].topAns);
                        }
                        //console.log(self.queslist);
                    }).catch(function (reason) {
                        console.log('error:', reason);
                    });
            };
            self.getall();
            self.update_up = function (id){
              Home.upd_up(id)
                  .then(function(response){
                      self.getall();
                  }).catch(function(reason){
                     console.log(reason);
                  });
            };
            self.update_dw = function (id){
                Home.upd_dw(id)
                    .then(function(response){
                        self.getall();
                    }).catch(function(reason){
                        console.log(reason);
                    });
            };
            Home.getTags()
                .then(function (response) {
                    //console.log(response);
                    self.tagsList = response.data.TAGS;
                }).catch(function(reason){
                    console.log("Tag retrieval error: ",reason);
                });

        });
})();