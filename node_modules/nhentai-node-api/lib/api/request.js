const requestPromise = require('request-promise'),
      cheerio        = require('cheerio')
      
module.exports = async (url, qs = {}) => {

    try {
        let $ = await requestPromise({
            uri: url,
            qs,
            transform: function (body) {
                return cheerio.load(body, { decodeEntities: false })
            }
        })
        return $
    }
    catch (e) {
        return null
    }

}