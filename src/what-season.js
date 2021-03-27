const CustomError = require("../extensions/custom-error");

module.exports = function getSeason( date ) {
    if (date === null){
        return null
    }
    if(date === undefined){
        return 'Unable to determine the time of year!'
    }
    if (Object.prototype.hasOwnProperty.call(date, "getMonth")) {
        throw new TypeError;
    }
    let season = date.getMonth();
    if(season === 0 || season === 1 || season === 11){
        return 'winter'
    }
    if(season > 1 && season < 5){
        return 'spring'
    }
    if(season > 4 && season < 8){
        return 'summer'
    }
    if(season > 7 && season < 11){
        return 'autumn'
    }
};
