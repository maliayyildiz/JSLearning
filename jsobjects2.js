//object can contain methods let work on it

let employees=
{
    empname: "ali",
    empid: 101,
    job: "Engineer",
    basicsal: 50000,
    bonus: function calbonus()//funtion name is optional ""calbonus
    //each mehod will be presenting with one of the property name
    {
        //if function inside of object we call method
        //we need to use "this" keyword which is representing object
        //this keyword allow us to reach property of object
        return((this.basicsal * 10)/100)
    }
   
};
//how to access property name
console.log(employees["empname"]);
//how we van acces the method inside the object
//when we want to reach we have to use bonus() with parantehiss
console.log(employees.bonus()); 
