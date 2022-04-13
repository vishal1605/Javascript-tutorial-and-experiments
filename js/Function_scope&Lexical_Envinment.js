// // for(let i=0; i<3; i++){
// //     var a = 3;
// //     console.log(a);
// // }
// // console.log(a+" = Outside");

// // function a() {
// //     var b = "Vishal"; //Inside of function if any variable declared it cant access outside of the function scope

// // }

// // a();
// // console.log(b);

// // function a() {
// //     console.log(b);

// // }

// // a();
// // var b = "Vishal";

// function b() {
//     console.log(q);
// }

// function a() {
//     var q = 1;
//     b();
// }

// q = 2;
// a();

function someNum() {
    return 3;
    
}

function evenOdd(params) {
    if (params()%2==0) {
        console.log("even");
    } else {
        console.log("even");
        
    }
    
}
evenOdd(someNum);
