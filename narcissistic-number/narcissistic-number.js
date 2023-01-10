function  NarcissisticNumber(n) {
    const numberArray = Array.from(String(n), Number);
    const numberLength = numberArray.length;

    let sumOfDigits = numberArray.map(number => Math.pow(number, numberLength));
    sumOfDigits = sumOfDigits.reduce((acc, number) => acc + number);

    if (sumOfDigits === n) return `${n} is Narcissistic Number`;
    else return  'This is non-narcissistic number';
}

console.log(NarcissisticNumber(371));
