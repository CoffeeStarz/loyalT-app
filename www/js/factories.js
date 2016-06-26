angular.module('coffeeCard.factories', [])

.factory('CardFactory', function ($http) {
  function Card(props) {
    angular.extend(this, props);
  }

  Card.url = 'http://192.168.3.229:1337/api/cards/';

  function resToData(res) {
    return res.data;
  }

  function getCard(res) {
    var data = resToData(res);
    var card = new Card(Array.isArray(data) ? data[0] : data);
    return card;
  }

  Card.prototype.getUrl = function () {
    return Card.url + this.id;
  };

  Card.findOrCreate = function (phoneNumber) {
    return $http.get(Card.url + phoneNumber).then(getCard);
  };

  Card.prototype.save = function () {
    return $http.put(this.getUrl(), this)
      .then(getCard);
  };

  return Card;
})

.factory('RewardFactory', function ($http) {
  var RewardFactory = {};

  var rewards = [{
    name: "Black Card",
    rewardNumber: 10,
    icon: "../img/coffeecup.svg",
    color: "white"
  }, {
    name: "Platinum Card",
    rewardNumber: 15,
    icon: "../img/coffeecup.svg",
    color: "platinum"
  }];

  RewardFactory.getAll = function () {
    return rewards;
  };

  return RewardFactory;
});
