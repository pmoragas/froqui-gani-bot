const Telegraf = require('telegraf');

const config = require('../config.json');

const bot = new Telegraf(config.token);
bot.start((ctx) => ctx.reply('Et recomano restaurants!'));
bot.help((ctx) => ctx.reply('Send me a sticker'));
bot.on('sticker', (ctx) => ctx.reply('👍 q tal'));
bot.hears('hi', (ctx) => ctx.reply('Hey there'));
bot.startPolling();