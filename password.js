const userName = document.getElementById("user");
const passWord = document.getElementById('password');
const age = document.getElementById('age');
const submitBtn = document.getElementById('submit-btn');
const userNameOutput = document.getElementById('name-output');
const passWordOutput = document.getElementById('pass-output');
const ageOutput = document.getElementById('age-output');

submitBtn.addEventListener('click', (event) => {
    userNameOutput.textContent = `Hello, ${userName.value}`;
    passWordOutput.textContent= `Your password is: ${passWord.value}`;
    ageOutput.textContent = `Your age is: ${age.value}`;
});