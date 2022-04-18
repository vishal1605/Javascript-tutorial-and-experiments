// // function student(first, last){
// //     return {
// //         firstName: first,
// //         lastName: last
// //     }

// // }
// function student(first, last){
//     return {
//         first,
//         last
//     }

// }

// let s = student("Vishal", "Gupta");
// // console.log(s['firstName']);
// // console.log(s.firstName);


// console.log(s['first']);
// console.log(s.first);


// ========================Another way to use Object Literal====================

// let name = "Sahil";
// let obj1 = {
//     ['firstName']:name,
//     name:name,
//     lastName:"Gupta"
// }

// console.log(obj1);



// =========================Another way to use Literal==================================

let n = "Name";
let obj1 = {
    [n]:"Vishal",
    ["friend"+n]:"Sahil",
    lastName:"Gupta",

    details(){
        console.log(`my name is ${this.Name} and my friend name is ${this.friendName}`);
    }
}

obj1['details']();
obj1.details();
