'use strict';

coffeeCard.controller('CardCtrl', function ($scope, $log, card, rewards, user) {

    if(!user) $state.go('login');

    $scope.card = card;
    $scope.rewards = rewards;

    $scope.getNumber = function (number) {
        return new Array(number);
    };

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

});
