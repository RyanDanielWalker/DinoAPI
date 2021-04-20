import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import DinoWords from './js/dino.js';
import Gifs from './js/gif.js';

$(document).ready(function () {
  let word;
  let answerArray;
  let gifPromise = Gifs.getGif();
  gifPromise.then(function (response) {
    const body = JSON.parse(response);
    $("#output").html(`<img src="${body.data.images.fixed_height.url}"/>`)
  })

  $("#firstForm").click(function () {
    let promise = DinoWords.getWord();
    promise.then(function (response) {
      word = DinoWords.getCharacterArray(response);
      console.log("our word array", word);
      answerArray = new Array(word.length).fill("_");
    }, function (error) {
      console.error("Request error: ", error);
    });
  });

  $("#userInput").submit(function (event) {
    event.preventDefault();
    console.log("hello");
    let letter = $("#enterLetterSpot").val();
    $("#enterLetterSpot").val("")
    let indexOfLettersMatched = DinoWords.compareLetters(word, letter);
    answerArray = DinoWords.replaceLetter(indexOfLettersMatched, letter, answerArray);
    console.log(answerArray);
    $("#output").append(`<p>${answerArray.join(" ")}</p>`);
  });




});