const generateBtn = document.getElementById("generate-btn");
const inputBox = document.querySelector(".input-box input");
const copyBtn = document.querySelector(".input-box img");
let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let lowerCase = "abcdefghijklmnopqrstuvwxyz";
    let digits = "0123456789";
    let symbols = "!#@$%^&()*-+?<>[]{}|-;.,";
    let length = 12;
    const allChar = lowerCase + upperCase + digits + symbols;
function generatePassword(){
    let password = "";
    password += lowerCase[Math.floor(Math.random()*lowerCase.length)];
    password += upperCase[Math.floor(Math.random()*upperCase.length)];
    password += digits[Math.floor(Math.random()*digits.length)];
    password += symbols[Math.floor(Math.random()*symbols.length)];
    while(password.length < length){
        password += allChar[Math.floor(Math.random()*allChar.length)];
    }
    password = password.split('').sort(()=> Math.random() - 0.5).join('');
    inputBox.value = password
}
function copyPassword(){
    if(inputBox.value === '')return;
    //browser clipboard->write this text
    navigator.clipboard.writeText(inputBox.value);
    copyBtn.classList.toggle("copied");
    // inputBox.select();
    // document.execCommand("copy");
}
copyBtn.addEventListener("click", copyPassword)
generateBtn.addEventListener("click", generatePassword)