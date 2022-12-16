const countArara = n => {
    const anane = 1;
    const adak = 2;

    // let result = n % 2 === 0 ? n / 2 : null || n % 2 === 1 ? (n - 1) / 2 : null;
    n === 1 ? console.log('anane') : null;
    n === 2 ? console.log('adak') : null;

    if (n % 2 === 0) {
        result = n / 2;
        let string = 'adak '

        for (let i = 0; i < result - 1; i++) {
            string += 'adak ';
        }

        console.log(string);
    } else {
        result = (n - 1) / 2;
        let string = 'adak ';

        for (let i = 0; i < result - 1; i++) {
            string += 'adak ';
        }

        string += 'anane';
        console.log(string);
    }
}

countArara(8)