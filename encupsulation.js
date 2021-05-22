class Student
{
    /*
      encapsulation is wrapping up the data under a single unit.
      encapsulation is data hiding. process of biding data means we save 
      data variable with function acting on the data we define the data and work on the data
      we will careate a functuons all the functions along wih data will be present in one entity thats called class
    */
   //we create consructor to initiate the variables
    constructor()
    //we declare variables
    {
        let name, marks;
    }
    //we will work on them with methods (getter/setter)
    //get we read
    getName()
    {
       return this.name;
    }
    //set we write
    setName(name)
    {
      this.name=name;
    }

    getMarks()
    {
        return this.marks;
    }
    
    setMarks(marks)
    {
        this.marks=marks;
    }

}

let stu = new Student();

stu.setName("John");
stu.setMarks(90);

console.log(stu.getName(),stu.getMarks());