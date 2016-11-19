angular.module('coffeeCard.directives', [])

.directive('rewardButton', function(){
    return {
        restrict: 'E',
        templateUrl: 'templates/rewardButton.html',
        scope: {
            update: '=',
            icon: '@',
            card: '=',
            color: '@',
            rewardNum: '@'
        },
        link: function(scope) {
            scope.claim = function() {
                let card = scope.card;
                let rewardNum = -1*scope.rewardNum;
                card.updateDrinks(rewardNum);
            };
        }
    };
});
