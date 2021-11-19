const obj = {
   name: 'Samuel',
   age: 15,
   country: 'Per'
}

let { name, ...all } = obj;
console.log(all);

const obj = {
   nae: 'Samuel',
   age: 15,
};

const obj1 = {
   ...obj,
   country: 'Per'
};

console.log(obj1);

const helloWorld = () => {
   return new Promise ((resolve, reject) => {
      (true)
      ? setTimeout(() => resolve('Hello World'), 3000)
      : reject(new Error('Test Error'))
   });
};

helloWorld()
   .then(Response => console.log(Response))
   .catch(error => console.log(error))
   .finally(() => console.log('Finalizado'))


const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
const match = regexData.exec('2021-04-21'); 
const year = match[1]
const month = match[2]
const day = match[3]

console.log(year, month, day);