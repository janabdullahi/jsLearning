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