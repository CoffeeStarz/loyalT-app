var coffeeCard = angular.module('coffeeCard.controllers', [])

.controller('PhoneCtrl', function ($scope, $state, $ionicModal, CardFactory, rewards, $log, $timeout) {

  //Card functionnality
  $scope.submit = function (phoneNumber, numOrders) {
    return CardFactory.findOrCreate(phoneNumber)
      .then(function (card) {
        $timeout(function(){card.updateDrinks(numOrders)}, 500)
        $scope.card = card;
        $scope.cardModal.show();
      })
      .then(function () {
        $scope.hasName = function(){
            return !!$scope.card.name;
        };

        $scope.changeName = function(newName) {
            $scope.card.name = newName;
            $scope.card.save();
        };
      })
      .catch(console.error);
  };

  $scope.numOrders = 1;
  $scope.newName = 'Your Preferred Name?';

  $scope.addDrink = function () {
    $scope.numOrders ++;
    console.log('adding a drink, now have: ', $scope.numOrders , " orders")
  }

  $scope.removeDrink = function () {
    if ($scope.numOrders > 1) {
      $scope.numOrders --;
    } else {
      $scope.numOrders = 1;
    }
    console.log('removing a drink, now have: ', $scope.numOrders , " orders")
  }

  $scope.rewards = rewards;

  $scope.getNumber = function (number) {
    return new Array(number);
  };

  $scope.removeModal = function() {
    $scope.cardModal.hide();
  };

  $ionicModal.fromTemplateUrl('templates/card.html', {
    scope: $scope,
    animation: 'slide-in-up',
    backdropClickToClose: true,
    hardwareBackButtonClose: true
  }).then(function (modal) {
    $scope.cardModal = modal;
  });

  $scope.$on('modal.hidden', function() {
    $scope.phoneNumber = null;
    $scope.numOrders = 1;
    $scope.newName = 'Your Preferred Name?'
  });

});
