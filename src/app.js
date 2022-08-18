/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

function generateSymbol() {
  let symbols = ["♦️", "♥️", "♠", "♣"];
  let symbol = symbols[Math.floor(Math.random() * symbols.length)];
  return symbol;
}

function generateNumber() {
  let numbers = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  let number = numbers[Math.floor(Math.random() * numbers.length)];
  return number;
}

function generateCard(top, cardNumber, bottom) {
  let number = generateNumber();
  let symbol = generateSymbol();

  if (symbol == "♦️" || symbol == "♥️") {
    top.classList.add("red");
    bottom.classList.add("red");
    cardNumber.classList.add("red");
  } else {
    top.classList.remove("red");
    bottom.classList.remove("red");
    cardNumber.classList.remove("red");
  }

  top.innerHTML = symbol;
  cardNumber.innerHTML = number;
  bottom.innerHTML = symbol;
}

window.onload = function() {
  const top = document.querySelector(".card-top");
  const cardNumber = document.querySelector(".number");
  const bottom = document.querySelector(".card-bottom");
  const button = document.querySelector(".btn");

  generateCard(top, cardNumber, bottom);

  button.addEventListener("click", function() {
    generateCard(top, cardNumber, bottom);
  });
};
