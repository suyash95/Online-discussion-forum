(function  () {
	'use strict'

	angular.module('miniRvce')
		.controller('SignUpController', function  (Account, $state, $rootScope) {
			var self = this;
			
			self.message = "";
			self.enable = false;
			
			$rootScope.isSignUp = true;

/*			self.checkUserName = function () {
				
				Account.getUserNames()
						.then(function (response) {

							if (!response.data) {
								self.enable = true;
							} else {
								if( Object.prototype.toString.call( response.data.username ) === '[object Array]' ) {
								var index = response.data.indexOf(self.email);
								

								if (index !== -1) {
									self.message = "You have already signed up....";
									self.enable = false;
								}
							} else {
									self.message = "";
									self.enable = true;
								}
							}

						})
						.catch(function(reason){
							console.log(reason);
						})
			};*/

			self.submit =function() {
				console.log(self);

				var data = {
					dept_name: self.dept_name,
                    clg_name: self.clg_name,
                    name: self.name,
                    usn: self.usn,
					password: self.password,
					email: self.email,
                    phone: self.phone,
                    type: self.typ
				};

				Account.signUp(data)
					.then(function  (response) {
                        console.log('Response after signin up: ',response);
						Account.login({
							usn: data.usn,
							password: data.password
						}).then(function () {
							$state.go('user');
						}).catch(function (reason) {
							console.log('err During login!!');
							console.log(reason);
						})
					})
					.catch(function  (reason) {
						console.log("err during signup: ", reason);
					});
			}
		});
})();