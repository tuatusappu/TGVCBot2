import { Composer, Markup } from 'telegraf';

export const Start = Composer.command('start', async (ctx) => {
    let text =
        `Hi <a href="tg://user?id=${ctx.from.id}">${ctx.from.first_name} ${ctx.from.first_name}</a>\n` +
        `ι'м <a href=a"https://telegra.ph/file/38f9badec49fd74a2ba93.jpg">ℓονєℓγ 2.0 .\n` +
        `ι ϲαи ρℓαγ мυѕιϲ ιи γουя gяουρ νοιϲє ϲнατ νєяγ ѕмοοτнℓγ αи∂ ωιτнουτ αиγ ℓαgѕ.\n` +
        `∂єνєℓορє∂ ϐγ τєαм <a href="https://t.me/ABOUTVEDMAT">𝗟𝗢𝗩𝗘𝗟𝗬</a>` .\n` +
        `τнαиκѕ το <a href="http://t.me/Arnab431">Λгɳαɓ<a> ƒοя нєℓριиg υѕ ƒοя ϲяєατιиg ѕυρєя ϐοτ.`
    await ctx.replyWithHTML(text, {
        ...Markup.inlineKeyboard([
            [Markup.button.url('➕𝗔𝗗𝗗 𝗧𝗢 𝗚𝗥𝗢𝗨𝗣➕', 'https://t.me/LOVELY2_ROBOT?startgroup=true')]
        ]),
        disable_web_page_preview: true
    })
})
