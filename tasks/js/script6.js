const arrLength = parseInt(prompt('Введите длинну массива:'))
const arr = []

for (let i = 0; i < arrLength; i++) {
    if (i % 2 === 0)
        arr.push(i)
}

// for (let i = 0; i < arrLength; i+=2) {
//    arr.push(i)    
// }

result1.innerHTML = `[${arr}]`