class Test
{
 static a =10; //static variables
 b=20; //non-static

 static m1()
 {
     console.log("static method");
 }

 m2(){
     console.log("Non static");
 }

}
//you can change static variable in this way
Test.a =1000;
//1) we can dirctly access static variable and methods using class name
console.log(Test.a); //10
console.log(Test.b); //undefined

console.log(Test.m1()); // you can call static methiod
//console.log(Test.m2); //incorrect 
//if you want to access non static varialbes/method you need to create object

let t =new Test();
console.log(t.m2());
console.log(t.b);



