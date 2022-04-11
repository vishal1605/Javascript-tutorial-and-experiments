function x(y) {
    console.log("X");
    y();
}
x(function y() {
    console.log("Y");
});

// Another example of callBack function When its click
// function working(params) {
//     params();
    
// }

// function addSome() {
//     let card = document.querySelector('.card');
//     card.innerHTML = `<h1 style='color:red'>Vishal</h1>`;
    
// }

// working(addSome);