const mongoClient = require('mongodb').MongoClient;
const config = require('./config/main');

var book = [
    {
        step: '1',
        data: '/static/book/1.png',
        text: 'Необходимо построить сетевой график, рассчитать наиболее ранние и наиболее поздние сроки наступления событий, найти критический путь, определить полные и независимые резервы времени всех работ и коэффициенты напряженности некритических дуг с помощью данных, представленных в таблице.'
    },
    {
        step: '2',
        data: '/static/book/2.png',
        text: 'Сначала строим структурный сетевой график и вводим правильную нумерацию событий'
    },
    {
        step: '3',
        data: '/static/book/3.png',
        text: 'Наиболее ранние сроки наступления событий находим по формуле, где максимум берется по всем событиям j, непосредственно предшествующим событию i. Начальному событию присваиваем 0.'
    },
    {
        step: '4',
        data: '/static/book/4.png',
        text: 'Наиболее поздние сроки наступления событий находим по формуле, где минимум берется по всем событиям j, непосредственно следующими за событием i.'
    },
    {
        step: '5',
        data: '/static/book/5.png',
        text: 'Результаты расчетов отразим на сетевом графике. Ранние сроки наступления событий запишем над кружками, изображающими эти события, поздние сроки наступления событий – под кружками'
    },
    {
        step: '6',
        data: '/static/book/6.png',
        text: 'Найдем резервы времени работ и сведём полученные данные в таблицу. Наиболее ранний возможный срок начала работы равен наиболее раннему сроку наступления событияа наиболее поздний допустимый срок окончания работы'
    },
    {
        step: '7',
        data: '/static/book/7.png',
        text: 'Критические работы – b3, b10, b11. Резервы времени этих работ равны нулю. Выделим критический путь двойными стрелками'
    },
    {
        step: '8',
        data: '/static/book/8.png',
        text: 'Выводим резервы времени и коэффициенты напряженности некритических дуг'
    }
];

mongoClient.connect('mongodb://root:example@localhost:27017/', (err, client) => {
    if (err) {
        return console.log(err);
    }
    let database = client.db('netplan');

    var db = database.collection('book');

    db.drop();

    db.insertMany([
        {
            step: '1',
            data: '/static/book/1.png',
            text: 'Необходимо построить сетевой график, рассчитать наиболее ранние и наиболее поздние сроки наступления событий, найти критический путь, определить полные и независимые резервы времени всех работ и коэффициенты напряженности некритических дуг с помощью данных, представленных в таблице.'
        },
        {
            step: '2',
            data: '/static/book/2.png',
            text: 'Сначала строим структурный сетевой график и вводим правильную нумерацию событий'
        },
        {
            step: '3',
            data: '/static/book/3.png',
            text: 'Наиболее ранние сроки наступления событий находим по формуле, где максимум берется по всем событиям j, непосредственно предшествующим событию i. Начальному событию присваиваем 0.'
        },
        {
            step: '4',
            data: '/static/book/4.png',
            text: 'Наиболее поздние сроки наступления событий находим по формуле, где минимум берется по всем событиям j, непосредственно следующими за событием i.'
        },
        {
            step: '5',
            data: '/static/book/5.png',
            text: 'Результаты расчетов отразим на сетевом графике. Ранние сроки наступления событий запишем над кружками, изображающими эти события, поздние сроки наступления событий – под кружками'
        },
        {
            step: '6',
            data: '/static/book/6.png',
            text: 'Найдем резервы времени работ и сведём полученные данные в таблицу. Наиболее ранний возможный срок начала работы равен наиболее раннему сроку наступления событияа наиболее поздний допустимый срок окончания работы'
        },
        {
            step: '7',
            data: '/static/book/7.png',
            text: 'Критические работы – b3, b10, b11. Резервы времени этих работ равны нулю. Выделим критический путь двойными стрелками'
        },
        {
            step: '8',
            data: '/static/book/8.png',
            text: 'Выводим резервы времени и коэффициенты напряженности некритических дуг'
        }
    ]);

    console.log('Done!');
});
