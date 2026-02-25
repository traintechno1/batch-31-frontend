
// fetch('https://jsonplaceholder.typicode.com/todos/3')
// .then(res=> res.json())
// .then(res=> {
//     console.log(res);
// }).catch((error)=>{
//     console.error(error);
// })

async function getMoney(haveMoney){
    const promise = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(haveMoney){
                resolve("I have paid you!");
            }else{
                reject("I will not pay you!")
            }
        }, 3000)
    })

    try{
        const response = await promise;
        console.log(response);
        // .then(r=> console.log(r))
        // .catch(error=> console.log(error))
        // .finally(()=> console.log("Promise completed!"));
    
        for(let i = 0; i< 10; i++){
            console.log(i);
        }
    }catch(error){
        console.log(error)
    }
}

getMoney(true);
// console.log("independent of promise execution");


// function getData(){

//     // it is taking 10 sec
//     getMetadata()
// }

// function getMetadata(otherFunction){

//     // it is taking 3sec
//     otherFunction();
// }