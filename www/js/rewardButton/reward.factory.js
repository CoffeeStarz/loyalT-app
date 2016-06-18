'use strict';

coffeeCard.factory('RewardFactory', function($http) {
    var RewardFactory = {};

    var rewards = [
        {
            name: "Black Card",
            rewardNumber: 10,
            icon: "../img/coffeecup.svg",
            color: "white"
        },
        {
            name: "Platinum Card",
            rewardNumber: 15,
            icon: "../img/coffeecup.svg",
            color: "platinum"
        }
    ];

    RewardFactory.getAll = function(){
        return rewards;
    };

    return RewardFactory;
});
