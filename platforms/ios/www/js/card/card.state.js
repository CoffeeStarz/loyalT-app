'use strict'

coffeeCard.config(function ($stateProvider) {
    $stateProvider.state('cardState', {
        url: '/card/:phone',
        templateUrl: '/js/card/card.html',
        controller: 'CardCtrl',
        resolve : {
        	card : function($stateParams, CardFactory) {
        		return CardFactory.findOrCreate($stateParams.phone);
        	},
            rewards: function(RewardFactory) {
                return RewardFactory.getAll();
            },
            user : function(AuthFactory) {
                return AuthFactory.isLoggedIn();
            }
        }
    });
});
