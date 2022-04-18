// Note: A function definition can have only one ...restParam.
// ex: info(...myName,...friends,...relatives);

// 2)The rest parameter must be the last parameter in the function definition.
// ex: info(...myName,friends);

// function info(myName,...friends){
//     // console.log(arguments);
//     // for(let i in arguments){
//     //     let val = arguments[i];
//     //     console.log(val);
//     // }
//     console.log(myName, friends);
// }

// info("vishal", "Nitesh", "Sahil", "Amit", "Bhushan");


// function findLength(...num){
//     console.log(num.length);
//     console.log(num);
// }
// findLength(1,7,9,5,6,);
let arr = [4,2,6,1,3,2.6];

function multiyply(...args){ //Here is a problem in Rest Operator it expect for multiple values Not a array
    let sum = 0;
    args.forEach(num=>{
        sum+=num;
    })
    console.log(sum);
}
multiyply(arr); //Wrong o/p==> 04,2,6,1,3,2.6
