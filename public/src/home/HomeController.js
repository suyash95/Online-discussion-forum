(function(){
    'use strict';

    angular.module('miniRvce')
        .controller('HomeController', function($state,$http, Home, $window, $stateParams,$rootScope){

            var self = this;
            self.tagsList = [];
            self.queslist = [] ;
            Home.getQuestions()
                .then(function(response){
                    console.log(response);
                    self.queslist = response.data.QUESTION;
                }).catch(function(reason){
                    console.log('error:',reason );
                });

            Home.getTags()
                .then(function (response) {
                    console.log(response);
                    self.tagsList = response.data.TAGS;
                }).catch(function(reason){
                    console.log("Tag retrieval error: ",reason);
                });

        });
})();