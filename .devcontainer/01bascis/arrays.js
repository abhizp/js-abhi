// const myArr = [0, 1, 2, 3, 4, 5]
// const heros = ["Abhi", "patil"]
// const myArr2 = new Array(1, 2, 3, 4, 5)
// console.log(myArr2);

const mySym = Symbol("Key1") // symbol created

// literal method object 
 const jsObj = {
    name : "abhi",
    [mySym] : "myKey1", // this the obj representation of symbol
    lastName : "Patil",
    adds : "Kalaburgi",
    "Mobile" : 968628
}

// console.log(jsObj.adds) // most used way ti acces a value
// console.log(jsObj["name"]); // 2nd way to access the normal key,s value
// console.log(jsObj["Mobile"]); // if key is string this is the only way to access its value
// console.log(jsObj[mySym]); // accesing the symbol

// jsObj.name = "Nandu" // to change the value
// Object.freeze(jsObj) // you can freeze the object and no more changes will be done further
// jsObj.name = "Abhi" // this change will not happen, and no error will also will be thrown
// console.log(jsObj);  
/* { name: 'Nandu',
    lastName: 'Patil',
    adds: 'Kalaburgi',
    Mobile: 968628,
    [Symbol(Key1)]: 'myKey1'} */
// jsObj.greetings = function(){
//     console.log(`hi there my name is ${this.name}`); // this => is the referenece the object in the same object
//     console.log(this.Mobile);
    
// }
// console.log(jsObj.greetings());






