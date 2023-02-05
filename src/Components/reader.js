import Tesseract from "tesseract.js";
import React from "react";
function Read() {
    Tesseract.recognize(
    "https://edlatimore.com/assets/images/posts/gorilla-mind-smooth-ingredients.png?_cchid=aba4ce2ea791e05fc7b9b97065b4d680",
    "eng",
    { logger: (e) => console.log(e) }
  )
    .catch((err) => {
      console.error(err);
    })
    .then((out) => console.log(out));
}
export default Read;
