export default class DinoWords {
  static getWord() {
    return new Promise(function (resolve, reject) {
      let request = new XMLHttpRequest();
      const url = `http://dinoipsum.herokuapp.com/api/?format=json&paragraphs=1&words=1`;
      request.onload = function () {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(request.response);
        }

      };
      request.open("GET", url, true);
      request.send();
    });
  }

  static getCharacterArray(response) {
    const body = JSON.parse(response);
    const dinoWord = body[0][0].toLowerCase();
    const characterArray = dinoWord.split("");
    return characterArray;
  }
  static compareLetters(word, letter) {
    let indexArray = [];
    word.forEach((element, index) => {
      if (element === letter) {
        indexArray.push(index);
      }
    });
    return indexArray;
  }
  static replaceLetter(indexArray, letter, answerArray) {
    let outputAnswerArray = answerArray;
    indexArray.forEach((element) => {
      outputAnswerArray[element] = letter;
    });
    return outputAnswerArray;
  }
}



