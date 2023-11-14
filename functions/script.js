' use strict '

const bookings = []
const createBooking = function(flightNumber , numberPassenger=1, price=200){
   
    const booking = {
        flightNumber,
        numberPassenger,
        price,
    }
    bookings.push(booking)
    console.log(booking)
}

createBooking(12)

const oneWord = function(str){
    return str.replace(/ /g, '').toLowerCase()
}

console.log(oneWord('hamed jan abdullahi'))


const newFuc = function(greeting){
    return function(name){
        console.log(`${greeting} ${name}`)
    }
}

newFuc('hey')('hamed')