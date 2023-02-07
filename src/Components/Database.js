import React, { useState, useEffect } from "react";
import Tesseract from "tesseract.js";

const IngredientsList = () => {
  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    Tesseract.recognize("https://edlatimore.com/assets/images/posts/gorilla-mind-smooth-ingredients.png?_cchid=aba4ce2ea791e05fc7b9b97065b4d680", "eng")
      .then(({ data: { text } }) => {
        setIngredients(text.split("\n").map(str => str.trim()));
      })
      .catch(console.error);
  }, []);

  return (
    <div>
      {ingredients.map((item, index) => (
        <div key={index}>ingredient: {item}</div>
      ))}
    </div>
  );
};

export default IngredientsList;
