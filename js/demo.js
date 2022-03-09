// var c = [];
// var d = [1, 44, 75, 12, 3, 7, 22, 19]

// function addValue() {
//     for (var i = 0; i < d.length; i++) {
//         c.push(d[i]);
//         c.indexOf(d[i]);
//     }
//     return c;
// }
// // var value = addValue();
// // var names = "Vishal"
// // console.log(4- +"3");
// // // NaN(Not a number);
// // console.log(isNaN(5));
// d.forEach(element => console.log(element));

// var a = 10;
// var b = 20;
// a = a+b;
// b = a-b;
// a = a-b;
// console.log("A = "+a+": "+"B = "+b);

// var a = 10;
// var b = '10';
// console.log(a === b);  /* == only check values */
/* === Its also check data type*/



var doSum = function (a, b) {
    return a + b;
    

}

var sumDo = (a,b) => {

    var total = a + b;
    console.log(total);

}

var value = doSum(5,8);
console.log(value);
