'use strict';

(function () {
  var offset = {
    PIN: {
      X: 20,
      Y: 70
    },
    MAIN_PIN: {
      X: 31,
      Y: 84
    }
  };

  var mapPins = document.querySelector('.map__pins');
  var mainPin = document.querySelector('.map__pin--main');
  var pinTemplate = document.querySelector('#pin').content.querySelector('.map__pin');

  var create = function (offer) {
    var pin = pinTemplate.cloneNode(true);
    var pinX = offer.location.x + offset.PIN.X;
    var pinY = offer.location.y + offset.PIN.Y;
    pin.style = 'left: ' + pinX + 'px; top: ' + pinY + 'px;';

    var pinAvatar = pin.querySelector('img');
    pinAvatar.src = offer.author.avatar;
    pinAvatar.alt = offer.offer.title;

    return pin;
  };

  var render = function (offers) {
    var fragment = document.createDocumentFragment();
    for (var j = 0; j < offers.length; j++) {
      var pin = create(offers[j]);
      fragment.appendChild(pin);
    }
    mapPins.appendChild(fragment);
  };

  var remove = function (pins) {
    for (var i = 0; i < pins.length; i++) {
      pins[i].remove();
    }
  };

  // var getPositionX = function (pin) {
  //   return parseInt(pin.style.left.slice(0, -PX_CUT), 10);
  // };
  //
  // var getPositionY = function (pin) {
  //   return parseInt(pin.style.top.slice(0, -PX_CUT), 10);
  // };

  // var getCoordinateX = function (pin, pinOffset) {
  //   return getPositionX(pin) + pinOffset;
  // };
  //
  // var getCoordinateY = function (pin, pinOffset) {
  //   return getPositionY(pin) + pinOffset;
  // };

  // var mainPinDefault = {
  //   x: getPositionX(mainPin),
  //   y: getPositionY(mainPin)
  // };

  var setPositionOnMap = function (pin, x, y) {
    pin.style.left = x + 'px';
    pin.style.top = y + 'px';
  };

  window.pin = {
    offset: offset,
    mainPin: mainPin,
    // mainPinDefault: mainPinDefault,
    setPositionOnMap: setPositionOnMap,
    render: render,
    remove: remove
  };
})();
