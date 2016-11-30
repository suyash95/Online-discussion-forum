(function(){
    'use strict';

    angular.module('miniRvce')
        .controller('HomeController', function($state,$http, Home, $window, $stateParams,$rootScope,Question,Comment) {

            var z = null;
            var self = this;
            self.tagsList = [];
            self.queslist = [];
            var gvar = [];
            $rootScope.verifiedAcc = $window.localStorage.getItem('vfd');
            var ansL = null;
            var getTopAns = function(a){
                var k = Question.getAnswers(a)
                    .then(function(response){
                        //console.log(response);
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
                      return response.data.COMMENTS;
                  }).catch(function(reason){
                      return reason;
                  });
                return co;
            };
            self.getall = function () {
                Home.getQuestions()
                    .then(function (response) {
                        //console.log(response);
                        self.queslist = response.data.QUESTION;

                        for(var i = 0;i<self.queslist.length; i++ ) {
                            //self.queslist[i].topAns =[];
                            self.queslist[i].topAns = getTopAns(self.queslist[i].id)
                                .then(function(response){
                                    console.log("getTopAns: ", response);
                                    return response;
                                    //console.log("kskskksk",self.queslist[i].topAns);
                                    /*getTopComm(self.queslist[i].topAns.id)
                                        .then(function (response1) {
                                            console.log("getTopCom", response1);
                                            self.queslist[i].topAns.topCom = response1;
                                        }).catch(function (reason ){
                                            console.log("reason: ",reason);
                                        })*/
                                }).catch(function (reason){
                                    console.log(reason);
                                });
                        }
  //                      console.log(self.queslist[0].topAns);
/*                        for(var i = 0;i<self.queslist.length; i++ ) {

                            self.queslist[i].topAns.topCom = getTopComm(self.queslist[i].topAns.$$state.value.id)
                                .then(function (response) {
                                    return response;
                                }).catch(function (reason) {
                                    console.log(reason);
                                });
                        }*/
                        }).catch(function (reason) {
                            console.log('error:', reason);
                        });
                return 1;

            };
            self.getCom = function () {
                for(var i = 0;i<self.queslist.length; i++ ) {
                    console.log("aaaa");
                    self.queslist[i].topAns.topCom = getTopComm(self.queslist[i].topAns.$$state.value.id)
                        .then(function (response)
                        {
                            console.log(response);
                            return response;
                        }).catch(function (reason) {
                            console.log(reason);
                        });
                }
            };

            self.sequence = function () {

                return self.getall();
                self.getCom();

            };
            self.sequence();

            self.popQues = [];
            Home.getPopularQues()
                .then(function (response) {
                    console.log("aaaaaaaaaaaa",response);
                    self.popQues = response.data.QUESTION;
                }).catch( function (reason) {
                   console.log("popular fetch error: ", reason);
                });



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