const string = "JavaScript es maravilloso, con JavaScript 2021 el mundo revoluciono";
const renplacedString = string.replace("JavaScript", "Python");
console.log(renplacedString);

const renplacedString2 = string.replaceAll("JavaScript", "Python")
console.log(renplacedString2);


// class Message {
//    #show(val) {
//       console.log(val);
//    };
//    get #add(val) {
//       ...
//    }
// }

// const message = new Message();
// message.show('Hola!');


const promise = new Promise((resolve, reject) => reject("1"));
const promise2= new Promise((resolve, reject) => resolve("2"));
const promise3 = new Promise((resolve, reject) => resolve("3"));

Promise.any([promise, promise2, promise3])
   .then(response => console.log(response));


// class AnyClass {
//    constructor(element) {
//    this.ref = new WeakRef(element)
//    }
//    {...}
// }

let isTrue = true;
let isFalse = false;
console.log(isTrue &&= isFalse);

let isTrue2 = true;
let isFalse2 = false;
console.log(isTrue2 ||= isFalse2);

let isTrue3 = undefined;
let isFalse3 = false;
console.log(isTrue3 ??= isFalse3);