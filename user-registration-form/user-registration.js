const form = document.getElementById("register");
const response = document.getElementById("form-response");
form.addEventListener("submit", (event)=>{
    event.preventDefault();
    validateRegistration();
});

function validateRegistration(){
    let username = form.username.value;
    let email = form.email.value;

    if(validateUsername(username) && validateEmail(email))
        response.innerHTML = "Successful registration";
    else {
        if(!validateEmail(email)) response.innerText = "Please Check email format";
    }
    return false;
}

function validateUsername(name){
    for(let i = 0; i < name.length; i++)
        if(/[^0-9A-Za-z. ]/gi.test(name[i])) {
            response.innerText = "name cannot have special characters";
            return false;
        }
    return true;
}

function validateEmail(email){
    //Html email input validates email well. Following is a simple validation
    let dotFlag = false;
    let atFlag = false;
    for(let i = 0; i < email.length; i++) {
        if(email[i] == '@') {
            for(let j = 0; j < email.length; j++)
                if(email[j] == '.' && j > i) dotFlag = true;
        
            if(i-1 != undefined && i+1 != undefined) atFlag = true;
        }
    }
    if(dotFlag && atFlag) return true;
    return false;
}

function validatePassword(password){
    //it's good practice for server to validate password
}