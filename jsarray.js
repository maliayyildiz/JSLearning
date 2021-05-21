// //create array
// let car= ["saab","volve", "BMW"];
// let cars = new Array("Wv","Merco","Ctroen"); //2nd way
// //print array
// console.log(cars);
// //we can accees specific element wit index number in array index starts with 0
// console.log(car[2]);
// //update element
// car[0]="Opel";
// console.log(car[0]);
// //in array we can store different type of data
// let myarray=[100,"ali",10.2,true];
// console.log(myarray);
//store object in array
let person1=
           {
             name:"john",
             age:35
            };
let person2=
            {
              name:"mary",
              age:20
            };
//let save in array our objects
let myarray2=[person1,person2];
//lets extract them
console.log(myarray2);
console.log(myarray2[0]);

let fruits = ["banana","Orange","Apple", "MAngo"];
console.log(fruits.length);
//looping elelemnts from array

for(let i=0; i<=fruits.length-1; i++)
{
  console.log(fruits[i]);
}
//looping element from array using forr/of loop like foreach
for(el of fruits)
{
  console.log(el);
}

//how can you check is it array or not  typeof
console.log(typeof fruits);//object

console.log(Array.isArray(fruits));//true means fruits is array
