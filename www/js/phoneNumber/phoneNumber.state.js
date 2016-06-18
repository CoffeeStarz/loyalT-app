'use strict'

coffeeCard.config(function ($stateProvider) {
    $stateProvider.state('phoneState', {
        url: '/phone',
        templateUrl: '/js/phoneNumber/phoneNumber-form.html',
        controller: 'PhoneNumberCtrl',
        resolve : {
        	user : function(AuthFactory) {
        		return AuthFactory.isLoggedIn();
        	}
        }
    });
});
