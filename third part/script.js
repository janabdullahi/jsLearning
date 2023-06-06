
const temprature = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5]
// temprature amplitude = max value  - min value


const funcMax = function (temp) 
{
    let max = temp[0]
    let min = temp[0]
    for (let i = 0; i < temp.length; i++) {
        if(temp[i]>max) max = temp[i]
        if(temp[i]<min) min = temp[i]
    }
    console.log("maxx : ", max)
    console.log("minn : ", min)


}
funcMax(temprature)
