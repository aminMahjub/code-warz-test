const cakse = (recipes, availables) => {
    let result = [];

    for (let recipe in recipes) {
        for (let available in availables) {
            if (Object.hasOwn(availables, recipe) && recipes[recipe] < availables[available]) {
                if (recipe === available) {
                    result.push(Math.floor(availables[available] / recipes[recipe]));
                    break;
                }
            } else return 0;
        }
    }

    result.sort((a, b) => a - b);

    return result[0];
}

console.log(cakse({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5}));