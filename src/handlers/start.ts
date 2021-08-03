import { Composer, Markup } from 'telegraf';

export const Start = Composer.command('start', async (ctx) => {
    let text =
        `Hi <a href="tg://user?id=${ctx.from.id}">${ctx.from.first_name}</a>\n` +
        `I Play Songs in Group Voice Chats.\n` +
        `I['](https://telegra.ph/file/cbbf01ed6f013ce07d54f.jpg)m developed by <a href="https://t.me/TUSHAR204">「ƬƲֆӇƛƦ ✘ ԼƠꪜЄԼƳ」🇮🇳</a>`
    await ctx.replyWithHTML(text, {
        ...Markup.inlineKeyboard([
            [Markup.button.url('➕𝗨𝗣𝗗𝗔𝗧𝗘𝗦 𝗖𝗛𝗔𝗡𝗡𝗘𝗟➕', 'https://t.me/ABOUTVEDMAT')]
        ]),
        disable_web_page_preview: true
    })
})
