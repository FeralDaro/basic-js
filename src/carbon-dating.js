const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;
const k = 0.000122;
module.exports = function dateSample(sampleActivity) {
  if(typeof(sampleActivity) !== 'string' ||
      sampleActivity <= 0 ||
      sampleActivity>=15 || isNaN(Number(sampleActivity))){
    return false
  }
  console.log(Number(sampleActivity))
  sampleActivity = Number(sampleActivity)
  let result = Math.ceil(Math.log(MODERN_ACTIVITY/sampleActivity)*HALF_LIFE_PERIOD/Math.log(2))
  return result
};;
