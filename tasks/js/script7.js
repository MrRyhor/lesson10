const arrLength = parseInt(prompt('Введите длинну массива:'))

const arr = []

// for (let i = 1; i <= arrLength; i++) {
//     if (i % 3 === 0) {
//         arr.push(i)
//     }
// }
// arr.reverse()

for (let i = arrLength -1; i > 0; i--) {
    if (i % 3 === 0) {
        arr.push(i)
    }    
}

result1.innerHTML = `[${arr}]`
