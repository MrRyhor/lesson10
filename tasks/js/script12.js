const arrLength = parseInt(prompt('Введите длину массива:'))
const arr = []

for (let i = 0; i < arrLength; i++) {
    for (let j = 0; j < 3; j++) {
        arr.push(i+1)
    }    
}

result1.innerHTML = `[${arr}]`
