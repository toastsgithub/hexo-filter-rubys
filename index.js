const cheerio = require('cheerio')
const get = (from, ...selectors) =>
        [...selectors].map(s =>
            s
            .replace(/\[([^\[\]]*)\]/g, '.$1.')
            .split('.')
            .filter(t => t !== '')
            .reduce((prev, cur) => prev && prev[cur], from)
        );
// check plugin activity
const [isEnabled] = get(hexo.config, 'valkyr_auto_rubys.enable')
if (!isEnabled) {
    return
}
// init config, utils and data
const rubify = (ori, rb='') => `<ruby>${ori}<rt>${rb}</rt></ruby>`
const lexisConfigAdapter = config => {
    if (!config) return []
    return config.map(item => {
        const entry = Object.entries(item)[0]
        return {
            ori: entry[0],
            rep: entry[1]
        }
    })
}
const [lexisFromConfig] = get(hexo.config, 'valkyr_auto_rubys.lexis')
const lexis = lexisConfigAdapter(lexisFromConfig)

// register filter to hexo
hexo.extend.filter.register('after_post_render', function(data){
    const $ = cheerio.load(data.content, { decodeEntities: false })
    $('p').each((idx, $elm) => {
        let cookedHtml = $($elm).html()
        lexis.forEach((l) => cookedHtml = cookedHtml.replace(new RegExp(l.ori, 'g'), rubify(l.ori, l.rep)))
        $($elm).html(cookedHtml)
    })
    data.content = $.root().html()
    return data
});