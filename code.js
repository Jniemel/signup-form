// ref elements
const passField = document.querySelector('#SU-password');
const confField = document.querySelector('#SU-conf');
const insertBef = document.querySelector('#cred-right');
const matchTxt = document.createElement('p');
const txtCont = document.querySelector('#signUp-container');
const ruleBox = document.createElement('div');
const ruleBoxCont = document.querySelector('#pass-row')

// styling
ruleBox.style.position = "absolute";
ruleBox.style.backgroundColor = "white";

matchTxt.style.marginTop = "4%";
matchTxt.style.marginLeft = "0";

// compare passwords
function compInput(){
    if (passField.value != "" && passField.value === confField.value) {
        passField.style.borderColor = "green";
        confField.style.borderColor = "green";
        matchTxt.textContent = "Passwords match!";
        matchTxt.style.color = "green";
        txtCont.insertBefore(matchTxt, insertBef);

    } else if (passField.value != "" && passField.value != confField.value) {
        passField.style.borderColor = "red";
        confField.style.borderColor = "red";
        matchTxt.textContent = "Passwords do not match!";
        matchTxt.style.color = "red";
        txtCont.insertBefore(matchTxt, insertBef);

    } else {
        passField.style.borderColor = "black";
        confField.style.borderColor = "black";
        matchTxt.remove();
    }
}

// show password rules
function showRules() {
    yPos = passField.offsetTop;
    ruleBox.textContent = "#TO-DO PASSWORD RULES";
    ruleBox.style.top = (yPos * 1.10) + "px";
    ruleBoxCont.appendChild(ruleBox)
}

// clear password rule box
function clear() {
    ruleBox.remove();
}

// event listeners
passField.addEventListener('mouseover', showRules);
passField.addEventListener('input', compInput);
confField.addEventListener('input', compInput);"0px"
ruleBox.addEventListener('mouseover', clear)