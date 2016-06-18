coffeeCard.controller('LoginCtrl', function ($scope, $state, AuthFactory) {

    $scope.login = {};
    $scope.error = null;

    $scope.sendLogin = AuthFactory.sendLogin;
    

});