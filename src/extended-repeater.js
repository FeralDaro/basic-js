const CustomError = require("../extensions/custom-error");

module.exports = function repeater( str, options ) {
  let optSep = (!options.hasOwnProperty("separator")) ? "+" : options.separator;
  let addSep = (!options.hasOwnProperty("additionSeparator")) ? "|" : options.additionSeparator;
  let optTimes = (options.repeatTimes === undefined) ? 1 : options.repeatTimes;
  let addTimes = (options.additionRepeatTimes === undefined) ? 1 : options.additionRepeatTimes;

  let resStr = '';
  let resAdd = [];
  let res = [];

  for(let i=0; i<addTimes; i++){
    if(options.addition !== undefined)
      resAdd.push(String(options.addition));
  }

  for(let i=0; i<optTimes; i++){
    resStr = String(str) + resAdd.join(addSep);
    res.push(resStr);
  }
  return res.join(optSep);
};
  