//create class
class Student
{
  //this keyword means it is bleongs to class
    // setDetails(){
    //     this.sid=101;
    //     this.sname="ali";
    //     this.grade="A";
    // }
    //we can do like this also
    // setDetails(sid,sname,grade){
    //     this.sid=sid;
    //     this.sname=sname;
    //     this.grade=grade;
    // }
    
    /*
    instade of method we can create consructor
    constructor for initializing data only 
    can take the argument
    whenever create an object consructor automaticly invoke 
    we do not need to call constructor with object name
    */
    constructor(sid,sname,grade){
        this.sid=sid;
        this.sname=sname;
        this.grade=grade;
    }

    display()
    {
        console.log(this.sid,this.sname,this.grade);
    }
}
//if you want to use this class you need to create an object
// let stu = new Student();
// stu.setDetails(101,"ali","A"); //call data
//stu.display(); //print it

//consructor
let stu = new Student(101,"ali","a");
stu.display(); //print it

//method call explicitly and complex
//we can create any number ogf object
let stu1 = new Student(102,"ali","a");
stu1.display();
let stu2 = new Student(103,"veli","b");
stu2.display();
let stu3 = new Student(104,"deli","c");
stu3.display();
//this are all independent
