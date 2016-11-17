(function () {
    'use strict';
    angular.module('miniRvce')
        .controller('CommentController', function($rootScope, $window, $stateParams,Comment){
            var self = this;

            self.commentList = [];
            self.user =  null;
            self.user = $window.localStorage.getItem('user_id');
            $rootScope.verifiedAcc = $window.localStorage.getItem('vfd');
            self.uname = $window.localStorage.getItem('name');
            self.new_comment = null;
            self.cur_a_id = null;

            self.upd = function( a_id ) {
                Comment.getComments(a_id)
                    .then(function (response) {
                        console.log('comments: ', response);
                        self.commentList = response.data.COMMENTS;
                    }).catch(function (reason) {
                        console.log(reason);
                    });
            };
            //self.upd(self.cur_a_id);

            self.addComment = function (a_id){
                var com_data = {
                    u_id: self.user,
                    ans_id: a_id,
                    contents: self.new_comment,
                    uname: self.uname
                };
                Comment.postComm(com_data)
                    .then((function(response){
                        self.upd(a_id);
                    })).catch(function(reason){
                        console.log("Error in posting comment: ",reason);
                    });

            };

        });
})();