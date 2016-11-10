(function  () {
	'use strict';

	angular.module('miniRvce')
		.factory('Account',['$http', '$window', function  ($http, $window) {

			var token = null;
			var id = null;
			
			var isLoggedIn = false;
			
			function signUp (data) {
				return $http.post('/signup', data);
			}

			function login (data) {
                var self = this;
				//id = data.usn;
				return $http.post('/login', data)
						.then(function (response) {
							//console.log(response);
                            self.isLoggedIn = true;
							token = response.data.token;
							id = response.data.USER[0].id ;
							var d_id = response.data.USER[0].dept_id;
							//console.log(response.data);
							$window.localStorage.setItem('token' , token);
							$window.localStorage.setItem('user_id' , id);
							$window.localStorage.setItem('d_id' , d_id);
							$window.localStorage.setItem('cl_id' , response.data.USER[0].col_id);
							$window.localStorage.setItem('name' , response.data.USER[0].name);
							$window.localStorage.setItem('usn' , response.data.USER[0].usn);
							$window.localStorage.setItem('email' , response.data.USER[0].email);
							$window.localStorage.setItem('phone' , response.data.USER[0].phone);
							$window.localStorage.setItem('type' , response.data.USER[0].type);
							$window.localStorage.setItem('vfd', response.data.USER[0].verified);
							//console.log('isLoggedin', self.isLoggedIn);
							return response;
						}).catch(function(reason){
							console.log(reason);
						})
			}
			function logout(){
                isLoggedIn = false;
				return $window.localStorage.clear();

			}
			function isLoggedInFunc(){
				if(getToken() && getUserId()) {
                    console.log('Logged in');
                    isLoggedIn = true;
                    return true;
                }
				else {
                    console.log('not logged in');
                    isLoggedIn = false;
                    return false;
                }
			}
			
			function usernames () {
				return $http.get('/users');
			}
			function getUserId () {
				id = $window.localStorage.getItem('user_id');
				return id;
			}
			function getToken () {
				token = $window.localStorage.getItem('token');
				return token;
			}

			return {
				signUp: signUp,
				login: login,
				getUserNames: usernames,
				getUserId : getUserId,
				getToken: getToken,
				isLoggedIn : this.isLoggedIn,
                isLoggedInFunc: isLoggedInFunc,
				logout : logout
			}
		}]);

	
})();