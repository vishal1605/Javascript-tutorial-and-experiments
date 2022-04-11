let ages = [5,10,15,17,18,24,27,31,36,39,40]

// let val = ages.map(function(params) {
//     return params*2;

    
// });

// console.log(val);

// let newAges = ages.filter(arr=>(arr>=18 && arr<=30));
// console.log(newAges);

// let num = ages.sort((a, b)=>a-b);
// console.log(num.reverse());

let sums = ages.reduce((sum, arr)=> sum+=arr,0);
// let max = ages.reduce((max, arr)=>{
//     if (max<arr) {
//         max=arr;
        
//     }
//     // console.log(max);
//     return max;
    
// },0);

// Find 2nd biggest number

let max2Number = function(max3) {
    
    let max = ages.reduce((max, para)=>{
        if (max<para) {
            max = para;
            
        }
        return max;

    },0)

    let ind = ages.indexOf(max);
    ages.splice(ind, 1);
    let max2 = ages.reduce((max, para)=>{
        if (max<para) {
            max = para;
            
        }
        return max;

    },0)

    max3 = max2;
    return max3;

    
};
console.log(max2Number());