document.querySelector('#button-register-form').addEventListener('click', showRegisterForm);
function showRegisterForm(e) {
    const table = document.querySelector('.data-table');
    const registration = document.querySelector('.register-row');
    // const login = document.querySelector('.login-row');
    if (registration.classList.contains('hidden')) {
        table.classList.add('hidden');
        registration.classList.remove('hidden');
        e.target.innerText = "Show Record";


    } else {
        table.classList.remove('hidden');
        registration.classList.add('hidden');
        e.target.innerText = "Add Record";

    }


}


function showAllData() {
    var num = 1;
    const tableBody = document.getElementById('table-body');
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://localhost:8080/all-users', true);
    xhr.onload = function () {
        if (this.status == 200) {
            let allData = JSON.parse(this.responseText);
            var row = "";
            for (var i = 0; i < allData.length; i++) {

                row += '<tr><th scope="row">' + num++ + '</th><td>' + allData[i].name + '</td><td>' + allData[i].email + '</td>'
                    + '<td>' + allData[i].password + '</td><td>' + allData[i].city + '</td><td>' + allData[i].age + '</td>'
                    + '<td id="status"></td>'
                    + '<td><button class="btn btn-danger" value="' + allData[i].uId + '" id="enable-disable">Delete</button></td>'
                    + '<td><input type="checkbox" value="' + allData[i].uId + '" id="check-box"></td></tr>'

                tableBody.innerHTML = row;

            }
            const state = document.querySelectorAll('#status');
            for (var i = 0; i < state.length; i++) {
                if (allData[i].accountStatus == false) {
                    state[i].innerText = "Completed";
                } else {
                    state[i].innerText = "Working...";
                }


            }

            const enableDisable = document.querySelectorAll('#enable-disable');
            for (var i = 0; i < enableDisable.length; i++) {
                if (allData[i].accountStatus == false) {
                    enableDisable[i].classList.remove('btn-disable');

                } else {
                    enableDisable[i].classList.add('btn-disable');
                }


            }

        }
    }
    xhr.send();

}
showAllData();

document.getElementById("register-form").addEventListener('submit', registerForm);
function registerForm(e) {
    e.preventDefault();
    var xhr = new XMLHttpRequest();
    const data = new FormData(e.target);

    const name = data.get('name');
    const email = data.get('email');
    const password = data.get('password');
    const age = data.get('age');
    const city = data.get('city');
    xhr.open('POST', 'http://localhost:8080/add', true);
    xhr.setRequestHeader('Content-type', 'application/json');
    xhr.onload = function () {
        if (this.status == 200) {
            document.getElementById("msg").innerHTML = "<p class='mb-0'>" + this.responseText + "</p>";
        }
        showAllData();
    }

    var param = { name, email, password, age, city }
    console.log(param);
    var params = JSON.stringify(param);
    console.log(params);

    xhr.send(params);
    clearFieldRegister();

}



setTimeout(function () {
    const tableBody = document.querySelectorAll("#check-box");
    for (var i = 0; i < tableBody.length; i++) {
        tableBody[i].addEventListener('click', getUserId);

    }
    console.log(tableBody);

}, 450)
var args = [];

function getUserId(e) {
    var child = e.target.parentElement;
    var papa = child.parentElement.firstChild.innerText;
    console.log(papa);
    const valueBtn = document.querySelectorAll('#enable-disable');
    const allBtn = document.getElementById('send-all-id');

    if (e.target.checked == true) {
        args.push(e.target.value);
        valueBtn[papa - 1].classList.add("btn-disable");
        allBtn.classList.remove("btn-disable");

    } else {
        var index = args.indexOf(e.target.value);
        valueBtn[papa - 1].classList.remove("btn-disable");
        args.splice(index, 1);
    }

    if (args.length === 0) {
        allBtn.classList.add("btn-disable");
    }
    console.log(args);

}
document.getElementById('send-all-id').addEventListener('click', deleteSelectedUser);
function deleteSelectedUser() {
    var xhr = new XMLHttpRequest();
    xhr.open('DELETE', 'http://localhost:8080/delete', true);
    xhr.setRequestHeader('Content-type', 'application/json');
    xhr.onload = function () {
        if (this.status == 200) {
            console.log(this.responseText);
            showAllData();

        }
    }
    var param = JSON.stringify(args);
    console.log(param);
    xhr.send(param);

}




setTimeout(function () {
    const deleteOperation = document.querySelectorAll('#enable-disable');
    for (var i = 0; i < deleteOperation.length; i++) {
        deleteOperation[i].addEventListener('click', deleteSingleUser);

    }
}, 100);
function deleteSingleUser(e) {
    console.log(e.target.value);
    var order = confirm("Are you sure!!!");
    if (order == true) {
        var xhr = new XMLHttpRequest();
        xhr.open('DELETE', 'http://localhost:8080/single-delete/' + e.target.value, true);
        xhr.onload = function () {
            if (this.status == 200) {
                console.log(this.responseText);
            }
        }
        xhr.send();

    }
}


// ==================================Delete-User-end===========================================================

document.getElementById("login-form").addEventListener('submit', loginForm);

function loginForm(e) {
    e.preventDefault();

    clearFieldLogin();

}

function clearFieldRegister() {
    const input = document.querySelectorAll('#register-form input');
    for (var i = 0; i < input.length; i++) {
        input[i].value = "";

    }
}
function clearFieldLogin() {
    const input = document.querySelectorAll('#login-form input');
    for (var i = 0; i < input.length; i++) {
        input[i].value = "";

    }
}

