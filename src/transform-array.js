const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
    if ( !Array.isArray(arr) ) throw 'Error';
    let newArr = [...arr];

    let dbn = "--double-next";
    let dbp = "--double-prev";
    let dsn = "--discard-next";
    let dsp = "--discard-prev";

    for (let i = 0; i < newArr.length; i++) {
        if (newArr[0] === dbp || newArr[0] === dsp) newArr.shift();
        if (newArr[newArr.length - 1] === dbn || newArr[newArr.length - 1] === dsn ) newArr.pop();
        if (newArr[i] === dsn && (newArr[i+2] === dbp || newArr[i+2] === dsp)) newArr.splice(i, 3);
        if (newArr[i] === dbn) newArr[i] = newArr[i + 1];
        if (newArr[i] === dbp) newArr[i] = newArr[i - 1];
        if (newArr[0] === dbp || newArr[0] === dsp) newArr.shift();
        if (newArr[newArr.length - 1] === dbn || newArr[newArr.length - 1] === dsn ) newArr.pop();
        if (newArr[i] === dsn) newArr.splice(i--, 2);
        if (newArr[i] === dsp) newArr.splice(--i, 2);
    }
    return newArr;
};
