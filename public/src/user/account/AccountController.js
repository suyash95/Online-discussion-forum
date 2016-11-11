(function  () {
	'use strict';

	angular.module('miniRvce')
		.controller('AccountController', function  ( Account, $state, $window, $rootScope ) {
			var self = this;
			
			$rootScope.loggedIn = Account.isLoggedInFunc();
			$rootScope.verifiedAcc = Account.isVerified();

			//console.log(Account.isloggedIn);

			self.logout = function(){
				Account.logout();
				self.loggedin = false;
			};
		});
})();