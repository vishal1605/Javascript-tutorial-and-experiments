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
var allData = [];
function registerForm(e) {
    const contain = document.querySelector('.contain');
    if (contain.innerText == 'Register') {
        e.preventDefault();
        const id = Math.floor(Math.random() * 100) + 1;
        console.log(id);
        var args = JSON.parse(localStorage.getItem('data'));
        if (args != null) {
            var val = args.some(data => {
                return data.id == id;
            });
            if (val) {
                console.log("user is already present");

            } else {
                console.log("Register"); const data = new FormData(e.target);
                const name = data.get('name');
                const email = data.get('email');
                const password = data.get('password');
                const age = data.get('age');
                const city = data.get('city');

                var param = { id, name, email, password, age, city }
                console.log(param);
                allData.push(param);
                localStorage.setItem('data', JSON.stringify(allData));
                showAllData();

            }
        }
        else {
            console.log("Register"); const data = new FormData(e.target);
            const name = data.get('name');
            const email = data.get('email');
            const password = data.get('password');
            const age = data.get('age');
            const city = data.get('city');



            var param = { id, name, email, password, age, city }
            console.log(param);
            allData.push(param);
            localStorage.setItem('data', JSON.stringify(allData));

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

}


function clearFieldRegister() {
    const input = document.querySelectorAll('#register-form input');
    for (var i = 0; i < input.length; i++) {
        input[i].value = "";

    }
}


(function showAllData() {
    const tableBody = document.getElementById('table-body');
    console.log(tableBody);
    var row = "";
    var args = JSON.parse(localStorage.getItem('data'));
    for (var i = 0; i < args.length; i++) {

        row += '<tr><th scope="row">' + args[i].id + '</th><td>' + args[i].name + '</td><td>' + args[i].email + '</td>'
            + '<td>' + args[i].password + '</td><td>' + args[i].city + '</td><td>' + args[i].age + '</td>'
            + '<td><button class="btn btn-primary" value="' + args[i].id + '" id="update-user-btn"><i class="fa-solid fa-pen-to-square"></i></button></td>'
            + '<td><button class="btn btn-danger" value="' + args[i].id + '" id="enable-disable"><i class="fa-solid fa-trash"></i></button></td>'

        tableBody.innerHTML = row;

    }

}())