function score( dice ) {
    let result = 0;
    let diceNumbers = {
        1: 0,
        2: 0,
        3: 0,
        4: 0,
        5: 0,
        6: 0,
    }

    dice.forEach( number => {
        number === 1 ? diceNumbers[1]++ : null;
        number === 2 ? diceNumbers[2]++ : null;
        number === 3 ? diceNumbers[3]++ : null;
        number === 4 ? diceNumbers[4]++ : null;
        number === 5 ? diceNumbers[5]++ : null;
        number === 6 ? diceNumbers[6]++ : null;
    } );

    for ( let countedNumber in diceNumbers ) {
        if (countedNumber == 1) {
            if ( diceNumbers[1] < 3 && diceNumbers[1] != 0 ) diceNumbers[1] *= 100;
            else if ( diceNumbers[1] > 3 ) {
                diceNumbers[1] -= 3;
                diceNumbers[1] = 1000 + ( diceNumbers[1] * 100 );
            }
            else if (diceNumbers[1] == 3) diceNumbers[1] = 1000;
        } else if (countedNumber == 5) {
            if ( diceNumbers[5] < 3 && diceNumbers[5] != 0 ) diceNumbers[5] *= 50;
            else if ( diceNumbers[5] >= 3 ) diceNumbers[5] = +countedNumber * 100;
        }
        else if ( diceNumbers[countedNumber] >= 3 ) {
            diceNumbers[countedNumber] = +countedNumber * 100;
        }

        if ( diceNumbers[countedNumber] >= 50) {
            result += diceNumbers[countedNumber];
        }
    }

    return result;
}

