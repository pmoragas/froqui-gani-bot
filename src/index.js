import config from '../config.json'
import Bot from './bot';

const bot = new Bot(config.token);

bot.configure();

bot.start();