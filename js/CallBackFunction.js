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
// function num(a,b) {
//     return a+b;
    
// }
// function x(params) {
//     if (params(2,4)%2==0) {
//         console.log("even");
//     } else {
//         console.log("odd");
//     }
    
// }
// x(num)



// =======================CallBack function Another example===================================

// let stocks = {
//     Fruits : ["strawberry", "grapes", "banana", "apple"],
//     liquid : ["water", "ice"],
//     holder : ["cone", "cup", "stick"],
//     toppings : ["chocolate", "peanuts"],
//  };

//  let order = (fruit_name, call_production) =>{

//     setTimeout(function(){
  
//       console.log(`${stocks.Fruits[fruit_name]} was selected`)
  
//   // Order placed. Call production to start
//      call_production();
//     },2000)
//   };
  
//   // 2nd Function
  

//  let production = () =>{

//     setTimeout(()=>{
//       console.log("production has started")
//       setTimeout(()=>{
//         console.log("The fruit has been chopped")
//         setTimeout(()=>{
//           console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} Added`)
//           setTimeout(()=>{
//             console.log("start the machine")
//             setTimeout(()=>{
//               console.log(`Ice cream placed on ${stocks.holder[1]}`)
//               setTimeout(()=>{
//                 console.log(`${stocks.toppings[0]} as toppings`)
//                 setTimeout(()=>{
//                   console.log("serve Ice cream")
//                 },2000)
//               },3000)
//             },2000)
//           },1000)
//         },1000)
//       },2000)
//     },0000)
  
//   };

//   order(0, production);


// ================Some seperate example========================
// setTimeout(()=>{
//   console.log("i am wake up");
//   setTimeout(()=>{
//     console.log("going for bathroom");
//     setTimeout(()=>{
//       console.log("doing brush");
//     },4000)
//   },2000)
// },3000)