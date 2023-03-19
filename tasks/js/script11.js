const arrLength = parseInt(prompt('Введите длину массива:'))
const arr = []

for (let i = 0; i < arrLength; i++) {
    if (i % 2 === 0) arr.push(1)
    if (i % 2 !==0) arr.push(i % 5)    
}

result1.innerHTML = `[${arr}]`
