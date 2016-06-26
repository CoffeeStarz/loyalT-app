angular.module('coffeeCard.directives', [])

// .directive('contenteditable', function () {
//   return {
//     restrict: 'A',
//     require: '?ngModel',
//     link: function (scope, element, attrs, ngModel) {
//       if (!ngModel) return;
//       function read() {
//         ngModel.$setViewValue(element.html());
//       }
//       ngModel.$render = function () {
//         element.html(ngModel.$viewValue || '');
//       };
//       element.bind('blur keyup change', function () {
//         scope.$apply(read);
//       });
//     }
//   };
// })

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
                var card = scope.card;
                var rewardNum = scope.rewardNum;
                scope.update(card.drinksNumber - rewardNum, card.id);
            };
        }
    };
});
