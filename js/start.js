var CLOUD_WIDTH = 410;
var CLOUD_HEIGHT = 270;
var RESULT_WIDTH = 40;
var TEXT_Y = 270;
var TEXT_X = 140;
var NUMBER_X = 140;
var PLAYER_PAD = 50;
var MAX_HEIGHT = 150;
var PADDING_TOP = 100;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);

  ctx.fillStyle = 'black';
  ctx.font = '16px PT Mono';
  ctx.fillText("Ура вы победили!", 120, 40);
  ctx.fillText("Список результатов:", 120, 60);
}

window.renderStatistics = function(ctx, names, times) {
  renderCloud(ctx, 110, 20, 'rgba(0, 0, 0, 0.3)');
  renderCloud(ctx, 100, 10, '#fff');

  var maxTime = times[0];

  var getMaxTime = function () {

    for (var i = 0; i < times.length; i++) {
      if (times[i] > times[0]) {
        maxTime = times[i];
      }
    }
    return maxTime;
  }

  var getColumns = function () {
    for (var i = 0; i < names.length; i++) {
      var findProcent = Math.round(times[i] / maxTime * 100);
      var colHeight = findProcent / 100 * MAX_HEIGHT;

      PADDING_TOP = 100 + (MAX_HEIGHT - colHeight);

      ctx.fillStyle = 'black';
      ctx.fillText(names[i], TEXT_X, TEXT_Y);
      ctx.fillText(Math.round(times[i]), TEXT_X, PADDING_TOP - 5);

      if (names[i] === 'Вы') {
        ctx.fillStyle = 'rgba(255, 0, 0, 1)';
      } else {
        ctx.fillStyle = 'hsl(240, ' + Math.round(Math.random() * 100) + '%, 50%)';
      }

      ctx.fillRect(TEXT_X, PADDING_TOP, RESULT_WIDTH, colHeight);
      TEXT_X += RESULT_WIDTH + PLAYER_PAD;
    }
  }
  getMaxTime();
  getColumns();
 }









