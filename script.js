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


const new_value = `my name ${first_name}, I'm  ${age} years old`
console.log(new_value)

if(BMI_john > BMI_mark)
{
    console.log("John's BMI is higher than Mark")
    console.log(`John's BMI is ${BMI_john}`)
}   
else {
    console.log("Mark's BMI is higher than john")
    console.log(`John's BMI is ${BMI_mark}`)
}
console.log(typeof new_value)
console.log(Number(new_value))

console.log(typeof age)
console.log(Boolean(age))

console.log(Boolean(0)) // Flase
console.log(Boolean(undefined)) // False
console.log(Boolean('abdullahi')) // True
console.log(Boolean({})) // Ture
console.log(Boolean('')) // False


// 0, undefind, null, Nan
money = 0; // 0 is false 
if (money){
    console.log("The if statment is not executing. Because its falsy")
}
else {
    console.log("the else statment is executing.")
}

console.log(age)
if (age === 24) // === is strict. means the value should be same and if we take it '24' then its not showing 24.
console.log(`Your age is ${age}`)
if (age == 24) // == is a loose. means the value the valus can be anything and if we take it '24' its showing 24.

console.log(`Your age is only ${age}`)

const favourite = prompt("What's your favourite number ? ")
console.log(favourite)

if (favourite == 20)
{
    console.log("Your guess is right!")
}


const favourite_number = Number(prompt("What's is Your favourite number ? "))
if(favourite_number === 23){
    console.log("You got it!")
}