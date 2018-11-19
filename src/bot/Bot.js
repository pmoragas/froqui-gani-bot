import Telegraf from 'telegraf';

import { options } from './options';

class Bot {

    constructor( token ) {
        this.bot = new Telegraf(token);
    }

    configure() {
        this.bot.start((ctx) => ctx.reply('Et recomano restaurants!'));

        this.bot.help((ctx) => ctx.reply(this.getHelpMessage()));

        for (let i = 0, len = options.length; i < len; i++) {
            const option = options[i];
            
            if ( option.type === 'on' ) {
                this.bot.on(option.name, (ctx) => ctx.reply(option.message(ctx)));
            } else {
                this.bot.hears(option.name, (ctx) => ctx.reply(option.message(ctx)));
            }
        }      
    }

    getHelpMessage() {
        let heplMessage = "";
        
        for (let i = 0, len = options.length; i < len; i++) {
            let option = options[i];
            heplMessage += `${option.name}: ${option.description}\n`;
        }

        return heplMessage;
    }

    start() {
        this.bot.startPolling();
    }

}

export default Bot;