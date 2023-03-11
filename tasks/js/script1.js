function getRandomNumbers(minVal = 1, maxVal = 10000) {
    return minVal + Math.floor(Math.random() * maxVal)
}

function createRandomArr(qntElements) {
    const randomArr = new Array(qntElements).fill(0).map(() => getRandomNumbers())
    return randomArr
}

const stockPricesList = createRandomArr(15)
console.log(stockPricesList) // для проверки

//======================= Task 1 =====================================================================================================
// Сформувати новий масив, у якому є тільки ті, що більші за 1000 грн.
const pricesGreaterThan1000 = stockPricesList.filter(element => element > 1000)

//======================= Task 2 =====================================================================================================
// Сформувати новий масив, у якому є номери тільки тих, що більші за 1000 грн.
const indexPricesGreaterThan1000 = stockPricesList.map((element, index) => {if (element > 1000) return index}).filter(element => element !== undefined)
//или
//const indexPricesGreaterThan1000 = stockPricesList.reduce((indexPrice, element, index) => {if(element > 1000) {indexPrice.push(index)} return indexPrice},[])

//======================= Task 3 =====================================================================================================
// Сформувати список з тих цін, які більші за попереднє значення
const pricesGreaterThanPreviousValue = stockPricesList.sort((element1, element2) => element1 - element2)

//======================= Task 4 =====================================================================================================
// Сформувати новий масив, що міститиме значення цін у відсотках стосовно максимального
const maxPrice = Math.max(...stockPricesList)
const pricesPercentOfMaxPrice = stockPricesList.map(element => Math.abs(((element * 100) / maxPrice) - 100).toFixed(2))

//======================= Task 5 =====================================================================================================
// Підрахувати кількість змін цін
let counterPriceChanges = 0
const qntOfPriceChanges = stockPricesList.reduce((prevPrice, element) => {
    if (element !== prevPrice) {
        prevPrice = element, counterPriceChanges++
    }
    return counterPriceChanges
})

//======================= Task 6 =====================================================================================================
// Визначити, чи є ціна, що менше 1000
const isPriceLessThan1000 = stockPricesList.some(element => element < 1000)

//======================= Task 7 =====================================================================================================
//Визначати, чи усі ціни більше за 1000
const isPricesGreaterThan1000 = stockPricesList.every(element => element > 1000)

//======================= Task 8 =====================================================================================================
// Підрахувати кількість цін, що більше за 1000
const qntPricesGreaterThan1000 = pricesGreaterThan1000.reduce((prevQntOfPrice, element) => element > 1000 ? prevQntOfPrice+1 : prevQntOfPrice, 0)

//======================= Task 9 =====================================================================================================
// Підрахувати суму цін, що більше за 1000
const sumOfPricesGreaterThan1000 = pricesGreaterThan1000.reduce((prevPrice, element) => element > 1000 ? prevPrice += element : prevPrice)

//======================= Task 10 =====================================================================================================
//Знайти першу ціну, що більше за 1000
const firstPriceGreaterThan1000 = stockPricesList.reduce((prevPrice, element) => prevPrice > 1000 ? prevPrice : element)

//======================= Task 11 =====================================================================================================
//Знайти індекс першої ціни, що більше за 1000
const indexOfFirstPriceGreaterThan1000 = stockPricesList.findIndex(element => element > 1000)

//======================= Task 12 =====================================================================================================
//Знайти останню ціну, що більше за 1000
const lasttPriceGreaterThan1000 = stockPricesList.reduce((prevPrice, element) => (element > 1000) ? prevPrice = element : prevPrice)

//======================= Task 13 =====================================================================================================
//Знайти індекс останньої ціни, що більше за 1000
const indexOfLastPriceGreaterThan1000 = stockPricesList.reduce((prevPrice, element, index) => { if (element > 1000) return index })
// или
//const indexOfLastPriceGreaterThan1000 = stockPricesList.lastIndexOf(element => element > 1000)

document.write(`<p><span>1)</span> [${pricesGreaterThan1000}]</p>`)
document.write(`<p><span>2)</span> [${indexPricesGreaterThan1000}]</p>`)
document.write(`<p><span>3)</span> [${pricesGreaterThanPreviousValue}]</p>`)
document.write(`<p><span>4)</span> [${pricesPercentOfMaxPrice}]</p>`)
document.write(`<p><span>5)</span> [${qntOfPriceChanges}]</p>`)
document.write(`<p><span>6)</span> [${isPriceLessThan1000}]</p>`)
document.write(`<p><span>7)</span> [${isPricesGreaterThan1000}]</p>`)
document.write(`<p><span>8)</span> [${qntPricesGreaterThan1000}]</p>`)
document.write(`<p><span>9)</span> [${sumOfPricesGreaterThan1000}]</p>`)
document.write(`<p><span>10)</span> [${firstPriceGreaterThan1000}]</p>`)
document.write(`<p><span>11)</span> [${indexOfFirstPriceGreaterThan1000}]</p>`)
document.write(`<p><span>12)</span> [${lasttPriceGreaterThan1000}]</p>`)
document.write(`<p><span>13)</span> [${indexOfLastPriceGreaterThan1000}]</p>`)

