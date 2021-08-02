import { Composer, Markup } from 'telegraf';

export const Start = Composer.command('start', async (ctx) => {
    let text =
        `Hi I'm LOVELY 2.0 <a href="https://telegra.ph/file/38f9badec49fd74a2ba93.jpg">.</a>\n` +
        `I Play Songs in Group Voice Chats very smoothly and without any lags add me and my assistant @LOVELY2VC in your group for enjoying music.\n` +
        `I'm developed by <a href="t.me/TUSHAR204">「ƬƲֆӇƛƦ ✘ ԼƠꪜЄԼƳ」🇮🇳</a`
    await ctx.replyWithHTML(text, {
        ...Markup.inlineKeyboard([
            [Markup.button.url('𝗦𝗨𝗣𝗣𝗢𝗥𝗧 𝗚𝗥𝗢𝗨𝗣', 'https://t.me/LOVELYAPPEAL')]
        ]),
        disable_web_page_preview: false
    })
})
