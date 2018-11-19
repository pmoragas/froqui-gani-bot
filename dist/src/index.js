'use strict';

var _bd = require('./bd');

var _bd2 = _interopRequireDefault(_bd);

var _telegraf = require('telegraf');

var _telegraf2 = _interopRequireDefault(_telegraf);

var _config = require('../config.json');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var bot = new _telegraf2.default(_config2.default.token);
bot.start(function (ctx) {
    return ctx.reply('Et recomano restaurants!');
});
bot.help(function (ctx) {
    return ctx.reply('Send me a sticker');
});
bot.on('sticker', function (ctx) {
    var userId = ctx.from.id;

    _bd2.default.insert({ userId: userId, sticker: 1 });

    ctx.reply('\uD83D\uDC4D q tal ' + userId);
});

bot.hears('hi', function (ctx) {
    return ctx.reply('Hey there');
});
bot.startPolling();