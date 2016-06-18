'use strict';

coffeeCard.factory('AuthFactory', function($http, $state, $log) {
    var AuthFactory = {};

    function resToData(response) {
        return response.data;
    }

    AuthFactory.sendLogin = function(loginInfo) {
        return $http.post('/auth/login', loginInfo)
        .catch(function(){
            $log.error = "Invalid login credentials";
        })
    }

    AuthFactory.isLoggedIn = function() {
        return $http.get('/auth/me')
        .then(resToData)
        .catch($log.error);
    }

    AuthFactory.logout = function() {
        return $http.delete('/auth/logout')
        .then(resToData)
        .catch($log.error);
    }

    return AuthFactory;
})
