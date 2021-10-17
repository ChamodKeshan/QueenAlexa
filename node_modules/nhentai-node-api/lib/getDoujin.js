const regex = require('./utils/regex'),
      req = require('./api/request'),
      { RequestError } = require('request-promise/errors'),
      { doujinScraper } = require('./api/scraper')

module.exports = async (identifier, simplified = false) => {

    //if identifier is an url, convert it to a proper id
    const id = identifier.toString().replace(regex.urlToId, '$2')

    const $ = await req(`https://nhentai.net/g/${id}/`)
    if (!$) throw new RequestError('Not found')

    return doujinScraper($, id, simplified)
    
}