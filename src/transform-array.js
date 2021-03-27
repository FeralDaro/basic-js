const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
    let newArr = []
    if (!Array.isArray(arr)) {
        throw new TypeError
    }
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === '--discard-prev') {
            newArr.splice(i - 1, 2)
        }
        if (arr[i] === '--double-prev') {
            newArr.push(arr[i - 1])
        }
        if (arr[i] === '--double-next') {
            newArr.push(arr[i + 1])
        }
        if (arr[i] === '--discard-next') {
            i++
            i++
        } else {
            newArr.push(arr[i])
        }
    }
    for(let i = 0; i < newArr.length; i++){
        if(typeof(newArr[i]) !== 'number'){
            newArr.splice(i,1)
        }
    }
    for(let i = 0; i < newArr.length; i++){
        if(typeof(newArr[i]) === 'string'){
            newArr.splice(i,1)
        }
    }
    /*for(let j = 0; j < newArr.length; j++){
        if(newArr[j] === undefined){
            newArr.splice(j,1)
        }
    }*/

    return newArr
};
