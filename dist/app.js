"use strict";
const APP_ID = "4e37f8b62d902930c305918453b619f3";
const button = document.querySelector(".button");
const display = document.querySelector(".display");
const inputValue = document.querySelector(".inputValue");
const placeName = document.querySelector(".name");
const description = document.querySelector(".description");
const temp = document.querySelector(".temp");
const image = document.querySelector(".image");
display.style.display = "none";
button.addEventListener("click", function (e) {
    e.preventDefault();
    fetch("https://api.openweathermap.org/data/2.5/weather?q=" +
        inputValue.value +
        "&appid=" +
        APP_ID +
        "&units=metric")
        .then((response) => response.json())
        .then((data) => {
        const tempValue = data.main.temp;
        const descriptionValue = data.weather[0].description;
        if (tempValue <= 10.99) {
            image.setAttribute("src", "./images/frost.png");
            temp.innerHTML = tempValue + "°C";
            description.innerHTML = descriptionValue;
            display.style.display = "inline";
        }
        else if (tempValue <= 20.99 && tempValue >= 11) {
            image.setAttribute("src", "./images/cold.png");
            temp.innerHTML = tempValue + "°C";
            description.innerHTML = descriptionValue;
            display.style.display = "inline";
        }
        else if (tempValue <= 30.99 && tempValue >= 21) {
            image.setAttribute("src", "./images/humid.png");
            temp.innerHTML = tempValue + "°C";
            description.innerHTML = descriptionValue;
            display.style.display = "inline";
        }
        else if (tempValue <= 40.99 && tempValue >= 31) {
            image.setAttribute("src", "./images/hot.png");
            temp.innerHTML = tempValue + "°C";
            description.innerHTML = descriptionValue;
            display.style.display = "inline";
        }
    })
        .catch((err) => alert("Wrong city name!"));
});
