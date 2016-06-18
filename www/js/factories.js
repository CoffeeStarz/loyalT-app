angular.module('coffeeCard.factories', [])

.factory('AuthFactory', function ($http, $state, $log) {
  var AuthFactory = {};

  function resToData(response) {
    return response.data;
  }

  var authUrl = 'http://192.168.3.229:1337/auth';

  AuthFactory.sendLogin = function (loginInfo) {
    return $http.post(authUrl + '/login', loginInfo)
      .catch(function () {
        $log.error = "Invalid login credentials";
      });
  };

  AuthFactory.isLoggedIn = function () {
    return $http.get(authUrl + '/me')
      .then(resToData)
      .catch($log.error);
  };

  AuthFactory.logout = function () {
    return $http.delete(authUrl + '/logout')
      .then(resToData)
      .catch($log.error);
  };

  return AuthFactory;
})

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
