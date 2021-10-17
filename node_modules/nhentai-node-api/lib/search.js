const req = require('./api/request'),
      { RequestError } = require('request-promise/errors'),
      { previewScraper } = require('./api/scraper')

module.exports = async (query, sort = 'popular', page = 1) => {

    //checking args
    if (!query) throw new Error('Query cannot be empty')

    if (isNaN(page)) throw new TypeError('Page must be a number')
    if (!Number.isInteger(parseFloat(page))) throw new TypeError('Page must be an integer')
    page = parseInt(page)
    if (page < 1) throw new Error('Page must be greater than or equal to 1')

    sort = sort.toLowerCase()
    if (!['popular', 'popular-week', 'popular-today', 'date'].includes(sort)) throw new Error('Invalid sorting. Must be either "popular" or "date".')

    const $ = await req('https://nhentai.net/search/', { q: query, page, sort })
    if (!$) throw new RequestError('Not found') 

    return previewScraper($, 'search')

}