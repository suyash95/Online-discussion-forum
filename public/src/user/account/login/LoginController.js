(function () {
    'use strict'

    angular.module('miniRvce')
        .controller('LoginController', function ($window,Account, $state, $rootScope) {
            
            var self = this;
            $rootScope.isSignUp = false;


            self.submit = function () {
                Account.login({
                    usn: self.usn,
                    password: self.password
                }).then(function (response) {
                    console.log(response);
                    if(!response.data.error) {

                        //console.log('islo', Account.isLoggedIn);
                        $rootScope.loggedIn = true;
                        $rootScope.verifiedAcc = $window.localStorage.getItem('vfd');
                        $state.go('home');
                    }else{
                        self.Message = response.data.error;
                    }
                }).catch(function (reason) {
                    console.log(reason);
                    self.Message = reason;
                })
            }
        });
})();