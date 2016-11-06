(function () {
    'use strict';

    angular.module('miniRvce', ['ui.router', 'toaster', 'ngAnimate'/*,'scDateTime'*/])
        .config(function ($stateProvider, $urlRouterProvider, $httpProvider) {

            $urlRouterProvider.otherwise('/home');

            var dir = 'src/';

            $stateProvider
                .state('account', {
                    url: '/user',
                    templateUrl: dir + 'user/account/account.tpl',
                    controller: 'AccountController as account'
                })

                .state('account.login', {
                    url: '/user/login',
                    templateUrl: dir + 'user/account/login/login.tpl',
                    controller: 'LoginController as login'
                })

                .state('account.signup', {
                    url: '/user/signup',
                    templateUrl: dir + 'user/account/signup/signup.tpl',
                    controller: 'SignUpController as signup'
                })
                .state('account.logout',{
                    url: '/user',
                    templateUrl: dir + 'user/account/account.tpl',
                    controller: 'AccountController as account'
                })
                .state('home',{
                    url: '/home',
                    templateUrl: dir + 'home/home.tpl',
                    controller: 'HomeController as home'
                })
                .state('question',{
                    url: '/question/:ques_id',
                    templateUrl: dir + 'questions/question.tpl',
                    controller: 'QuestionController as question'
                })
            ;

            /*$httpProvider.interceptors.push('authInterceptor');*/
        });
})();
