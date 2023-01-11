function solution(str) {
    if (str.length % 2 !== 0) str += '_';

    let strArray = Array.from(String(str));
    let halfOfStrArrayLength = strArray.length / 2;
    let finalResult = [];

    let j = 0;
    for (let i = 0; i < halfOfStrArrayLength; i++) {
        let pairOfStr = strArray[j] + strArray[j + 1];
        finalResult.push(pairOfStr);
        j += 2;
    }

    return finalResult;
}
