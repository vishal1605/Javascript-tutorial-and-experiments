const link = document.querySelectorAll('#btn-link');
for (var i = 0; i < link.length; i++) {
    link[i].addEventListener('click', hideForm);
}

function hideForm() {
    const form = document.querySelectorAll('#card-row');
    for (var j = 1; j < form.length; j++) {
        
        if (form[1].classList.contains('hidden')) {
            form[0].classList.add("hidden");
            form[1].classList.remove("hidden");
        }else{
            form[0].classList.remove("hidden");
            form[1].classList.add("hidden");

        }
    }

}


document.getElementById("register-form").addEventListener('submit' ,registerForm);

function registerForm(e){
    e.preventDefault();
    
    clearFieldRegister();

}

document.getElementById("login-form").addEventListener('submit' ,loginForm);

function loginForm(e){
    e.preventDefault();
    
    clearFieldLogin();

}

function clearFieldRegister(){
    const input = document.querySelectorAll('#register-form input');
    for(var i = 0;i<input.length;i++){
        input[i].value="";

    }
}
function clearFieldLogin(){
    const input = document.querySelectorAll('#login-form input');
    for(var i = 0;i<input.length;i++){
        input[i].value="";

    }
}