'use strict';
const temprature1 = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5]
const temprature2 = [3, 4, 12, -18, 22, 91, 2, 4, 7, 14, 9, 5]
const merge = temprature1.concat(temprature2)

// temprature amplitude = max value  - min value


const funcMax = function (temp) {
    let max = temp[0]
    let min = temp[0]
    for (let i = 0; i < temp.length; i++) {
        let currTmp = temp[i]
        if (currTmp == 'error') continue
        if (currTmp > max) max = currTmp
        if (currTmp < min) min = currTmp
    }
    console.log("maxx : ", max)
    console.log("minn : ", min)
    return max - min
}
const ampl = funcMax(merge)
console.log("the amplitude is ", ampl)



const measurement = function(){
    const obj = {
        type : 'celius',
        value : prompt("value: ") // propmt always return string
    }
    const kelvin = Number(obj.value) + 273 // that's why we need to convert it to number first and then add it.
    return kelvin
}

console.log(measurement())

// DOM : document object model is for accessing the HTML elements and manipulating them
// console.log(document.querySelector(".paragraph"));
// console.log(document.querySelector(".paragraph").textContent);
console.log(document.querySelector(".paragraph").textContent = 'Try To Find The Correct Number');

// console.log(document.querySelector(".guess").textContent);
// console.log(document.querySelector(".paragraph").value = '56');

const number = Math.trunc(Math.random() * 20)
document.querySelector(".number").textContent = number;

document.querySelector(".click").addEventListener('click', function(){
    const guess = Number(document.querySelector(".input").value)
    console.log(guess)
    if(!guess)
    {
        console.log(document.querySelector(".paragraph").textContent = 'Wrong guess')
    }
})