class TicTacToe {
    constructor() {
      this.nextSymbol = 'x';
      this.field = [['','',''],['','',''],['','','']];
      this.turnNumber = 1;
    }

    getCurrentPlayerSymbol() {
      return this.nextSymbol;
    }

    nextTurn(rowIndex, colIndex) {
      if(this.getFieldValue(rowIndex, colIndex) === null) {
        this.field[rowIndex][colIndex] = this.nextSymbol;
      if (this.nextSymbol === 'x') {
        this.nextSymbol = 'o';
        this.turnNumber++;
      } else {
        this.nextSymbol = 'x';
        this.turnNumber++;
      }
      return true;
      }
      return false
      
    }

    isFinished() {
      if (this.getWinner() !== null) return true;
      for (let rowNumber = 0; rowNumber < this.field.length; rowNumber++) {
        for (let colNumber = 0; colNumber < this.field.length; colNumber++) {
          if (this.field[rowNumber][colNumber] === '') {
            return false;
          }
        }
      }
      return true;
    }

    getWinner() {
      if (this.turnNumber > 5) {
        for (let rowNumber = 0; rowNumber < this.field.length; rowNumber++) {
          const row = this.field[rowNumber];
            if (row[0] === row[1] && row[1] === row[2] && (row[0] !== '')) {
              return row[0];
            } 
            if (this.field[0][rowNumber] === this.field[1][rowNumber] && this.field[1][rowNumber] === this.field[2][rowNumber] && (this.field[0][rowNumber] !== '')) {
              return this.field[0][rowNumber];
            } 
          }
          
            if((this.field[0][0] === this.field[1][1] && this.field[1][1] === this.field[2][2]) && (this.field[1][1] !== '')) {
                return this.field[0][0];
              }               
         
           if((this.field[0][2] === this.field[1][1] && this.field[1][1] === this.field[2][0]) && (this.field[1][1] !== '')) {
                return this.field[0][2];
              }  
      }       
  
      return null;
    }

    noMoreTurns() {
      if (this.turnNumber === 10) {
        return true;
      } else {
        return false;
      }
    }

    isDraw() {
      if (this.getWinner() !== null) return false;
      for (let rowNumber = 0; rowNumber < this.field.length - 1; rowNumber++) {
        const row = this.field[rowNumber];
          if (row[0] === row[1] === row[2]) {
            return false;
          } 
        }
        for (let colNumber = 0; colNumber < this.field.length - 1; colNumber++) {
          const col = this.field[colNumber];
            if (col[0] === col[1] === col[2]) {
              return false;
            } 
          }
          if(this.field[0][0]==this.field[1][1] &&
            this.field[1][1]==this.field[2][2]) {
              return false;
            }               
       
         if(this.field[0][2]==this.field[1][1] &&
          this.field[1][1]==this.field[2][0]) {
              return false;
            }       
            if (this.noMoreTurns()) {
              return true
            }
return false
    }

    getFieldValue(rowIndex, colIndex) {
      if (this.field[rowIndex][colIndex] !== '') {
        return this.field[rowIndex][colIndex];
      } else {
        return null;
      }
    }
}

module.exports = TicTacToe;
