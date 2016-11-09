(function () {
    'use strict';
    angular.module('miniRvce').
        factory('Tag',['$http', '$window', function ($http, $window) {

            return{
                getTags: function() {
                    return $http.get('/tags');
                }
            };
        }]);
})();