'use strict';

coffeeCard.controller('PhoneNumberCtrl', function ($scope, $state, user, AuthFactory) {
	if(!user) $state.go('login');
	
    $scope.submit = function(phoneNumber) {
        $state.go('cardState', {phone : phoneNumber});
	}

	$scope.logout = function() {
		$state.go('login');
		return AuthFactory.logout();
	}

});
