// hello(); //Call a function


// function hello(){ //Function is declared
//     console.log("Hello world");
// }

//Js iterpreter is able to move your declarion to top position always when you make
//function after call.


// ===============================Hoisting on Js Var==========================================
// var x;   //this part is done by Js interpreter
// x = undefined;  //The value is also assign by Js interpreter


// console.log(x); //ans is undefined


// var x = 5;

// // ===================================================

// "use strict"  //To avoid bug

// var y; //Done by js interpreter
// y = 5;  //Done by me
// console.log(y);

// ===============================Hoisting on Js Let & Const==========================================
// const a; //Declare above before use
// let b;  //Done by Js interpreter
// // But in o/p it will give you initialization error because Js interpreter 
// // will not assign "undefined" to let & const
// console.log(a);
              //Temporal dead zone
// const a = 3;
// let b = 5;


// Note:- This Hoisting rule also apply on Local & Global Variables


function a(){
    console.log(b);
}

var b = 10;
a();


