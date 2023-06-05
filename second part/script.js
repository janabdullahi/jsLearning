// strict : is used to write secure javascript code
'use strict';
// it should be the very first statement otherwise its not working except comment

// let tree = 9;
// if (tree <=9){
//     tre++;
//     console.log(tree)
// }
//  its showing the error nad error line

function logger() {
    console.log("This is simple function without argument parameters")
}

logger();


function para(apple, banana) {
    return (`I have ${apple} apples and ${banana} bananas`)
}

const pa = para(4, 4)
console.log(pa)

// anynomous function : a function without name
const fruits = function (apple, banana) {
    return (`I have ${apple} apples and ${banana} bananas`)
}
const fruit = fruits(10, 2)
console.log(fruit)

function calBirth(birthYear) {
    return `Your ${2023 - birthYear} years old.`
}
const birth = calBirth(2000)
console.log(birth)

// anynomous function : a function without name
const yearsOld = function (birthYear) {
    return `Your ${2023 - birthYear} years old.`
}
const year = yearsOld(2000)
console.log(year)


function fruitCount(count) {
    return `${count}`
}

function juice(apple, orange) {
    const appleCount = fruitCount(3)
    const orangeCount = fruitCount(3)
    return `Make me a juice of ${appleCount} apple and ${orangeCount} orange.`
}

const counting = juice(5, 5)
console.log(counting)


function calAvg(x, y, z) {
    return (x + y + z) / 3
}

const avg1 = calAvg(11,12,13)
const avg2 = calAvg(11,12,14)
console.log(avg1,avg2)

function winner(avg1,avg2){
    if (avg1 > avg2)
    console.log("A winner")
    else {
        console.log("B winner")
    }
}
const win = winner(avg1,avg2)
console.log(win)

const a = "A"
const b = "B"
const c = "C"
const d = "D"
const e = "E"
console.log(a,b,c,d,e)

// is a container and storing a collection of data
const alpha = ['A', 'B', 'C', 'D', 'E']
console.log(alpha)

// pushing: adding the element at the end
alpha.push('F')
console.log(alpha)

// unshift: adding the element at the start
alpha.unshift('0')
console.log(alpha)

// pop: removing the element from the end
alpha.pop()
console.log(alpha)

// index: index the element
console.log(alpha.indexOf('E'))

// includes: Boolean
console.log(alpha.includes('E'))


// array vs object
const arr = ['hamed', '20', 'kbl', 'afg']
const obj = {
    'name' : 'hamed',
    'year' : '20',
    'province' : 'kbl',
    'country' : 'afg'
}

console.log(obj['name'])


// const lop = {
//     firstname : 'ABDULLAHI',
//     birthday : '2000',
//     example : true,
//     light : 'on',

//     test : function(birthday){
//         return 2023 - birthday
//     }
// }

// console.log(lop.test(2000))



const obej = {
    firstname : 'hamed',
    lastname : 'abdullahi',
    bornOn : '2000',
    working : true,

    func : function(){
        return `${this.bornOn}`
    },

    getSummary : function(bornOn){
        return `${this.firstname} is ${bornOn} years old`
    }

}
console.log(obej.func())
console.log(obej.getSummary(200))

const mark = {
    fullname : 'Mark Miler',
    mass : '78',
    height: '1.69',
    calBMI : function(){
        return `Mark ${this.mass / this.height **2}`       
    }
}

const john = {
    fullname: 'John Smith',
    mass : '92',
    height : '1.95',
    calBMI : function(){
        return `John ${this.mass / this.height **2}`       
    }
}
if (mark.calBMI() > john.calBMI()){
    console.log( mark.calBMI(),"BMI is higher")
}
else {
    console.log(john.calBMI(),"BMI is higher")
    
}

for(let i=0; i<=10; i++){
    console.log("hey", i)
}