const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor (condition = true){
    this.condition = condition;
  }

  encrypt(message, key) {
    if (this.checkForErrorInputs(message, key)){
      throw Error;
    }

    message = message.toLowerCase();
    key = key.toLowerCase();

    let res = '';
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let messLen = message.length;
    let keyLen = key.length;

    if(messLen < keyLen){
      key = key.slice(0, messLen);
    }

    if (messLen > keyLen){
      let diffLen = Math.ceil(messLen / keyLen);
      key = key.repeat(diffLen).slice(0, messLen);
    }

    let keyArr = key.split("");
    let messArr = message.split("");

    messArr.forEach(el => {
      let messIndex = alphabet.indexOf(el);
      if (messIndex < 0){
        res += el;
      } else {
        res += alphabet.charAt( (messIndex + alphabet.indexOf(keyArr.shift())) % alphabet.length);
      }
    });

    res = res.toUpperCase();

    return (this.condition) ? res : res.split("").reverse().join("");
  }

  decrypt(message, key) {
    if (this.checkForErrorInputs(message, key)){
      throw Error;
    }

    message = message.toLowerCase();
    key = key.toLowerCase();

    let res = '';
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';

    let messLen = message.length;
    let keyLen = key.length;

    if(messLen < keyLen){
      key = key.slice(0, messLen);
    }

    if (messLen > keyLen){
      let diffLen = Math.ceil(messLen / keyLen);
      key = key.repeat(diffLen).slice(0, messLen);
    }

    let keyArr = key.split("");
    let messArr = message.split("");

    messArr.forEach(el => {
      let messIndex = alphabet.indexOf(el);
      if (messIndex < 0){
        res += el;
      } else {
        res += alphabet.charAt( (messIndex + alphabet.length - alphabet.indexOf(keyArr.shift())) % alphabet.length);
      }
    });

    res = res.toUpperCase();

    return (this.condition) ? res : res.split("").reverse().join("");
  }

  prepareSettings(){
    return 'test';
  }

  checkForErrorInputs(message, key){
    return (arguments.length != 2 || typeof message === 'undefined' || typeof key === 'undefined' || message === null || key === null);
  }
}

module.exports = VigenereCipheringMachine;
