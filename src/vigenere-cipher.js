const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(isDirect = true) {
    this.isDirect = isDirect;
    this.alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }

  generateKey(message, key) {
    let generatedKey = "";

    for (let i = 0, j = 0; i < message.length; i++) {
      if (this.alphabet.indexOf(message[i]) === -1) {
        generatedKey += message[i];
      } else {
        generatedKey += key[j % key.length];
        j++;
      }
    }

    return generatedKey;
  }

  encrypt(message, key) {
    if (message === undefined || key === undefined) {
      throw new Error("Incorrect arguments!");
    }

    let messageUpperCase = message.toUpperCase();
    let generatedKey = this.generateKey(messageUpperCase, key).toUpperCase();
    return this.generateMsg(messageUpperCase, generatedKey, "encrypt");
  }

  decrypt(message, key) {
    if (message === undefined || key === undefined) {
      throw new Error("Incorrect arguments!");
    }

    let messageUppercase = message.toUpperCase();
    let generatedKey = this.generateKey(messageUppercase, key).toUpperCase();
    return this.generateMsg(messageUppercase, generatedKey, "decrypt");
  }

  generateMsg(message, key, operation) {
    let result = "";
    const direction = operation === "encrypt" ? 1 : -1;

    for (let i = 0; i < message.length; i++) {
      if (this.alphabet.indexOf(message[i]) === -1) {
        result += message[i];
      } else {
        const messageIndex = this.alphabet.indexOf(message[i]);
        const keyIndex = this.alphabet.indexOf(key[i]);
        const newIndex = (messageIndex + direction * keyIndex + 26) % 26;
        result += this.alphabet[newIndex];
      }
    }

    return this.isDirect ? result : result.split("").reverse().join("");
  }
}

module.exports = {
  VigenereCipheringMachine,
};
