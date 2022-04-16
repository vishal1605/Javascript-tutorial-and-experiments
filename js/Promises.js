let stocks = {
    Fruits: ["strawberry", "grapes", "banana", "apple"],
    liquid: ["water", "ice"],
    holder: ["cone", "cup", "stick"],
    toppings: ["chocolate", "peanuts"],
};

let shopIsOpen = true;

function order(time, work) {
    return new Promise((resolve,reject)=>{
        if (shopIsOpen) {
           setTimeout(()=>{
               resolve(work())
           },time)
        } else {
            reject(()=>console.log("Our shop is closed"))
        }
    })
}

order(2000, ()=>console.log(`${stocks.Fruits[0]} was selected`))
.then(()=>console.log("production has started"))
.then(()=>order(4000,()=>console.log("Fruit has been chopped")))
.then(()=>order(2000,()=>console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} added`)))
.then(()=>order(1000,()=>console.log("start the machine")))
.then(()=>order(2000,()=>console.log(`ice cream placed on ${stocks.holder[1]}`)))
.then(()=>order(3000,()=>console.log(`${stocks.toppings[0]} as toppings`)))
.then(()=>order(2000,()=>console.log("Serve Ice Cream")))
.catch(()=>console.log("customer is left"))
.finally(()=>console.log("Because day is ended"));