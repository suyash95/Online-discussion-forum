(function () {
    'use strict';
    angular.module('miniRvce')
        .controller('AddQuesController', function($rootScope, $window, $stateParams,AddQues,Tag) {
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
            self.col_id = $window.localStorage.getItem('col_id');
            self.tag_id = null;

            var ques_data = {};

            self.getTag = function(val){
                self.tag_id = val;
            };
            self.addQuestion = function () {
                console.log("tag_id ",self.tag_id);
                ques_data = {
                    tag_id: self.tag_id,
                    u_id: self.user,
                    col_id: self.col_id,
                    contents: self.new_ques,
                    username: self.uname
                };
                AddQues.postQues(ques_data)
                    .then((function (response) {
                        console.log(response);
                    })).catch(function (reason) {
                        console.log("Error in posting question", reason);
                    });

            };
        });
})();