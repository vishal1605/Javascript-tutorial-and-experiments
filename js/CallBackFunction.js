// function x(y) {
//     console.log("X");
//     y();
// }
// x(function y() {
//     console.log("Y");
// });

// Another example of callBack function When its click
// function working(params) {
//     params();
    
// }

// function addSome() {
//     let card = document.querySelector('.card');
//     card.innerHTML = `<h1 style='color:red'>Vishal</h1>`;
    
// }

// working(addSome);

// ===============Real example of callBack function================================
function num(a,b) {
    return a+b;
    
}
function x(params) {
    if (params(2,4)%2==0) {
        console.log("even");
    } else {
        console.log("odd");
    }
    
}
x(num)
