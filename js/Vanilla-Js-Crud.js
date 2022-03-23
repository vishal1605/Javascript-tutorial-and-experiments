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
        var args = JSON.parse(localStorage.getItem('data'));
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
    var args = JSON.parse(localStorage.getItem('data'));
    if (args == null) {

    } else {
        // table.style.display = 'block';
        for (var i = 0; i < args.length; i++) {

            row += '<tr><th scope="row">' + args[i].id + '</th><td>' + args[i].name + '</td><td>' + args[i].email + '</td>'
                + '<td>' + args[i].password + '</td><td>' + args[i].city + '</td><td>' + args[i].age + '</td>'
                + '<td><button class="btn btn-primary" value="' + args[i].id + '" id="update-user-btn"><i class="fa-solid fa-pen-to-square"></i></button></td>'
                + '<td><button class="btn btn-danger" value="' + args[i].id + '" id="enable-disable"><i class="fa-solid fa-trash"></i></button></td>'

            tableBody.innerHTML = row;

        }

    }

}

showAllData();


const deleteBtn = document.querySelectorAll('#enable-disable');
deleteBtn.forEach(btn=>{
    btn.addEventListener('click', (e)=>{
        
        let myId = e.currentTarget.value;
        console.log(myId);
        let dataUser = JSON.parse(localStorage.getItem('data'));
        let index = dataUser.findIndex(x => x.id == myId);
        console.log(index);
        dataUser.splice(index, 1);
        localStorage.setItem('data', JSON.stringify(dataUser));
        showAllData();

    })
})

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
        if (error==null) {
            success.remove();
            
        } else {
            error.remove();
            
        }
    }, 4000)
}
