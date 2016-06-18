'use strict';

coffeeCard.controller('PhoneNumberCtrl', function ($scope, $state, user, AuthFactory, $ionicModal, CardFactory, rewards, $log) {
    
    //Login/Logout functionnality
	$scope.logout = function() {
		$scope.loginModal.show()
		return AuthFactory.logout();
	}

	$scope.login = {};
    $scope.error = null;

    $scope.sendLogin = function() {
    	AuthFactory.sendLogin($scope.login)
    	.then(function() {
    		$scope.loginModal.hide();
    	})
    }

	$ionicModal.fromTemplateUrl('js/login/login.html', {
	    scope: $scope,
	    animation: 'slide-in-up',
	    backdropClickToClose : false,
	    hardwareBackButtonClose : false,
	    focusFirstInput : true
	  }).then(function(modal) {
	      $scope.loginModal = modal;
		  if(!user) $scope.loginModal.show();
	  })


	//Card functionnality
    $scope.submit = function(phoneNumber) {
    	CardFactory.findOrCreate(phoneNumber)
    	.then(function(card) {
    		$scope.card =card;
    		$scope.cardModal.show();
    	})
    	.then(function() {
    		$scope.updateDrinks = function (num) {
	        $scope.card.drinksNumber = num;
	        $scope.card.save()
	            .then(function (card) {
	                $scope.card = card;
	            })
	            .catch($log.error);
		    };

		    $scope.$watch('card.name', function () {
		        $scope.card.save();
		    }, true);
    	})
	}
	$scope.rewards = rewards;

    $scope.getNumber = function (number) {
        return new Array(number);
    };

	$ionicModal.fromTemplateUrl('js/card/card.html', {
	    scope: $scope,
	    animation: 'slide-in-up',
	    backdropClickToClose : true,
	    hardwareBackButtonClose : true
	}).then(function(modal) {
	      $scope.cardModal = modal;
		  if(!user) {
		  	$scope.cardModal.hide();
		  	$scope.loginModal.show();
		  }
	})

});
