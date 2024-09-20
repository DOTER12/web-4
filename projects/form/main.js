let btnElement = document.querySelector('.btn');
let MyNameElement = document.querySelector('[name=MyName]');
let MySerNameElement = document.querySelector('[name=MySerName]');
let resultElement = document.querySelector('.result');

btnElement.addEventListener("click", function() {
    resultElement.textContent =`Здравствуйте, ${MyNameElement.value} ${MySerNameElement.value}!`;
});