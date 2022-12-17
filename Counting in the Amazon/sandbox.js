const countArara = n => {
    let number = n % 2 === 0 ? n / 2 : null || n % 2 === 1 ? (n - 1) / 2 : null;
    let string = 'adak ';    

    n === 1 ? console.log('anane') : null;
    n === 2 ? console.log('adak') : null;

    for (let i = 0; i < number - 1; i++) {
        string += 'adak ';
    }

    if (n % 2 === 1) string += 'anane';
    console.log(string);
}

countArara(7)