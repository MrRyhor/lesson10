const x = parseInt(prompt('Введите цифру начала массива'))
const d = parseInt(prompt('Введите шаг между эл-тами массива'))
const arrLength = parseInt(prompt('Введите длинну массива'))

const arr = new Array(arrLength).fill().map((_,i) => x + i * d)


result1.innerHTML = `[${arr}]`