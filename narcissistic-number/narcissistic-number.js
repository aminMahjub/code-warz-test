function  NarcissisticNumber(n) {
    const numberArray = Array.from(String(n), Number);
    const numberLength = numberArray.length;

    let sumOfDigits = numberArray.map(number => Math.pow(number, numberLength));
    sumOfDigits = sumOfDigits.reduce((acc, number) => acc + number);

    return sumOfDigits === n ? `${n} is Narcissistic Number` : 'This is non-narcissistic number';

}
