var arr = [60,10,40,50,30,20];
// var arr = [10,20,30,40,50, [60, 70, 80, [90, 100]]];
// var arr2 = [60, 70, 80, 90];

// arr.push(...arr2);

// var arr2 = arr.map((a) => {
//     let value = 300;
//     return a * 100 + value;
// });

// arr.forEach((v)=> {
//     let value = 300;
//     console.log(v * 100 + value);
// })

// var lengthOfArr = arr.length;
// console.log(lengthOfArr);

// console.log(arr.join(" "));

// arr = arr.concat([1,2,3,4,5]);

// arr = arr.copyWithin(1, 2, 4);

// console.log(arr.every((v)=> v % 20 == 0 ));

// var str = "Shwetank";
// arr = [...str];
// arr = arr.fill("*", 1, arr.length - 1);
// arr = arr.join("");

// console.log(arr.filter((v)=>v > 30));

// console.log(arr.findIndex(v=> v == 10));

// arr = arr.flat(Infinity);

// console.log(arr.includes(60));

// console.log(arr.indexOf(50));

// console.log(arr.keys());

// console.log(arr.lastIndexOf(50));

// console.log(arr.pop());
// console.log(arr.reverse());

// let sum = arr.reduce((sum, ele) => {
//     return sum + ele;
// }, 0);

// let max = arr.reduce((max, ele) => {
//     return max > ele ? max : ele;
// }, arr[0]);

// console.log(sum);
// console.log(max);

// console.log(arr.shift());

// console.log(arr.slice(2 , 4));

// console.log(arr.splice(2,3));

// console.log(arr.some((e)=> e > 50));

// console.log(arr.sort((num1, num2)=> num1 - num2));

// arr.unshift(100, 200);

console.log(arr);
// console.log(arr2);

let users = [
    {
        name: "Yash",
        email: "yash@gmail.com",
        mobile: 9172628672
    },
    {
        name: "Hemant",
        email: "hemant@gmail.com",
        mobile: 8926731982
    },
    {
        name: "Anubhav",
        email: "anubhav@gmail.com",
        mobile: 9813751879
    },
    {
        name: "Shwetank",
        email: "shwetank@gmail.com",
        mobile: 9172628672
    },
];

users.push({
    name: "Test",
    email: "test@gmail.com",
    address: "Test"
})

let userIndex = users.findIndex(ele=> ele.name == "Yaash");
if(userIndex >= 0){
    console.log("user is present");
}else{
    console.log("user is not present");
}

console.log(users);