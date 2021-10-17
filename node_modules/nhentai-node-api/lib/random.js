const req = require('./api/request'),
      { RequestError } = require('request-promise/errors'),
      getDoujin = require('./getDoujin')

module.exports = async (simplified = false) => {

    const $ = await req('https://nhentai.net')
    if (!$) throw new RequestError('Not found') 

    const lastPage = parseInt($('.last').attr('href').split('=')[1]),
          totalDoujins = lastPage * 25,
          id = Math.floor(Math.random() * totalDoujins) + 1

    const doujin = await getDoujin(id, simplified)

    return doujin

}