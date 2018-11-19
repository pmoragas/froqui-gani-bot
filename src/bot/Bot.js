class Bot {

    constructor( token ) {
        this.bot = new Telegraf(token);

    }

    configure() {
        bot.start((ctx) => ctx.reply('Et recomano restaurants!'));
        bot.help((ctx) => ctx.reply('Send me a sticker'));
        bot.on('sticker', (ctx) => {
            const userId = ctx.from.id;
            ctx.reply(`👍 q tal ${userId}`);
        });
        
        bot.hears('hi', (ctx) => ctx.reply('Hey there'));
    }

    start() {
        this.bot.startPolling();
    }

}