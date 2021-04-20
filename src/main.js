import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import DinoWords from './js/dino.js';

$(document).ready(function () {
  let promise = DinoWords.getWord();
  promise.then(function (response) {
    let word = DinoWords.getCharacterArray(response);
    console.log("our word array", word);
  }, function (error) {
    console.error("Request error: ", error);
  });
  // $("#").click(function () {
  // });
});