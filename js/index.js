// int a = 100;
// To create a variable in Js we have 3 keywords.

// let, var, const

// This is a valid JS variable
// var a = 100;
// console.log(a);
// console.log("Type of a: " + typeof a);

// a = "Shlok";
// console.log(a);
// console.log("Type of a: " + typeof a);

// a = false;
// console.log(a);
// console.log("Type of a: " + typeof a);

// a = null;
// console.log(a);
// console.log("Type of a: " + typeof a);

// a = undefined;
// console.log(a);
// console.log("Type of a: " + typeof a);

// var b;
// console.log(b);

// var arr = [1000, "Anubhav", false, ["This", "is", "a", "javascript", "class"]];
// console.log(typeof arr);
// arr[8] = "Test";
// console.log("value at index 5: " +arr[5]);
// console.log(arr[10]);
// console.log(arr);

var obj = {
    name: "Shlok Mantri",
    mobileNumber: [9871398971, 897219241],
    address: {
        city: "Pune", 
        state: "Maharashtra",
        country: "India",
        landmark: {
            near: "ABC",
            behind: "xyz mall"
        }
    }
    // city: "Pune",
    // country: "India",
};

console.log(obj.name);
console.log(obj["mobileNumber"]);
// console.log(obj.city);
// console.log(obj.country);

obj.gender = "Male";
// obj.city = undefined;

// delete obj.city;

console.log("obj is: ", obj);
console.log("type of obj is: ", typeof obj);