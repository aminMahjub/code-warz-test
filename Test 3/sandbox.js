let array = ['a','b','c','d','f'];

function findMissingLetter(array) {
    let arrayString = array.join("");
    for (let i = 0; i < arrayString.length - 1; i++) {
      if (arrayString.charCodeAt(i + 1) - arrayString.charCodeAt(i) != 1) {
        console.log(String.fromCharCode(string.charCodeAt(i) + 1));
      }
    }
  }

  findMissingLetter(array);