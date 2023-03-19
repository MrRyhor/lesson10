function createArr(arrLength) {
    let arr = []
    for (let i = 0; i < arrLength; i++) {
        if (i === 0) arr[i] = 1
        else if (i === 1) arr[i] = 2
        else arr[i] = arr[i - 2] + arr[i - 1]
    }
    return arr
}

const arrLength = parseInt(prompt('Введите длинну массива:'))
const fibonachiArr = createArr(arrLength)

result1.innerHTML = `[${fibonachiArr}]`


