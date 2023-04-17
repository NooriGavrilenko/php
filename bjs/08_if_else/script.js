let minValue = parseInt(prompt('Минимальное знание числа для игры', '0'));
minValue = isNaN(minValue) ? 0 : minValue = minValue;
minValue < 0 ? minValue = 0 : minValue = minValue;

let maxValue = parseInt(prompt('Максимальное знание числа для игры', '100'));
isNaN(maxValue) ? maxValue = 999 : maxValue = maxValue;
maxValue > 999 ? maxValue = 999 : maxValue = maxValue;

alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
let answerNumber = Math.floor((minValue + maxValue) / 2);
let orderNumber = 1;
let gameRun = true;

const orderNumberField = document.getElementById('orderNumberField');
const answerField = document.getElementById('answerField');

orderNumberField.innerText = orderNumber;
answerField.innerText = `Вы загадали число ${answerNumber }?`;

function numToPr(number) {
    const
        h = ['сто', 'двести', 'триста', 'четыреста', 'пятьсот', 'шестьсот', 'семьсот', 'восемьсот', 'девятьсот'],
        t = ['', 'двадцать', 'тридцать', 'сорок', 'пятьдесят', 'шестьдесят', 'семьдесят', 'восемьдесят', 'девяносто'],
        o = ['один', 'два', 'три', 'четыре', 'пять', 'шесть', 'семь', 'восемь', 'девять'],
        p = ['одиннацать', 'двенадцать', 'тринадцать', 'четырнадцать', 'пятнадцать', 'шестнадцать', 'семнадцать', 'восемнадцать', 'девятнадцать'];
    let str = number.toString(),
        out = '';

    if (str.length == 1) return o[number - 1];
    else if (str.length == 2) {
        if (str[0] == 1) out = p[parseInt(str[1]) - 1];
        else out = (t[parseInt(str[0]) - 1] + ((str[1] != '0') ? (' ' + o[parseInt(str[1]) - 1]) : ''));
    } else if (str.length == 3) {
        out = (h[parseInt(str[0]) - 1] + ((str[1] != '0') ? (' ' + t[parseInt(str[1]) - 1]) : '') + ((str[2] != '0') ? (' ' + o[parseInt(str[2]) - 1]) : ''));
    }

    let arr = out.split('');
    arr[0] = arr[0].toUpperCase();
    out = arr.join('');
    return out;
}


document.getElementById('btnRetry').addEventListener('click', function () {
    minValue = 0;
    maxValue = 100;
    orderNumber = 0;
})

document.getElementById('btnOver').addEventListener('click', function () {
    let phraseRandom = 0;
    let answerPhrase = '';
    let sAnswer = '';
    if (gameRun) {
        if (minValue === maxValue) {
            phraseRandom = Math.round(Math.random());
            answerPhrase = (phraseRandom === 1) ?
                `Вы загадали неправильное число!\n\u{1F914}` :
                `Я сдаюсь..\n\u{1F92F}`;

            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            minValue = answerNumber + 1;
            answerNumber = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;

            phraseRandom = Math.round(Math.random() * 2);

            answerPhrase = (phraseRandom === 0) ?
                `Вы загадали число ` : answerPhrase = (phraseRandom === 1) ?
                `Это легко! Ты загадал ` : `Наверное, это `;
            sAnswer = numToPr(answerNumber);

            sAnswer.length < 20 ?

                answerField.innerText = (answerNumber > maxValue) ?
                answerPhrase + sAnswer : answerField.innerText = (answerNumber < minValue) ?
                answerPhrase + sAnswer :
                answerPhrase + sAnswer :

                answerField.innerText = (answerNumber > maxValue) ?
                answerPhrase + `${answerNumber }` : answerField.innerText = (answerNumber < minValue) ?
                answerPhrase + `${answerNumber }` :
                answerPhrase + `${answerNumber }`;

        }
    }
})

document.getElementById('btnLess').addEventListener('click', function () {
    let phraseRandom = 0;
    let answerPhrase = '';
    let sAnswer = '';
    if (gameRun) {
        if (minValue === maxValue) {
            phraseRandom = Math.round(Math.random());
            answerPhrase = (phraseRandom === 1) ?
                `Вы загадали неправильное число!\n\u{1F914}` :
                `Я сдаюсь..\n\u{1F92F}`;

            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            maxValue = answerNumber + 1;
            answerNumber = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;

            phraseRandom = Math.round(Math.random() * 2);

            answerPhrase = (phraseRandom === 0) ?
                `Вы загадали число ` : answerPhrase = (phraseRandom === 1) ?
                `Это легко! Ты загадал ` : `Наверное, это `;
            sAnswer = numToPr(answerNumber);

            sAnswer.length < 20 ?

                answerField.innerText = (answerNumber > minValue) ?
                answerPhrase + sAnswer : answerField.innerText = (answerNumber < maxValue) ?
                answerPhrase + sAnswer :
                answerPhrase + sAnswer :

                answerField.innerText = (answerNumber > minValue) ?
                answerPhrase + `${answerNumber }` : answerField.innerText = (answerNumber < maxValue) ?
                answerPhrase + `${answerNumber }` :
                answerPhrase + `${answerNumber }`;

        }
    }
})

document.getElementById('btnEqual').addEventListener('click', function () {
    let phraseRandom = 0;

    phraseRandom = Math.round(Math.random() * 2);

    if (gameRun) {
        answerField.innerText = (phraseRandom === 0) ?
            `Я всегда угадываю!\n\u{1F60E} ` : answerPhrase = (phraseRandom === 1) ?
            `Это было легко!\n\u{1F60E} ` : `Это победа!\n\u{1F60E}`;
        gameRun = false;
    }
})