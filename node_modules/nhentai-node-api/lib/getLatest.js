const req = require('./api/request'),
      { RequestError } = require('request-promise/errors'),
      { previewScraper } = require('./api/scraper')
     
module.exports = async (page = 1) => {

    //verifications
    if (isNaN(page)) throw new TypeError('Page must be a number')
    if (!Number.isInteger(parseFloat(page))) throw new TypeError('Page must be an integer')

    page = parseInt(page)

    if (page <= 0) throw new Error('Page must be greater than or equal to 1')

    //process
    const $ = await req('https://nhentai.net/?page=' + page)
    if (!$) throw new RequestError('Not found')

    return previewScraper($, 'latest')

}