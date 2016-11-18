var coffeeCard = angular.module('coffeeCard.controllers', [])

.controller('PhoneCtrl', function ($scope, $state, $ionicModal, CardFactory, rewards, $log, $timeout) {

  //Card functionnality
  $scope.submit = function (phoneNumber, numOrders) {
    return CardFactory.findOrCreate(phoneNumber)
      .then(function (card) {
        $timeout(function(){card.updateDrinks(numOrders)}, 500)
        $scope.card = card;
        return $ionicModal.fromTemplateUrl('templates/card.html', {
          scope: $scope,
          animation: 'slide-in-up',
          backdropClickToClose: true,
          hardwareBackButtonClose: true
        })
      })
      .then(function (modal) {
        $scope.cardModal = modal;
        $scope.cardModal.show();
      })
      .then(function () {
        $scope.hasName = function(){
            return !!$scope.card.name;
        };

        $scope.changeName = function(newName) {
            $scope.newName = null;
            $scope.card.name = newName;
            $scope.card.save();
        };
      })
      .catch(console.error);
  };

  $scope.numOrders = 1;
  $scope.newName = null;

  $scope.addDrink = function () {
    $scope.numOrders ++;
  }

  $scope.removeDrink = function () {
    if ($scope.numOrders > 1) {
      $scope.numOrders --;
    } else {
      $scope.numOrders = 1;
    }
  }

  $scope.rewards = rewards;

  $scope.getNumber = function (number) {
    return new Array(number);
  };

  $scope.removeModal = function() {
    return $scope.cardModal.remove();
  };

  $scope.$on('modal.hidden', function() {
    $scope.phoneNumber = null;
    $scope.numOrders = 1;
    $scope.newName = null;
  });

});
