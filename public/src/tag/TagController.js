(function(){
    'use strict';

    angular.module('miniRvce')
        .controller('TagController', function($state,$http, Tag, $window, $stateParams,$rootScope){

            var self = this;
            self.tagsList = [];
            $rootScope.verifiedAcc = $window.localStorage.getItem('vfd');

            Tag.getTags()
                .then(function (response) {
                    //console.log(response);
                    self.tagsList = response.data.TAGS;
                }).catch(function(reason){
                    console.log("Tag retrieval error: ",reason);
                });

        });
})();