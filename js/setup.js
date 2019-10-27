"use strict";
(function () {

var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = document.querySelector('.setup-close');
var inputName = document.querySelector('.setup-user-name');
var formSubmit = document.querySelector('.setup-submit');
var form = document.querySelector('.setup-wizard-form');

var wizardCoat = document.querySelector('.setup-wizard .wizard-coat');
var wizardEye = document.querySelector('.setup-wizard .wizard-eyes');
var wizardFire = document.querySelector('.setup-fireball-wrap');

var coatInput = document.querySelector('input[name = "coat-color"]');
var eyeInput = document.querySelector('input[name = "eyes-color"]');
var fireInput = document.querySelector('input[name = "fireball-color"]');

var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;

var randomInteger = function (min, max) {
  var rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

var getRandomCoat = function () {
  var colors = [
    'rgb(101, 137, 164)',
    'rgb(241, 43, 107)',
    'rgb(146, 100, 161)',
    'rgb(56, 159, 117)',
    'rgb(215, 210, 55)',
    'rgb(0, 0, 0)'
  ]
  return colors[randomInteger(0, colors.length)];
}

var getRandomEye = function () {
  var colors = [
    'black',
    'red',
    'blue',
    'yellow',
    'green'
  ]
  return colors[randomInteger(0, colors.length)];
}

var getRandomFire = function () {
  var colors = [
    'black',
    'red',
    'blue',
    'yellow',
    'green'
  ]

  return colors[randomInteger(0, colors.length)];
}


var openPopup = function () {
  setup.classList.remove('hidden');
};

var closePopup = function () {
  setup.classList.add('hidden');
};

setupOpen.addEventListener('click', function (evt) {
  openPopup();
});

setupClose.addEventListener('click', function (evt) {
  closePopup();
});

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    openPopup();
  }
});

document.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ESC_KEYCODE) {
    closePopup();
  }
});

inputName.addEventListener('keydown', function (evt) {
  evt.stopPropagation();
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    closePopup();
  }
});

wizardCoat.addEventListener('click', function (evt) {
  var currentCoat = getRandomCoat();
  wizardCoat.style.fill = currentCoat;
  coatInput.value = currentCoat;
});

wizardEye.addEventListener('click', function (evt) {
  var currentEye = getRandomEye();
  wizardEye.style.fill = currentEye;
  eyeInput.value = currentEye;
});

wizardFire.addEventListener('click', function (evt) {
  var currentFire = getRandomFire();
  wizardFire.style.background = currentFire;
  fireInput.value = currentFire;
});


var similarListElement = setup.querySelector('.setup-similar-list');

var renderWizard = function (wizard) {

  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;

  return wizardElement;
}

var successHandler = function (wizards) {
  var fragment = document.createDocumentFragment();

  for (var i = 0; i < 4; i++) {
    fragment.appendChild(renderWizard(wizards[i]));
  }
  similarListElement.appendChild(fragment);

  setup.querySelector('.setup-similar').classList.remove('hidden');
};

var errorHandler = function (errorMessage) {
  var node = document.createElement('div');
  node.style = 'z-index: 100; margin: 0 auto; text-align: center; background-color: red;';
  node.style.position = 'absolute';
  node.style.left = 0;
  node.style.right = 0;
  node.style.fontSize = '30px';

  node.textContent = errorMessage;
  document.body.insertAdjacentElement('afterbegin', node);
};


window.backend.load(successHandler, errorHandler);

var form = document.querySelector('.setup-wizard-form');

form.addEventListener('submit', function (evt) {
  window.backend.save(new FormData(form), closePopup, errorHandler)
  evt.preventDefault();
});



window.setup = {
  setupClose: setupClose,
  ESC_KEYCODE: ESC_KEYCODE,
  ENTER_KEYCODE: ENTER_KEYCODE
}

})();






















