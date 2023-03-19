
let arr = new Array(15).fill(0)

arr.forEach((_, index, arr) => index % 2 === 0 ? arr[index] = 0 : arr[index] = 1)

result1.innerHTML = `[${arr}]`