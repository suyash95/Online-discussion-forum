(function  () {
	'use strict'

	angular.module('miniRvce')
		.controller('SignUpController', function  (Account, $state, $rootScope) {
			var self = this;
			
			self.message = "";
			self.enable = false;
			
			$rootScope.isSignUp = true;


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

              self.message = "";
			Account.signUp(data)
					.then(function  (response) {

                        console.log('Response after signin up: ',response);
						Account.login({
							usn: data.usn,
							password: data.password
						}).then(function () {

                            $state.go('home');
						}).catch(function (reason) {

//                            self.message = "Unsuccessful!! Please Check the entered details..!";
							console.log('err During login!!');
							console.log(reason);
						})
					})
					.catch(function  (reason) {
                    self.enable =  true;
                    self.message = "Unsuccessful!! Please Check the entered details..!";

                    console.log("err during signup: ", reason);
					});
			}
		});
})();