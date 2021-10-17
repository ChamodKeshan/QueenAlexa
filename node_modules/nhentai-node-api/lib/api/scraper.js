const regex = require('../utils/regex'),
      utils = require('../utils/utils')

const availableLanguages = [ 'english', 'japanese', 'chinese' ],
      indexContainer = { latest: 'last', popular: 'first', search: 'first' }
      
module.exports = {

    doujinScraper ($, id, simplified) {

        let details = {},
            defaultTitle = $('#info').find('h1').text(),
            thumbnails = Object.entries($('.gallerythumb').find('img')).map(image => image[1].attribs? image[1].attribs['data-src']: null).filter(link => link)

        $('.tag-container.field-name').map((_, category) => {

            const prop = $(category).text().split(':')[0].split('\t').join('').split('\n').join('').toLowerCase()
            if (['languages', 'pages', 'uploaded'].includes(prop)) return 
            details[prop] = []
            
            $(category).find('.tag').map((_, tag) => {

                if (simplified) details[prop].push($(tag).find('.name').text())

                else {

                    let count = $(tag).find('.count').text()
                    
                    details[prop].push({
                        name: $(tag).find('.name').text(),
                        count: count ? count.includes('K') ? parseInt(count.split('K')[0]) * 1000 : parseInt(count) : null,
                        link: 'https://nhentai.net' + tag.attribs.href
                    })
                }
            })

        })

        return {

            id: id,
            title: {
                default: defaultTitle,
                pretty:  $('#info').find('h1 .pretty').text(),
                native: $('#info').find('h2').text()
            },
            language: defaultTitle.includes('[English]') ? 'english' :
                      defaultTitle.includes('[Chinese]') ? 'chinese' :
                                                           'japanese',
            cover: thumbnails[0],
            details,
            pages: Object.entries($('.gallerythumb').find('img')).map(image => image[1].attribs ? image[1].attribs['data-src'].replace(regex.imageFilter, '$1').replace('t.nhentai', 'i.nhentai') : null).filter(link => link),
            thumbnails,
            favorites: parseInt($('.nobold:last').text().split('(')[1].split(')')[0]),
            uploadedAt: new Date($('.nobold:first').attr('datetime')),
            link: `https://nhentai.net/g/${id}/`
        }
    },



    previewScraper ($, type = 'latest') {

        const results = []

        $(`.index-container:${indexContainer[type]}`).children('.gallery').children('a').map((i, book) => {

            const title = $(book).find('.caption').text()

            results.push({
                id: parseInt(book.attribs.href.replace(regex.gToId, '$1')),
                title,
                language: title.includes('[English]') ? 'english' :
                          title.includes('[Chinese]') ? 'chinese' :
                                                        'japanese',
                thumbnail: $(book).find('.cover img').attr('data-src'),
            })
        })

        return results
    }

}