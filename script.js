"use strict";
console.log("hello");

const textContainer = document.getElementById("textbox");

textContainer.addEventListener("input", function (e) {
  let char = this.value;
  console.log(char);

  document.querySelector(".char-length").innerHTML = char.length;
  char = char.trim(); // Removes whitespace from the start and end

  let words = char.split(" ");
  let trimmedWords = words.filter(function (i) {
    return i !== "";
  }); // Filters out empty elements from the array
  console.log(trimmedWords);

  document.querySelector(".word-length").innerHTML = trimmedWords.length;
});