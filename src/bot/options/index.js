
import { sayHi, sayQtal } from '../actions';

export const options = [
    {
        name: "sticker",
        type: "on",
        description: "Send an sticker and i'll answer",
        action: sayQtal
    },
    {
        name: "hi",
        type: "hears",
        description: "Say hi and i'll reply",
        action: sayHi
    }
];