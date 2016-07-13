var coffeeCard = angular.module('coffeeCard.controllers', [])

.controller('PhoneCtrl', function ($scope, $state, $ionicModal, CardFactory, rewards, $log, $timeout) {

  //Card functionnality
  $scope.submit = function (phoneNumber) {
    CardFactory.findOrCreate(phoneNumber)
      .then(function (card) {
        $timeout(function(){card.updateDrinks(1)}, 500)
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

  $scope.$on('modal.hidden', function() {
    $scope.phoneNumber = null;
  });

});
