(function () {
    'use strict';
    angular.module('miniRvce')
        .controller('AddQuesController', function($scope,$state,$rootScope, $window, $stateParams,AddQues,Tag) {
            var self = this;

            self.user = null;

            self.tagsList = [];
            Tag.getTags()
                .then(function (response) {
                    //console.log(response);
                    self.tagsList = response.data.TAGS;
                }).catch(function(reason){
                    console.log("Tag retrieval error: ",reason);
                });

            self.user = $window.localStorage.getItem('user_id');
            self.uname = $window.localStorage.getItem('name');
            self.col_id = $window.localStorage.getItem('cl_id');
            self.tag_id = null;
            self.tag_name = null;
            //self.cur_val = null;
            var date = new Date();
            self.cur_date = ('0' + date.getDate()).slice(-2)  + '-' + ('0' + (date.getMonth() + 1)).slice(-2) + '-' +  date.getFullYear();

            var ques_data = {};

            self.getTag = function(){
                self.tag_id = $scope.item.id;;
                console.log("tag_id ",self.tag_id);
                //console.log("cur_val ",self.cur_val);
                self.tag_name = $scope.item.name;;

            };
            self.addQuestion = function () {
                console.log("tag_id ",self.tag_id);
                ques_data = {
                    tag_id: self.tag_id,
                    tag : self.tag_name,
                    u_id: self.user,
                    col_id: self.col_id,
                    contents: self.new_ques,
                    username: self.uname,
                    pdate: self.cur_date
                };
                AddQues.postQues(ques_data)
                    .then((function (response) {
                        //console.log(response);
                        $state.go('home');
                    })).catch(function (reason) {
                        console.log("Error in posting question", reason);
                    });

            };
        });
})();