"use strict";
var setup = document.querySelector('.setup');
setup.classList.remove('hidden');



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
    wizard.name = combineName;
  }
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

  wizard.coatColor = colors[Math.floor((Math.random() * 5) + 1)];
}

var getEyeColor = function () {
  var eyecolors = [
    'black',
    'red',
    'blue',
    'yellow',
    'green'
  ]

  wizard.eyesColor = eyecolors[Math.floor((Math.random() * 4) + 1)];
}

var getRandomWizard = function () {
  getWizardsName();
  getWizardColor();
  getEyeColor();
}

var wizards = [];
var wizard = {};

getRandomWizard();

console.log(wizard);
















