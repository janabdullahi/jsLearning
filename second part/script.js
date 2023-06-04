// strict : is used to write secure javascript code
'use strict';
// it should be the very first statement otherwise its not working except comment

// let tree = 9;
// if (tree <=9){
//     tre++;
//     console.log(tree)
// }
//  its showing the error nad error line

function logger(){
    console.log("This is simple function without argument parameters")
}

logger();


function para(apple, banana)
{
    return (`I have ${apple} apples and ${banana} bananas`)
}

const pa = para(4,4)
console.log(pa)

// anynomous function : a function without name
const fruits = function(apple,banana)
{
    return (`I have ${apple} apples and ${banana} bananas`)
}
const fruit = fruits(10,2)
console.log(fruit)

function calBirth(birthYear){
    return `Your ${2023 - birthYear} years old.`
}
const birth = calBirth(2000)
console.log(birth)

// anynomous function : a function without name
const yearsOld = function (birthYear){
    return `Your ${2023 - birthYear} years old.`
}
const year = yearsOld(2000)
console.log(year)


function fruitCount(count){
    return `${count}`
}

function juice(apple, orange){
    const appleCount = fruitCount(3)
    const orangeCount = fruitCount(3)
    return `Make me a juice of ${appleCount} apple and ${orangeCount} orange.`
}

const counting = juice(5,5)
console.log(counting)
