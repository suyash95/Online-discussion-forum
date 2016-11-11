(function(){
    'use strict';

    angular.module('miniRvce')
        .controller('HomeController', function($state,$http, Home, $window, $stateParams,$rootScope) {

            var self = this;
            self.tagsList = [];
            self.queslist = [];

            self.getall = function () {
                Home.getQuestions()
                    .then(function (response) {
                        //console.log(response);
                        self.queslist = response.data.QUESTION;
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