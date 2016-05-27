var ansi = require('simple-ansi');
var beeper = require('beeper');
var object = {
    name : "Пример",
    version : 1.1,
    options : {
        stuff : "more stuff"
    }
};

beeper('*--**--****-**-*---**');

console.log(ansi.magenta, object, ansi.reset);

console.log(ansi.bgCyan + "Произвольное Сообщение" + ansi.reset);

console.log(ansi.green + ansi.bgBlue + ansi.bold, "Прочитай этот текст если сможешь :)", ansi.reset);