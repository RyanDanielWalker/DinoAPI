export default class Gifs {
  static getGif() {
    return new Promise(function (resolve, reject) {
      let request = new XMLHttpRequest();
      const apiKey = process.env.API_KEY;
      const url = `http://api.giphy.com/v1/gifs/random?tag=dinosaur&api_key=${apiKey}`;
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
}

