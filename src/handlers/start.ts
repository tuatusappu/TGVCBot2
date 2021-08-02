import { Composer, Markup } from 'telegraf';

export const Start = Composer.command('start', async (ctx) => {
    let text =
        `нєℓℓο <a href="tg://user?id=${ctx.from.id}">${ctx.from.first_name} ${ctx.from.first_name}</a>\n` +
        'ι'м [,](https://telegra.ph/file/38f9badec49fd74a2ba93.jpg) ℓονєℓγ 2.0'
'ι ϲαи ρℓαγ мυѕιϲ ιи γουя gяουρ νοιϲє ϲнατ νєяγ ѕмοοτнℓγ αи∂ ωιτнουτ αиγ ℓαgѕ.'
'∂єνєℓορє∂ ϐγ τєαм [ℓονєℓγ](https://t.me/ABOUTVEDMAT) .'
'τнαиκѕ το [Λгɳαɓ](t.me/Arnab431) ƒοя нєℓριиg υѕ ƒοя ϲяєατιиg ѕυρєя ϐοτ.'
    await ctx.replyWithHTML(text, {
        ...Markup.inlineKeyboard([
            [Markup.button.url('➕𝘼𝘿𝘿 𝙏𝙊 𝙂𝙍𝙊𝙐𝙋➕', 't.me/LOVELY2_ROBOT?startgroup=true')]
        ]),
        disable_web_page_preview: true
    })
})
