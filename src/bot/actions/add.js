
import Scene from 'telegraf/scenes/base';
import WizardScene from 'telegraf/scenes/wizard';
import Markup from 'telegraf/markup';
import db from '../../bd';

export function addWizard() {
    let restaurant = {};

    const addWizard = new WizardScene('add-wizard',
        (ctx) => {
            restaurant = {};
            ctx.reply('Afegir restaurant. Escriu nom:')
            return ctx.wizard.next()
        },
        (ctx) => {
            restaurant.name = ctx.message.text.toLowerCase();
            ctx.reply('Nota de 1 a 10:')
            return ctx.wizard.next()
        },
        (ctx) => {
            restaurant.nota = ctx.message.text;

            if (restaurant.nota < 3 ) {
                ctx.reply('🤢');
            } else if ( restaurant.nota < 5 ) {
                ctx.reply('😓');
            }  else if ( restaurant.nota < 7 ) {
                ctx.reply('😃');
            } else {
                ctx.reply('😋');
            }

            ctx.reply('Especifica on és compartint ubicació');
            return ctx.wizard.next()
        },
        (ctx) => {
            restaurant.poblacio = ctx.message.location;
            restaurant.user = ctx.from;

            db.insert(restaurant);

            ctx.reply('Gràcies. Restaurant guardat.');
            return ctx.scene.leave()
        }
    );

    return addWizard;
}

export function add(ctx) {
    ctx.scene.enter('add-wizard')
}
