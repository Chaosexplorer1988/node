
    var fs = require('fs');
    var readline = require('readline');

    var rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    console.log('Орел (1), Решка (2) или Выход (3)?');

    rl.on('line', function (cmd) {
        if (cmd == '3') {
            rl.close();
            console.log('Игра окончена');
            require('./gaming_stats');
        } else {
            var ar = new Array();
            ar[0] = "орел";
            ar[1] = "решка";
           var newThrow = Math.floor(Math.random() * (3 - 1)) + 1;
            if (cmd == newThrow) {
                console.log('Победа');
                try{
                fs.appendFileSync('t.txt', 'Победа\n');
                }catch (err){
                    console.log('Ошибка добавления в файл')
                }
            } else {
                if (cmd == 1 || cmd == 2) {
                    console.log('Проигрыш');
                    try{
                    fs.appendFileSync('t.txt', 'Проигрыш\n');
                    }catch (err){
                        console.log('Ошибка добавления в файл')
                    }
                } else {
                    console.log('Недопустимое значение');
                }
            }
            console.log('Орел (1), Решка (2) или Выход (3)?');
        }
    });
