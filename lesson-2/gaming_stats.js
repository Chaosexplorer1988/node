var fs = require('fs');
try{
data = fs.readFileSync('t.txt')

if (!data) {
    throw('Ошибка чтения файла');
}
    var result = data.toString().split('\n');
    result.pop();
    var allGames = result.length;
    var wins = 0;
    var fails = 0;
    var tempmaxwins = 0;
    var tempmaxfails = 0;
    var maxwins = 0;
    var maxfails = 0;
    for (var i = 0; i < result.length; i++) {
    switch (result[i]) {
        case 'Победа':
            wins++;
            tempmaxwins++;
            tempmaxfails = 0;
            if(tempmaxwins > maxwins)
                maxwins = tempmaxwins;
            break;
        case 'Проигрыш':
            fails++;
            tempmaxfails++;
            tempmaxwins = 0;
            if(tempmaxfails > maxfails)
                maxfails = tempmaxfails;
            break;
    }
}
console.log('Общее количество партий: ' + allGames
    + '\nколичество побед: ' + wins
    + '\nколичество поражений: ' + fails
    + '\nМаксимальное количество побед: ' + maxwins
    + '\nМаксимальное количество поражений: ' + maxfails
);
}catch (err) {
    console.log(err);
}

