const arrLength = parseInt(prompt('Введите длину массива:'))

const arr = new Array(arrLength).fill().map((_, index) => Math.pow(index, 2))

//=================== Var. 2 =============================================================

// for (let i = 0; i < arrLength; i++) {
//     arr.push(Math.pow(i, 2))    // 
// }

result1.innerHTML = `[${arr}]`