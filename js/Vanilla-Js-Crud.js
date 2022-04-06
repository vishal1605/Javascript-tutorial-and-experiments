document.querySelector('#button-register-form').addEventListener('click', showRegisterForm);
function showRegisterForm(e) {
    const table = document.querySelector('.data-table');
    const contain = document.querySelector('.contain');
    const registration = document.querySelector('.register-row');
    if (registration.classList.contains('hidden') && table.classList.contains('hidden')) {
        table.classList.remove('hidden');
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


}

// =======================================Register/Save-User-Start================================================

document.getElementById("register-form").addEventListener('submit', registerForm);
function registerForm(e) {
    const contain = document.querySelector('.contain');
    if (contain.innerText == 'Register') {
        e.preventDefault();
        const id = Math.floor(Math.random() * 100) + 1;
        console.log(id);
        let args = JSON.parse(localStorage.getItem('data'));
        if (args == null) {
            var saveData = [];
            console.log("Register");
            const data = new FormData(e.target);
            const name = data.get('name');
            const email = data.get('email');
            const password = data.get('password');
            const age = data.get('age');
            const city = data.get('city');



            var param = { id, name, email, password, age, city }
            console.log(param);
            saveData.push(param);
            localStorage.setItem('data', JSON.stringify(saveData));
            showSuccessMsg();
            removeMsg();

        } else {
            var val = args.some(user => {
                return user.id == id;
            })
            console.log(val);

            if (val) {
                console.log("user already exist");
                showErrorMsg();
                removeMsg();


            } else {
                const data = new FormData(e.target);
                const name = data.get('name');
                const email = data.get('email');
                const password = data.get('password');
                const age = data.get('age');
                const city = data.get('city');



                var param = { id, name, email, password, age, city }
                console.log(param);
                args.push(param);
                localStorage.setItem('data', JSON.stringify(args));
                showSuccessMsg();
                removeMsg();

            }



        }



    } else {
        e.preventDefault();
        console.log("Updating");
        const data = new FormData(e.target);

        const uId = data.get('uId');
        const name = data.get('name');
        const email = data.get('email');
        const password = data.get('password');
        const age = data.get('age');
        const city = data.get('city');
        let args = JSON.parse(localStorage.getItem('data'));
        let num = args.findIndex(x => x.id == parseInt(uId));

        args[num].name = name;
        args[num].email = email;
        args[num].password = password;
        args[num].age = parseInt(age);
        args[num].city = city;


        localStorage.setItem('data', JSON.stringify(args));
        const table = document.querySelector('.data-table').classList.remove('hidden');
        const registration = document.querySelector('.register-row').classList.add('hidden');
        const btn = document.querySelector('#button-register-form');
        btn.classList.remove('edit-btn-disable');


    }

    clearFieldRegister();
    showAllData();

}


function clearFieldRegister() {
    const input = document.querySelectorAll('#register-form input');
    for (var i = 0; i < input.length; i++) {
        input[i].value = "";

    }
}


function showAllData() {
    const tableBody = document.getElementById('table-body');
    const table = document.getElementById('show-register-form');
    var row = "";
    let args = JSON.parse(localStorage.getItem('data'));
    if ((args == null) || (args.length == 0)) {
        console.log(args + 'Woking');
        row = '<tr>No data</tr>';
        tableBody.innerHTML = row;

    } else {
        // table.style.display = 'block';
        for (var i = 0; i < args.length; i++) {

            row += '<tr><th scope="row">' + args[i].id + '</th><td>' + args[i].name + '</td><td>' + args[i].email + '</td>'
                + '<td>' + args[i].password + '</td><td>' + args[i].city + '</td><td>' + args[i].age + '</td>'
                + '<td><button class="btn btn-primary" value="' + args[i].id + '" id="update-user-btn"><i class="fa-solid fa-pen-to-square"></i></button></td>'
                + '<td><button class="btn btn-danger" value="' + args[i].id + '" id="enable-disable"><i class="fa-solid fa-trash"></i></button></td>'

            tableBody.innerHTML = row;


        }
        startDeleteOperation();
        updateBtnProcess();


    }


}

showAllData();


function startDeleteOperation() {
    const deleteBtn = document.querySelectorAll('#enable-disable');
    for (let k = 0; k < deleteBtn.length; k++) {
        deleteBtn[k].addEventListener('click', deleteOperation);

    }

}

function deleteOperation(e) {
    let myId = e.currentTarget.value;
    let dataUser = JSON.parse(localStorage.getItem('data'));
    let indValue = dataUser.findIndex(x => x.id == myId);
    dataUser.splice(indValue, 1);
    localStorage.setItem('data', JSON.stringify(dataUser));
    showAllData();

}

// ====================Update Process=========================================
function updateBtnProcess() {
    const targetUpdateBtn = document.querySelectorAll('#update-user-btn');
    for (var i = 0; i < targetUpdateBtn.length; i++) {
        targetUpdateBtn[i].addEventListener('click', getUpdateId);
    }

}
function getUpdateId(e) {
    const btn = document.querySelector('#button-register-form');
    let myId = e.currentTarget.value;
    console.log(myId);
    let args = JSON.parse(localStorage.getItem('data'));
    let user = args.filter(obj => {
        return obj.id == myId;
    })

    btn.classList.add('edit-btn-disable');
    const registration1 = document.querySelector('.register-row');
    const table1 = document.querySelector('.data-table');
    table1.classList.add('hidden');
    registration1.classList.remove('hidden');
    let parent = registration1.childNodes[1];
    let heading = parent.childNodes[1];
    heading.innerText = 'Update';
    let formParent = parent.childNodes[3];
    let formChild = formParent.childNodes[13];
    formChild.innerText = 'update';
    var id = document.querySelector('input[name="uId"]').value = user[0].id;
    var name = document.querySelector('input[name="name"]').value = user[0].name;
    var email = document.querySelector('input[name="email"]').value = user[0].email;
    var password = document.querySelector('input[name="password"]').value = user[0].password;
    var age = document.querySelector('input[name="age"]').value = user[0].age;
    var city = document.querySelector('input[name="city"]').value = user[0].city;

}

// ===================================Cancel btn process================================
const cancelBtn = document.getElementById('insert-cancel');
cancelBtn.addEventListener('click', cancelBtnProcess);

function cancelBtnProcess() {
    console.log('Cancel me');

    clearFieldRegister();
    const btn = document.querySelector('#button-register-form');
    const registration1 = document.querySelector('.register-row');
    const table1 = document.querySelector('.data-table');
    btn.classList.remove('edit-btn-disable');
    let parent = registration1.childNodes[1];
    let heading = parent.childNodes[1];
    heading.innerText = 'Register';
    let formParent = parent.childNodes[3];
    let formChild = formParent.childNodes[13];
    formChild.innerText = 'Submit';
    table1.classList.remove('hidden');
    registration1.classList.add('hidden');

}



function showErrorMsg() {
    let div = document.createElement('div')
    div.id = 'error-msg'
    div.className = 'alert alert-danger p-0 text-center';
    div.innerText = 'User already exist';
    console.log(div);
    var form = document.getElementById('form-div');
    form.insertBefore(div, form.childNodes[0]);

}
function showSuccessMsg() {
    let div = document.createElement('div')
    div.id = 'success-msg'
    div.className = 'alert alert-success p-0 text-center';
    div.innerText = 'User inserted successfully';
    console.log(div);
    var form = document.getElementById('form-div');
    form.insertBefore(div, form.childNodes[0]);

}

function removeMsg() {
    setTimeout(() => {
        let error = document.getElementById('error-msg');
        let success = document.getElementById('success-msg');
        if (error == null) {
            success.remove();

        } else {
            error.remove();

        }
    }, 4000)
}
