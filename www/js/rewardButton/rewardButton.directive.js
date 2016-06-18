'use strict';

coffeeCard.directive('rewardButton', function(){
    return {
        restrict: 'E',
        templateUrl: 'js/rewardButton/rewardButton.html',
        scope: {
            update: '=',
            icon: '@',
            card: '=',
            color: '@',
            rewardNum: '@'
        },
        link: function(scope) {
            scope.claim = function() {
                var card = scope.card;
                var rewardNum = scope.rewardNum;
                scope.update(card.drinksNumber - rewardNum, card.id);
            };
        }
    };
});
