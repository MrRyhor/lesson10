
const arr = []

for (let i = 0; i < 20; i++) {
    if (i % 2)
        arr.push(i)    
}

//========== Var. 2 ===========================================================================
// for (let i = 1; i < 20; i += 2) {
//     arr.push(i)    
// }

result1.innerHTML = `[${arr}]`