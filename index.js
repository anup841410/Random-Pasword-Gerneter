const paswordBox = document.getElementById('pasword');
const  length = 12;
const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
const number = '0123456789';
const symbol =' @#$%^&*()_+~{}[]<>/=-';

const allChars = upperCase + lowerCase + number + symbol;

function createPasword(){
    let pasword = '';
    pasword += upperCase[Math.floor(Math.random() * upperCase.length)];
    pasword += lowerCase[Math.floor(Math.random() * lowerCase.length)];pasword += number[Math.floor(Math.random() * number.length)];
    pasword += symbol[Math.floor(Math.random() * symbol.length)];


    while(length > pasword.length){
        pasword += allChars[Math.floor(Math.random() * allChars.length)];
    }
    paswordBox.value = pasword;
    
}

function copyPasword() {
    navigator.clipboard.writeText(paswordBox.value)
      .then(() => {
        alert("Pasword Copied ✅");
      })
      .catch(() => {
        alert("Copy Failed ❌");
      });
}

