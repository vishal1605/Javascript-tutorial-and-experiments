let sum = 0;

function cal(a){
    for(let i=0;i<=a;i++){
        sum+=i;
    }
    return sum;

}

function memoAddition(fun){
    let cache={};
    return(
        (...value)=>{
            
            if(value in cache){
                console.log("fetching from cache");
                return cache[value];
            }else{
                console.log("Calculiting first time");
                let result = fun(value)
                cache[value] = result;
                return result;
            }
        }
    )
}
console.time();
let caching = memoAddition(cal)
console.log(caching(5));

console.timeEnd();


console.time();
console.log(caching(5));
console.timeEnd();