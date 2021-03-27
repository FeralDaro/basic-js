const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam( members ) {
    let newArr = []
    let result = []
    if(!Array.isArray(members)){
        return false
    }
    for(let i = 0; i < members.length; i++){
        if(typeof(members[i]) === 'string'){
            newArr.push(members[i].trim())
        }
    }
    for( let j = 0; j < newArr.length; j++){
        result.push(newArr[j][0])
    }
    result = result.map(function (el){
        return el.toUpperCase()
    })
    return result.sort().join('')
};
