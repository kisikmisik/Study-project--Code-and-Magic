"use strict";
(function () {

var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = document.querySelector('.setup-close');
var inputName = document.querySelector('.setup-user-name');
var formSubmit = document.querySelector('.setup-submit');

var wizardCoat = document.querySelector('.setup-wizard .wizard-coat');
var wizardEye = document.querySelector('.setup-wizard .wizard-eyes');
var wizardFire = document.querySelector('.setup-fireball-wrap');

var coatInput = document.querySelector('input[name = "coat-color"]');
var eyeInput = document.querySelector('input[name = "eyes-color"]');
var fireInput = document.querySelector('input[name = "fireball-color"]');

var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;



var getRandomCoat = function () {
  var coatColors = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)'
  ];
  return coatColors[Math.floor(Math.random() * coatColors.length)];
};

var getRandomEye = function () {
  var eyeColors = [
  'black',
  'red',
  'blue',
  'yellow',
  'green'
  ];
  return eyeColors[Math.floor(Math.random() * eyeColors.length)];
};

var getRandomFire = function () {
  var fireColors = [
  '#ee4830',
  '#30a8ee',
  '#5ce6c0',
  '#e848d5',
  '#e6e848'
  ]
  return fireColors[Math.floor(Math.random() * fireColors.length)];
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


var getWizardsName = function () {
  var wizFirst = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон'
  ];

  var wizLast = [
  'да Марья',
  'Верон',
  'Мирабелла',
  'Вальц',
  'Онопко',
  'Топольницкая',
  'Нионго',
  'Ирвинг'
  ];

  for (var i = 0; i < wizLast.length; i++) {
    var combineName = wizFirst[Math.floor((Math.random() * 7) + 1)] + ' ' + wizLast[Math.floor((Math.random() * 7) + 1)];
  }
  return combineName;
}

var getWizardColor = function () {
  var colors = [
    'rgb(101, 137, 164)',
    'rgb(241, 43, 107)',
    'rgb(146, 100, 161)',
    'rgb(56, 159, 117)',
    'rgb(215, 210, 55)',
    'rgb(0, 0, 0)'
  ]

  return colors[Math.floor((Math.random() * 5) + 1)];
}

var getEyeColor = function () {
  var eyecolors = [
    'black',
    'red',
    'blue',
    'yellow',
    'green'
  ]

  return eyecolors[Math.floor((Math.random() * 4) + 1)];
}

var getRandomWizard = function () {
  return {
  name: getWizardsName(),
  coatColor: getWizardColor(),
  eyesColor: getEyeColor()
  }
};

var wizards = [];
var wizard = {};

for (var i = 0; i < 4; i++) {
  wizards.push(getRandomWizard());
}

document.querySelector('.setup-similar').classList.remove('hidden');

var similarListElement = document.querySelector('.setup-similar-list');

var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

for (var i = 0; i < 4; i++) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizards[i].name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizards[i].coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizards[i].eyesColor;

  similarListElement.appendChild(wizardElement);
};

window.setup = {
  setupClose: setupClose,
  ESC_KEYCODE: ESC_KEYCODE,
  ENTER_KEYCODE: ENTER_KEYCODE
}

})();






















