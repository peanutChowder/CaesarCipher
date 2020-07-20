let codifyButton = document.getElementById("encodeButton");
let decodifyButton = document.getElementById("decodeButton");

let rawTextarea = document.getElementById("raw");
let encodedTextArea = document.getElementById("encrypted");

let slider = document.getElementById("shiftSlider");
let sliderText = document.getElementById("shiftValueDisplay");

codifyButton.addEventListener("click", encrypt);
decodifyButton.addEventListener("click", decrypt);
slider.addEventListener("pointermove", dispSliderVal);


function dispSliderVal() {
    sliderText.textContent = `Shift by: ${slider.value}`;
    
}

function decrypt() {
    let shiftInt = Number(slider.value);
    let encodedText = encodedTextArea.value;
    let unicodeChar;
    let decodedText = "";

    for (let i = 0; i < encodedText.length; ++i) {
        unicodeChar = encodedText[i].charCodeAt();
        unicodeChar -= shiftInt;

        decodedText += String.fromCharCode(unicodeChar);
    }

    rawTextarea.value = decodedText;
    encodedTextArea.value = "";
}

function encrypt() {
    let shiftInt = Number(slider.value);
    let rawText = rawTextarea.value;
    let unicodeChar;
    let encodedText = "";


    for (let i = 0; i < rawText.length; ++i) {
        unicodeChar = rawText[i].charCodeAt();
        unicodeChar += shiftInt;

        encodedText += String.fromCharCode(unicodeChar);
    }

    encodedTextArea.value = encodedText;
    rawTextarea.value = "";
}