
const temprature1 = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5]
const temprature2 = [3, 4, 12, -18, 22, 91, 2, 4, 7, 14, 9, 5]
const merge =  temprature1.concat(temprature2)

// temprature amplitude = max value  - min value


const funcMax = function (temp) 
{
    let max = temp[0]
    let min = temp[0]
    for (let i = 0; i < temp.length; i++) {
        let currTmp = temp[i]
        if(currTmp == 'error') continue
        if(currTmp>max) max = currTmp
        if(currTmp<min) min = currTmp
    }
    console.log("maxx : ", max)
    console.log("minn : ", min)
    return max - min
}
const ampl = funcMax(merge)
console.log("the amplitude is ",ampl)
