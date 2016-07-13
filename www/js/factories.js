angular.module('coffeeCard.factories', [])

.factory('CardFactory', function ($http, $log) {
  function Card(props) {
    angular.extend(this, props);
  }

  Card.url = 'http://192.168.3.229:1337/api/cards/';

  function resToData(res) {
    return res.data;
  }

  function getCard(data) {
    return new Card(data);
  }

  Card.prototype.updateDrinks = function(num) {
    this.numDrinks = this.numDrinks === num ? this.numDrinks-1 : num;
    this.numDrinks = this.numDrinks < 0 ? 0 : this.numDrinks;
    this.save();
  };

  Card.findOrCreate = function (phoneNumber) {
    return db.get(phoneNumber + '')
      .then(getCard)
      .catch(function (err) {
        console.log(err);
        if (err.status === 404) {
          var card = new Card({
            _id: phoneNumber + '',
            name: '',
            numDrinks: 1
        });
          return db.put(card)
          .then(function(){
              return card;
          });
        } else {
          $log.error(err);
        }
    });
  };

  Card.prototype.save = function () {
      return db.put(this).catch($log.error);
  };

  return Card;
})

.factory('RewardFactory', function ($http) {
  var RewardFactory = {};

  var rewards = [{
    name: "Black Card",
    rewardNumber: 10,
    icon: "ion-coffee",
    color: "#212120"
  }, {
    name: "Platinum Card",
    rewardNumber: 15,
    icon: "ion-coffee",
    color: "#E6B749"
  }];

  RewardFactory.getAll = function () {
    return rewards;
  };

  return RewardFactory;
});
