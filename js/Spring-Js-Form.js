document.querySelector('#button-register-form').addEventListener('click', showRegisterForm);
function showRegisterForm(e) {
    const log = document.querySelector('.login-row');
    const table = document.querySelector('.data-table');
    const contain = document.querySelector('.contain');
    // console.log(contain.innerText == 'Register');
    const registration = document.querySelector('.register-row');
    if (registration.classList.contains('hidden') && table.classList.contains('hidden')) {
        table.classList.remove('hidden');
        log.classList.add('hidden');
        e.target.innerText = "Add Record";



    } else if (registration.classList.contains('hidden')) {
        table.classList.add('hidden');
        registration.classList.remove('hidden');
        e.target.innerText = "Show Record";


    } else {
        table.classList.remove('hidden');
        registration.classList.add('hidden');
        e.target.innerText = "Add Record";
    }

    if (contain.innerText == 'Register') {
        // console.log("lslslslslslslslsl")
    } else {
        removeAllChanges();
    }




}


const loginRegister = document.querySelectorAll("#btn-link");
for (var j = 0; j < loginRegister.length; j++) {
    loginRegister[j].addEventListener('click', loginRegisterForm);
}

function loginRegisterForm(e) {
    const reg = document.querySelector('.register-row');
    const log = document.querySelector('.login-row');
    if (e.target.innerText === 'login') {
        reg.classList.add('hidden');
        log.classList.remove('hidden');
    } else {
        reg.classList.remove('hidden');
        log.classList.add('hidden');

    }

}


// ============================================Fetch/Load-All-Data-Start=============================================

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
                    + '<td><button class="btn btn-primary" value="' + allData[i].uId + '" id="update-user-btn"><i class="fa-solid fa-pen-to-square"></i></button></td>'
                    + '<td><button class="btn btn-danger" value="' + allData[i].uId + '" id="enable-disable"><i class="fa-solid fa-trash"></i></button></td>'
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
            const updateBtn = document.querySelectorAll('#update-user-btn');
            const allBox = document.querySelectorAll('#check-box');
            for (var i = 0; i < enableDisable.length; i++) {
                if (allData[i].accountStatus == false) {
                    enableDisable[i].classList.remove('btn-disable');

                } else {
                    enableDisable[i].classList.add('btn-disable');
                    allBox[i].classList.add('btn-disable')
                    updateBtn[i].classList.add('edit-btn-disable')
                }


            }
            loadData();
            targetButtons();
            updateBtnProcess()

        }
    }
    xhr.send();

}
showAllData();

// ============================================Fetch/Load-All-Data-End=============================================

// =======================================Register/Save-User-Start================================================

document.getElementById("register-form").addEventListener('submit', registerForm);
function registerForm(e) {
    const contain = document.querySelector('.contain');
    if (contain.innerText == 'Register') {
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

    } else {
        e.preventDefault();
        console.log("Updating");
        var xhr = new XMLHttpRequest();
        const data = new FormData(e.target);

        const uId = data.get('uId');
        const name = data.get('name');
        const email = data.get('email');
        const password = data.get('password');
        const age = data.get('age');
        const city = data.get('city');
        xhr.open('PUT', 'http://localhost:8080/update', true);
        xhr.setRequestHeader('Content-type', 'application/json');
        xhr.onload = function () {
            if (this.status == 200) {
                document.getElementById("msg").innerHTML = "<p class='mb-0'>" + this.responseText + "</p>";
            }
            showAllData();
            const table = document.querySelector('.data-table').classList.remove('hidden');
            const registration = document.querySelector('.register-row').classList.add('hidden');
            document.querySelector('#button-register-form').classList.remove('edit-btn-disable');

        }

        var param = { uId, name, email, password, age, city }
        console.log(param);
        var params = JSON.stringify(param);
        console.log(params);

        xhr.send(params);


    }

    clearFieldRegister();

}

// =======================================Register/Save-User-End================================================


// ============================================Delete-Multiple-User-Start=================================================


function loadData() {
    const tableBody = document.querySelectorAll("#check-box");
    for (var i = 0; i < tableBody.length; i++) {
        tableBody[i].addEventListener('click', getUserId);

    }
    console.log(tableBody);

}
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
function deleteSelectedUser(e) {
    var newArgs = [];
    var xhr = new XMLHttpRequest();
    xhr.open('DELETE', 'http://localhost:8080/delete', true);
    xhr.setRequestHeader('Content-type', 'application/json');
    xhr.onload = function () {
        if (this.status == 200) {
            console.log(this.responseText);
            showAllData();
            args = newArgs;
            if (args.length === 0) {
                e.target.classList.add("btn-disable");
            }


        }
    }
    var param = JSON.stringify(args);
    console.log(param);
    xhr.send(param);

}


// ============================================Delete-Multiple-User-End=================================================


// ====================================Delete-Single -User=======================================================

function targetButtons() {
    const deleteOperation = document.querySelectorAll('#enable-disable');
    for (var i = 0; i < deleteOperation.length; i++) {
        deleteOperation[i].addEventListener('click', deleteSingleUser);

    }
}
function deleteSingleUser(e) {
    console.log(e.target.value);
    var order = confirm("Are you sure!!!");
    if (order == true) {
        var xhr = new XMLHttpRequest();
        xhr.open('DELETE', 'http://localhost:8080/single-delete/' + e.currentTarget.value, true);
        xhr.onload = function () {
            if (this.status == 200) {
                console.log(this.responseText);
                showAllData();
            }
        }
        xhr.send();

    }
}


// ==================================Delete-Single-end===========================================================

// =====================================Update-User-Start=======================================================

function updateBtnProcess() {
    const targetUpdateBtn = document.querySelectorAll('#update-user-btn');
    for (var i = 0; i < targetUpdateBtn.length; i++) {
        targetUpdateBtn[i].addEventListener('click', getUpdateId);
    }

}
var element = document.createElement('button');
element.className = 'btn btn-danger';
element.id = 'cancel-btn';
element.innerText = 'Cancel';
// element.type = "reset";
element.style.marginLeft = '10px';

function getUpdateId(e) {
    console.log(e.currentTarget.value);
    var id = parseInt(e.currentTarget.value);
    const table1 = document.querySelector('.data-table');
    const registration1 = document.querySelector('.register-row');
    const btnTop = document.querySelector('#button-register-form');
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://localhost:8080/get-user/' + id, true);
    xhr.onload = function () {
        if (this.status == 200) {
            var user = JSON.parse(this.responseText);
            table1.classList.add('hidden');
            registration1.classList.remove('hidden');
            var firstChild = registration1.childNodes[1];
            firstChild.childNodes[3].innerText = "Update";
            var formChild = firstChild.childNodes[5];
            formChild.childNodes[13].innerText = "update";
            var checkValue = formChild.childNodes[13];
            checkValue.parentNode.insertBefore(element, checkValue.nextSibling);
            formChild.childNodes[16].classList.add('hidden');
            var id = document.querySelector('input[name="uId"]').value = user.uId;
            var name = document.querySelector('input[name="name"]').value = user.name;
            var email = document.querySelector('input[name="email"]').value = user.email;
            var password = document.querySelector('input[name="password"]').value = user.password;
            var age = document.querySelector('input[name="age"]').value = user.age;
            var city = document.querySelector('input[name="city"]').value = user.city;
            btnTop.classList.add('edit-btn-disable');
            targetCancelButton();



        }
    }
    xhr.send();
}

function targetCancelButton() {
    document.getElementById('cancel-btn').addEventListener('click', cancelUpdate);

}
function cancelUpdate(e) {
    e.preventDefault();
    const table2 = document.querySelector('.data-table');
    const registration2 = document.querySelector('.register-row');
    const btnTop = document.querySelector('#button-register-form');

    table2.classList.remove('hidden');
    registration2.classList.add('hidden');
    btnTop.classList.remove('edit-btn-disable');

}

function removeAllChanges() {
    const registration2 = document.querySelector('.register-row');
    var firstChild = registration2.childNodes[1];
    firstChild.childNodes[3].innerText = "Register";
    var formChild = firstChild.childNodes[5];
    formChild.childNodes[13].innerText = "Submit";
    var checkValue = formChild.childNodes[13];
    checkValue.parentNode.removeChild(element);
    formChild.childNodes[15].classList.remove('hidden');
    clearFieldRegister();

}




// =====================================Update-User-End=======================================================


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

