class TicTacToe {
    constructor() {
        this.pole = [[null,null,null],[null,null,null],[null,null,null]];
        this.value = 'x';
    }

    getCurrentPlayerSymbol() {
        return this.value;

    }

    nextTurn(rowIndex, columnIndex) {
        if(this.pole[rowIndex][columnIndex] == null)
        {
            this.pole[rowIndex][columnIndex] = this.getCurrentPlayerSymbol();
            if(this.value === 'x'){
                this.value = 'o';
            }else{
                this.value = 'x';
            }
        }
    }

    isFinished() {
        if(this.getWinner() !== null || this.isDraw() == true)
            return true;
        return false;
    }

    getWinner() {
        if(this.pole[0][0] !== null && this.pole[0][0] == this.pole[0][1] && this.pole[0][0] == this.pole[0][2]) return this.pole[0][0];
        else if(this.pole[1][0] !== null && this.pole[1][0] == this.pole[1][1] && this.pole[1][0] == this.pole[1][2]) return this.pole[1][0];
        else if(this.pole[2][0] !== null && this.pole[2][0] == this.pole[2][1] && this.pole[2][0] == this.pole[2][2]) return this.pole[2][0];

        else if(this.pole[0][0] !== null && this.pole[0][0] == this.pole[1][0] && this.pole[0][0] == this.pole[2][0]) return this.pole[0][0];
        else if(this.pole[0][1] !== null && this.pole[0][1] == this.pole[1][1] && this.pole[0][1] == this.pole[2][1]) return this.pole[0][1];
        else if(this.pole[0][2] !== null && this.pole[0][2] == this.pole[1][2] && this.pole[0][2] == this.pole[2][2]) return this.pole[0][2];

        else if(this.pole[0][0] !== null && this.pole[0][0] == this.pole[1][1] && this.pole[0][0] == this.pole[2][2]) return this.pole[0][0];
        else if(this.pole[0][2] !== null && this.pole[0][2] == this.pole[1][1] && this.pole[0][2] == this.pole[2][0]) return this.pole[0][2];
        else return null;
    }

    noMoreTurns() {
        for(let i = 0; i < 3; i++)
            for(let j = 0; j < 3; j++){
                if(this.pole[i][j] === null){
                    return false;
                }
            }
        return true;
    }

    isDraw() {
        if( this.getWinner() == null && this.noMoreTurns() == true){
            return true;
        }
        return false;
    }

    getFieldValue(rowIndex, colIndex) {
        return this.pole[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;