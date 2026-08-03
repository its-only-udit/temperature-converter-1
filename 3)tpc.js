const textbox = document.getElementById("textbox");
const tofahrenheit = document.getElementById("tofahrenheit");
const toCelsius = document.getElementById("toCelsius");
const submitbtn = document.getElementById("submitbtn");
const result = document.getElementById("result");

let temp;

submitbtn.onclick = function () {
    temp = textbox.value;
    temp = Number(temp);

    if (tofahrenheit.checked) {
        temp = temp * 9 / 5 + 32;
        result.textContent = temp.toFixed(1) + "°F";
    }

    else if (toCelsius.checked) {
        temp = (temp - 32) * 5 / 9;
        result.textContent = temp.toFixed(1) + "°C";
    }
    else {
        result.textContent = "Select a unit";
    }
}

resetbtn.onclick = function () {

    textbox.value = 0;
    tofahrenheit.checked = false;
    toCelsius.checked = false;
    result.textContent = "Select a unit";
}