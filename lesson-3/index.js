var http = require('http'),
    PORT = 8000,
    h = [],
    answer = [],
    request = require('request'),
    cheerio = require('cheerio');

request('https://news.yandex.ru/', function (error, response, html){
    if (!error && response.statusCode == 200) {
        var $ = cheerio.load(html);
        $('div[class=story__content]').eq(1).children('h2').each(function (i, element) {
            h = '<h2>' + $(element).text().trim() + '</h2>';
        });
        $('div[class=story__content]').eq(1).children('div').each(function (i, element) {
            answer = '<div style="outline:1px solid black; float:left;">' + $(element).text().trim() + '</div>';
        });
    }
});

http.createServer(function(request, response){
    response.writeHead(200, {
        'Content-Type': 'text/html',
    });

    response.write(h+answer);
    response.end();
})
    .listen(PORT, function(){
        console.log("Let's get started: ", PORT);
    })