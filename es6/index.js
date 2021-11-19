function newFuncion(name, age, country) {
   var name3 = name3 || "oscar";
   var age = age || 32;
   var country = country || "Per"
   connsole.log(name, age, country);
}

//Es6
function newFuncion2(name = "Oscar", age = 32, country = "per") {
   console.log(name, age, country);
};

newFuncion2();
newFuncion2("Ricardo", 23, "Per");

let hello = "Hello";
let world = "World";
let epicfrase = hello + ' ' + world;
console.log(epicfrase);
let epicfrase2 = `${hello} ${world}`;
console.log(epicfrase2);

let lorem = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. \n"
+ "Dicta asperiores inventore beatae doloribus modi nulla corrupti voluptatibus hic"

//es6
let lorem2 = `otra frase epica que nesecitamos
ahora es otra frase epica
`;

console.log(lorem);
console.log(lorem2);

let person = {
   'name': 'oscar',
   'age': 32,
   'country': 'PER'
}

console.log(person.name, person.age);

let { name2 } = person;
console.log(name2);

let team1 = ['Oscar', 'Julian', 'Ricardo'];
let team2 = ['Valeria', 'Jessica', 'Camila'];

let education = ['David', ...team1, ...team2];

console.log(education);

{
   var globalVar = "Global Var";
}

{
   let globalLet = 'Global Let';
   console.log(globalLet);
}

console.log(globalVar);

var a = 'b';
a = 'a';
console.log(a);

let name = 'Samuel';
let age = 15;

//es5
obj = { name: name, age: age, };
//es6
obj2 = { name, age };
console.log(obj2);

const names = [
   {name: 'Samuel', age: 15},
   {name: 'Camila', age: 27}
]

let listOfNames = names.map(function (item) {
   console.log(item.name);
})

let listOfNames2 = names.map(item => console.log(item.name));

const listOfNames3 = (name, age, country) => {
  // ...
}

const listOfNames4 = name => {
   //...
}

const square = num => num * num;

const helloPromise = () => {
   return new Promise((resolve, reject) => {
      if(false) {
         resolve('Hey!');
      } else {
         reject('Ups!');
      }
   });
}

helloPromise()
   .then(response => console.log(response))
   .catch(error => console.log(error))

class calculator {
   constructor() {
      this.valueA = 0;
      this.valueB = 0;
   }
   sum(valueA, valueB) {
      this.valueA = valueA;
      this.valueB = valueB;
      return this.valueA + this.valueB;
   }
}

const calc = new calculator();
console.log(calc.sum(2, 2));

//import { hello } from './module.js';

//hello();

function* helloWorld() {
   if (true) {
      yield 'Hello, ';
   } 
   if (true) {
      yield 'World';
   }
};

const generateHello = helloWorld();
console.log(generateHello.next().value);
console.log(generateHello.next().value);
console.log(generateHello.next().value);