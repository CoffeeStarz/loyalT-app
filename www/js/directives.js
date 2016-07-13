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
                console.log("here!");
                var card = scope.card;
                var rewardNum = scope.rewardNum;
                scope.update.call(card, -rewardNum);
            };
        }
    };
});
