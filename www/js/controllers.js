var coffeeCard = angular.module('coffeeCard.controllers', [])

.controller('PhoneCtrl', function ($scope, $state, $ionicModal, CardFactory, rewards, $log) {

  //Card functionnality
  $scope.submit = function (phoneNumber) {
    CardFactory.findOrCreate(phoneNumber)
      .then(function (card) {
        $scope.card = card;
        $scope.cardModal.show();
      })
      .then(function () {
        $scope.updateDrinks = function (num) {
          $scope.card.drinksNumber = num;
          $scope.card.save()
            .then(function (card) {
              $scope.card = card;
            })
            .catch($log.error);
        };

        $scope.hasName = function(){
            return !!$scope.card.name;
        };

        $scope.changeName = function(newName) {
            $scope.card.name = newName;
            $scope.card.save();
        };
      });
  };
  $scope.rewards = rewards;

  $scope.getNumber = function (number) {
    return new Array(number);
  };

  $ionicModal.fromTemplateUrl('templates/card.html', {
    scope: $scope,
    animation: 'slide-in-up',
    backdropClickToClose: true,
    hardwareBackButtonClose: true
  }).then(function (modal) {
    $scope.cardModal = modal;
  });
});
