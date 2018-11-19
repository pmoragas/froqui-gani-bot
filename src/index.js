import bd from './bd';
import Telegraf from 'telegraf';
import config from '../config.json'

const bot = new Telegraf(config.token);
bot.start((ctx) => ctx.reply('Et recomano restaurants!'));
bot.help((ctx) => ctx.reply('Send me a sticker'));
bot.on('sticker', (ctx) => {
    const userId = ctx.from.id;

    bd.insert({userId: userId, sticker: 1});

    ctx.reply(`👍 q tal ${userId}`);
});

bot.hears('hi', (ctx) => ctx.reply('Hey there'));
bot.startPolling();