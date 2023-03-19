const arrLength = parseInt(prompt('Введите длину массива:'))
const arr = []
const halfOfArr = Math.ceil( arrLength / 2)

for (let i = 1; i <= halfOfArr; i++) {
    arr.push(i)    
}

for (let i = arrLength ; i > halfOfArr; i--) {
    arr.push(i - 3)    
}

result1.innerHTML = `[${arr}]`
