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
                let rewardNum = scope.rewardNum;
                scope.update.call(card, card._id, -rewardNum);
            };
        }
    };
});
