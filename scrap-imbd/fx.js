const request = require('request-promise')
const cheerio = require('cheerio')
const fs = require('fs')

const Fx = (() => {
    return {
        load: URLS => {
            let genres = []
            let movieData = []

            URLS.map( async movie => {
                const response = await request({
                    uri: movie,
                    headers: {
                        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/' +
                                '*;q=0.8',
                        'Accept-Encoding': 'gzip, deflate, br',
                        'Accept-Language': 'en-US,en;q=0.9,fr;q=0.8,ro;q=0.7,ru;q=0.6,la;q=0.5,pt;q=0.4,de;q=0.3',
                        'Cache-Control': 'max-age=0',
                        'Connection': 'keep-alive',
                        'Host': 'www.imdb.com',
                        'Upgrade-Insecure-Requests': '1',
                        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, lik' +
                                'e Gecko) Chrome/68.0.3440.106 Safari/537.36'
                    },
                    gzip: true
                });
            
                let $ = cheerio.load(response)
            
                let title = $('div[class="title_wrapper"] > h1').text().trim()
                let rating = $('div[class="ratingValue"] > strong > span').text()
                let poster = $('div[class="poster"] > a > img').attr('src')
                let totalRatings = $('div[class="imdbRating"] > a').text()
                let releaseDate = $('a[title="See more release dates"]').text().trim()
                $('div[class="title_wrapper"] a[href^="/search/title?"]').each((i, el) => {
                   let genre = $(el).text()
                   genres.push(genre)
                })
    
                movieData.push({
                    title,
                    rating,
                    poster,
                    totalRatings,
                    releaseDate,
                    genres
                })

                fs.writeFileSync('./data.json', JSON.stringify(movieData), 'utf-8')

                console.log(movieData)
                
            })
        }
    }
})()

module.exports = Fx