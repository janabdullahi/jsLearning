let text = 'jsLearning'
if (text === 'jsLearning'){
    alert("it's ok.")
}

let first_name = 'abdullahi'
console.log("Name : ", first_name)

// let 3years = 3;
// the variables con not contain numbers at begining. It's syntax error

//  let and&and = 5;
// let function = 9;
//  the & operator and reserved keywords can not be at variable naming. it's syntx error


// let is changable
let age = 22;
age = 24;
console.log(age)

// const is not changable
const birthday = 2000;
console.log(birthday)


let x = 25;
let y =  30;
console.log("ture : ",x < y)
console.log("false : ",x > y)

const now = 2037;
let yourBirthDay = 2018;
let myBiirthDay = 1991
console.log(">>>",now - myBiirthDay > now.yourBirthDay)

// BMI = mass / height **2
// mass in kg & height in meter
/*  1. marks: 78kg & 1.69m
    2. john:  92kg & 1.95,
*/  
let mark_mass = 78;
let mark_height = 1.69;
BMI_mark = mark_mass / mark_height **2;
console.log("Mark's BMI: ", BMI_mark)

let john_mass = 92;
let john_height = 1.95;
BMI_john = john_mass / john_height **2;
console.log("John's BMI: ", BMI_john)

markHigherBmi = BMI_mark > BMI_john
console.log(markHigherBmi)