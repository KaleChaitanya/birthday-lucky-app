const dob = document.querySelector("#userBrithday");
const luckeyNumber = document.querySelector("#luckeyNumber");
const btnCheck = document.querySelector("#btnCheck");
const message = document.querySelector("#msg");

function userMessage(msg) {
    message.innerText = msg;
}
function compaireValues(sum, luckeyNumber) {
    if (sum % luckeyNumber.value == 0) {
        userMessage("Your brithday is luckey 😊.");
    }
    else {
        userMessage("Your brithday is not luckey 😞");
    }
}
function checkBrithdayLuckey() {
    var brithDate = dob.value;
    var sum = calculateSum(brithDate);
    if (sum && brithDate) {
        compaireValues(sum, luckeyNumber);
    }
    else{
        userMessage("Please enter Date of brith and luckey number 😡");
    }
}
function calculateSum(brithDate) {
    brithDate = brithDate.replaceAll("-", "");
    let sum = 0;
    for (let i = 0; i < brithDate.length; i++) {
        sum = sum + Number(brithDate.charAt(i));
    }
    return sum;
}
btnCheck.addEventListener('click', checkBrithdayLuckey);