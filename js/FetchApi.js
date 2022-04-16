fetch('http://localhost:8080/all-users',{
    method:'GET'
})
.then((res)=> {
    if (res.ok) {
        console.log("success");
        return res.json();
        
        
    } else {
        throw Error("Not working"+" "+res.url);
    }
    
}).then((data)=> {
    data.forEach(element => {
        console.log(element);
    });
    // console.log(data);
})
.catch((err)=> console.log("Error is here", err));


// ==================Post method======================================

// fetch('http://localhost:8080/add',{
//     method:"POST",
//     body:JSON.stringify({
//         name:'Shivani',
//         email:'Shivani500@gmail.com',
//         password:500,
//         age:22,
//         city:'Kalyan'
//     }),
//     headers:{
//         'Content-type': 'application/json'
//     }

// })
// .then((res)=> {
//     if (res.ok) {
//         console.log("success"+" "+res);

//         return res.text();
        
        
//     } else {
//         throw Error("Not working"+" "+res.url);
//     }
    
// }).then((data)=> {
//     // data.forEach(element => {
//     //     console.log(element);
//     // });
//     console.log(data);
// })
// .catch((err)=> console.log("Error is here", err));


// =======================Delete Operation================================

// fetch('http://localhost:8080/single-delete/27',{
//     method:'DELETE'
// })
// .then((res)=> {
//     if (res.ok) {
//         // console.log("success");
//         return res.text();
        
        
//     } else {
//         throw Error("Not working"+" "+res.url);
//     }
    
// }).then((data)=> {
    
//     console.log(data);
// })
// .catch((err)=> console.log("Error is here", err));



// =======================Multiple Delete Operation================================

// let args = [21,26];
// fetch('http://localhost:8080/delete',{
//     method:'DELETE',
//     body:JSON.stringify(args),
//     headers:{
//         'Content-type': 'application/json'
//     }
// })
// .then((res)=> {
//     if (res.ok) {
//         // console.log("success");
//         return res.text();
        
        
//     } else {
//         throw Error("Not working"+" "+res.url);
//     }
    
// }).then((data)=> {
    
//     console.log(data);
// })
// .catch((err)=> console.log("Error is here", err));