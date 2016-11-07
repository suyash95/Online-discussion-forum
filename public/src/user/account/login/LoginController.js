(function () {
    'use strict'

    angular.module('miniRvce')
        .controller('LoginController', function (Account, $state, $rootScope) {
            
            var self = this;
            $rootScope.isSignUp = false;


            self.submit = function () {
                Account.login({
                    usn: self.usn,
                    password: self.password
                }).then(function (response) {
                    console.log(response);
                    console.log('islo', Account.isLoggedIn);
                    $rootScope.loggedIn = true;
                    $state.go('account');
                }).catch(function (reason) {
                    console.log(reason);
                    self.Message = reason;
                })
            }
        });
})();