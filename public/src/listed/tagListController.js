(function(){
    'use strict';

    angular.module('miniRvce')
        .controller('tagListController', function($state,$http, tagList, $window, $stateParams,$rootScope){

            var self = this;

            self.queslist = [] ;
            self.t_id = $stateParams.tag_id;
            tagList.getQuestions()
                .then(function(response){
                    //console.log(response);
                    self.queslist = response.data.QUESTION;
                }).catch(function(reason){
                    console.log('error:',reason );
                });

        });
})();