var request = require('request'),
    key = 'trnsl.1.1.20160603T101705Z.9b5f1839eeb01c80.08f3a20244e932dafeca94c3b10df6fed7775497',
    api = 'https://translate.yandex.net/api/v1.5/tr.json/translate',
    text = 'Hi';
    url = api+'?';
    url+='key='+key;
    url+='&text='+text;
    url+='&lang=en-ru';
        request({
         method: 'post',
         uri: url,
        },
         function (error,response,body){
             if(error){
                 return console.error(error);
             }
             console.log(response.statusCode);
             console.log(body);
          })




