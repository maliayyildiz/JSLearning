//how to create string
let s = "welcome";
//2nd way 
//let s = new String();

//methods
//chatAt() it will return signle character using by index like Java
console.log(s.charAt(0)); //w
//concat() like java
console.log(s.concat(" to js programming")); //welcome to js programming
//concat more than 2 string
console.log(s.concat(" to js programming").concat("!"));

//replace like java
s= "Welcome to Java";
console.log(s.replace("Java","Javascript"));

//substirng() like java
console.log(s.substring(0,7)); // welcome
console.log(s.substring(8));//to Java

//toLowerCase()
console.log(s.toLowerCase());
//toUpperCase()
console.log(s.toUpperCase());

//split() it will return array like java
s="welcome,to,JS";
let arr = s.split(",");
console.log(arr[0]); //welcome
console.log(arr[1]); // to
console.log(arr[2]); // js

//trim() like java
s = "    JS    ";
console.log(s.trim());  

//numbers (integer or decimal)
//let x = 100;
//let x = new Number(100);

let x = 102; //integer value
let y = 10.3 // desimal value
let z = 10e3; //exponencial value

console.log(x,y,z);

//methods
//isInteger()
x=10;
y= 1.5;
z = "x";

console.log(Number.isInteger(x)); //true
console.log(Number.isInteger(y)); //false
console.log(Number.isInteger(z)); //false

//parseInt() ==> convert a string to number
s ="welcome";
//Number.parseInt(s); // itcan not convert bcz it it not numarical characters
s="12345";
console.log(typeof(s)); //string
console.log(typeof(Number.parseInt(s)));//number

//parseFlouat()
s="12.23";
console.log(typeof(s)); //string
console.log(typeof(Number.parseInt(s)));//number

//toString
let n = 1234;
console.log(typeof(n)); //number
console.log(typeof(Number.toString(s)));//string


