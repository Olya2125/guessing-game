class GuessingGame {
    constructor() {
        this.min = null;
        this.max = null;
        this.lastGuess = null;
    }

    setRange(min, max) {
        this.min = min;
        this.max = max;
   }

    guess() {
        if (this.min === null || this.max === null) {
            throw new Error("Range not set");
        }
            this.lastGuess = Math.floor((this.min + this.max) / 2);
            return this.lastGuess;
    }

    lower() {
        if (this.lastGuess === null) {
            throw new Error("No previous guess");
          }
      
          this.max = this.lastGuess - 1;
    }

    greater() {
        if (this.lastGuess === null) {
            throw new Error("No previous guess");
          }
      
          this.min = this.lastGuess + 1;
        }
    }


module.exports = GuessingGame;
