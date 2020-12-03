function random(min, max) {
    let formula = Math.random() * (max + 1 - min) + min
    let num = Math.floor(formula)

    return num
}

let quantity = +prompt('Введите количество примеров')
let numMin = +prompt(' Введите минимальное число')
let numMax = +prompt(' Введите максимальное число')


for (i = 0; i < quantity; i++) {
    let num1 = random(numMin, numMax)
    let num2 = random(numMin, numMax)

    let result
    let sym
    symbol = random(1, 4)

    if (symbol == 1) {
        result = num1 + num2
        sym = '+'
    } else if (symbol == 2) {
        result = num1 - num2
        sym = '-'
    } else if (symbol == 3) {
        result = num1 * num2
        sym = '*'
    } else {
        result = num1 / num2
        sym = '/'
    }
    let answer = +prompt(num1 + sym + num2)
    result = answer ? console.log(' Ваш ответ верный ' + result) : console.log('Ваш ответ не верный - ' + answer + '! Правильный ответ - ' + result);
}