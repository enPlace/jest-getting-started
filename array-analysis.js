//Array Analysis. Write a function that takes an array of numbers and returns an object with the following properties: 
//average, min, max, and length.

function analyze(arr){
    const sum = arr.reduce((a,b)=>a+b)
    const min = Math.min(...arr)
    const max = Math.max(...arr)
    const length = arr.length
    return {
        sum: sum,
        min: min,
        max: max,
        length : length,
    }
}
export {analyze}