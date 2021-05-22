class Employee
{
    constructor(eid,ename)
    {
        this.eid = eid;
        this.ename = ename;
    }
}

Employee.prototype.sal = 50000;
//we can add new funtion in a class using prototype
Employee.prototype.display= function()
{
   console.log(this.eid,this.ename,this.sal);
}


emp = new Employee(101,"David");
// console.log(emp.eid,emp.ename,emp.sal);
emp.display();
emp2 = new Employee(102,"Ali");
// console.log(emp2.eid,emp2.ename,emp2.sal);
emp2.display();