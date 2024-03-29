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


const poll = {
    question : "What's your foavrite progamming languages",
    options : ['0: javascript', '1: python', '2: rust', '3: c++'],
    answers : new Array(4).fill(0),
    registerNewNumber(){
        const answer = Number(prompt(`${this.question}\n ${this.options.join('\n')}\n(write your option)`));
        console.log(answer)
        typeof answer === 'number' && answer < this.answers.length && this.answers[answer]++;

        this.displayResults()
        this.displayResults('string')
    },
    displayResults(type = 'array') {
        if(type === 'array'){
            console.log(this.answers);
        }else if(type === 'string'){
            console.log(`poll result ${this.answers.join(', ')}`)
        }

    }
};

poll.registerNewNumber()
document.querySelector('.poll').addEventListener('click', poll.registerNewNumber.bind(poll))