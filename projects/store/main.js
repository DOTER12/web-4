const nameElem = document.getElementById("name");
const lastnameElem = document.getElementById("lastname");

let goodsElements = document.querySelectorAll(".checkbox");
let countElements = document.querySelectorAll("[name='goodsCount']");

const btnElement = document.querySelector(".btn");
let totalPrice = document.querySelector("span");

let interCost = 0;

function calculateSum(countElements, goodsElements) {
    interCost = 0;
    for (let i = 0; i < countElements.length; i++) {
    if (countElements[i].value < 0) {
        countElements[i].value = 0;
    }
    if (goodsElements[i].checked) {
      interCost += Number(countElements[i].value) * Number(goodsElements[i].value);
    }
}
    return interCost;
}

function validateInput(value) {
    if (value < 0 || (value.toString().length > 1 && value.toString().startsWith("0"))) {
    return 0; 
}
    return value; 
}

for (let elem of countElements) {
elem.addEventListener("change", function () {
    elem.value = validateInput(Number(elem.value)); 
    totalPrice.textContent = calculateSum(countElements, goodsElements);
});
}

for (let i = 0; i < goodsElements.length; i++) {
    goodsElements[i].addEventListener("change", function () {
    if (goodsElements[i].checked) {
        countElements[i].value = 1; 
    } else {
        countElements[i].value = 0; 
    }
    totalPrice.textContent = calculateSum(countElements, goodsElements);
});
}

btnElement.addEventListener("click", function () {
    if (nameElem.value === "" || lastnameElem.value === "") {
    alert("Заполните, пожалуйста, имя и фамилию.");
} else {
    alert(`Заказчик: ${lastnameElem.value} ${nameElem.value}
        Итого: ${totalPrice.textContent} р.`);
    for (let i = 0; i < goodsElements.length; i++) {
        goodsElements[i].checked = false;
        countElements[i].value = 0;
    }
    totalPrice.textContent = "0";
    nameElem.value = "";
    lastnameElem.value = "";
}
});
