(function(){
    'use strict';

    angular.module('miniRvce')
        .controller('HomeController', function($state,$http, Home, $window, $stateParams,$rootScope){

            var self = this;

            self.queslist = [] ;
            Home.getQuestions()
                .then(function(response){
                    console.log(response);
                    self.queslist = response.data.QUESTION;
                }).catch(function(reason){
                    console.log('error:',reason );
                });

            self.viewProd = function(pro_id){
                console.log(pro_id);
                $rootScope.curProdId = pro_id;
                $state.go('products');
            };

        });
})();