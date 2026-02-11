// for(var count = 0; count <= 10; count++){
//     console.log(count);
// }

// var a = 0;
// console.log("In while loop:")
// while(a <= 20){
//     console.log(a);
//     a++;
// }

// var a = 11;
// do{
//     console.log(a);
//     a++;
// }while(a<=10);

var obj = {
    name: "Yash",
    city: "Pune"
}

for(var key in obj){
    console.log(key + " : " + obj[key]);
}

var arr = [100, "Yash", 200, 300];

for(var val of arr){
    console.log(val);
}