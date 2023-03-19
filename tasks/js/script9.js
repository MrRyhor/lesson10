function createArr(arrLength) {
    const arr = []
    next: for (let i = 2; i <= arrLength; i++) {
        for (let j = 2; j < i; j++) {
            if (i % j === 0)
            continue next            
        }
        arr.push(i)
    }
    return arr
}

const arrLength = parseInt(prompt('Введите длинну массива:'))

const simpleNumArr = createArr(arrLength)

result1.innerHTML = `[${simpleNumArr}]`