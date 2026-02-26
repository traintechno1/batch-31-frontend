
// Hoisting
// console.log(a);  // Temporal dead zone

let a = 500;

console.log(a);

// undefined(); // Type Error

// add(); // Reference Error

var add = () => {
    console.log(10 + 20);
}

add();

console.log(a);








// var a = 1000;
// var a = 2000;

// var a = 100;
// let a = 2000;

// function ex(){
//     // var a = 200;
//     console.log(a); //200
// }

// ex();
// console.log(a); // ?200

