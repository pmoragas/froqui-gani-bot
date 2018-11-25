export function sayHi(ctx) {
    ctx.reply(`hi man ${ctx.from.first_name}!`);
}

export function sayQtal(ctx) {
    ctx.reply(`hey, q tal ${ctx.from.first_name}?`);
}

export function get(ctx) {
    // TODO
}