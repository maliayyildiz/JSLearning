// let fruits = ["Banana", "Orange","Apple","Mango"];

// //toString() 
// //conver array to string 
// console.log(fruits.toString());//Banana,Orange,Apple,Mango
// //it will print element deparating with , 

// //join() will saparete with charater wihich we provide
// console.log(fruits.join("*"));

// //pop()
// //remove last element from array
// fruits = ["Banana", "Orange","Apple","Mango"];
// console.log(fruits.pop());  //it will return removed element 
// console.log(fruits);

// //push() it will add new elelemnt end of the array
// fruits = ["Banana", "Orange","Apple","Mango"];
// console.log(fruits.push("Kiwi")); //5
// //it will add element to the end of array and return lengthof array
// console.log(fruits);

// //shift() i will remove first eleemnt  and it will shift other elements to lover index 
// fruits = ["Banana", "Orange","Apple","Mango"];
// console.log(fruits.shift());//banana
// console.log(fruits);

// //unshift() oppostie of shitf element  make other elelemnt upper index
// fruits = ["Orange","Apple","Mango"];
// console.log(fruits.unshift("Lemon"));//return length
// console.log(fruits[0]);//lemon

//delete element from array
// fruits = ["Banana","Orange","Apple","Mango"];
// delete fruits[1];
// console.log(fruits);

// //concat()  joining/mergin 2 or more arrays
// let arr1=[10,21];
// let arr2=["a","b","c"];
// console.log(arr1.concat(arr2));

// let arr3=["x","y","z"];
// console.log(arr1.concat(arr2,arr3));

// //slice() it will get some elelemtn of array
// fruits = ["Banana", "Orange","Apple","Mango","Kiwi"];
// console.log(fruits.slice(1)); //it is working like substring it is starting from index and create new array
// //["Orange","Apple","Mango","Kiwi"];

//sort() sort element of array
// fruits = ["Banana", "Orange","Apple","Mango","Kiwi"];
// console.log(fruits.sort()); //['Apple', 'Banana', 'Kiwi', 'Mango', 'Orange']

// let nums = [32,31,2,45,54];
// console.log(nums.sort());//[2, 31, 32, 45, 54]

//reverse() revers array
fruits = ["Banana", "Orange","Apple","Mango","Kiwi"]; //['Kiwi', 'Mango', 'Apple', 'Orange', 'Banana']
console.log(fruits.reverse());

