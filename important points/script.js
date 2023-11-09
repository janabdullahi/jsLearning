' use strict '

// console.log(adding1(2,3));
// console.log(adding2(2,3));
// console.log(adding3(2,3));

// its window
// console.log(this)

function adding1(x,y){
    return x + y;
    console.log(this)
}


const adding2 = function(x,y){
    return x + y;
    console.log(this)
}

const adding3 = (x,y) => {
    x + y;
    console.log(this) // its a window
}
