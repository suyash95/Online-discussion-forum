(function(){
    'use strict';

    angular.module('miniRvce')
        .controller('tagListController', function($state,$http,Home, tagList, $window, $stateParams,$rootScope){

            var self = this;

            self.queslist = [] ;
            self.t_id = $stateParams.tag_id;
            $rootScope.verifiedAcc = $window.localStorage.getItem('vfd');

            //console.log('tag i:', self.t_id);
            tagList.getQuestions(self.t_id)
                .then(function(response){
                    //console.log(response);
                    self.queslist = response.data.QUESTION;
                }).catch(function(reason){
                    console.log('error:',reason );
                });
            self.update_up = function (id){
                Home.upd_up(id)
                    .then(function(response){
//                        self.getall();
                    }).catch(function(reason){
                        console.log(reason);
                    });
            };
            self.update_dw = function (id){
                Home.upd_dw(id)
                    .then(function(response){
  //                      self.getall();
                    }).catch(function(reason){
                        console.log(reason);
                    });
            };


        });
})();