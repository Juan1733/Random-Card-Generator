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

window.onload = function() {
  const top = document.querySelector(".card-top");
  const cardNumber = document.querySelector(".number");
  const bottom = document.querySelector(".card-bottom");

  let number = generateNumber();
  let symbol = generateSymbol();

  if (symbol == "♦️" || symbol == "♥️") {
    top.classList.add("red");
    bottom.classList.add("red");
    cardNumber.classList.add("red");
  }

  top.innerHTML = symbol;
  cardNumber.innerHTML = number;
  bottom.innerHTML = symbol;
};
