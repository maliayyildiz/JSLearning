function student()
{
   this.name="Ali";
   this.gender = "male";
}

student.prototype.age=35;

stu1 = new student();
console.log(stu1.name);
//add new data
//stu1.age =35; comment out it becasu we want to make age for all

console.log(stu1.name,stu1.gender,stu1.age);

stu2 = new student();
//you can not acces age bcs it did not define yet it is
// belngs to stu1 object 
//hoe can we make it for all ? with prototype
//we will define before object and it will belongs to all object 
console.log(stu2.name,stu2.gender,stu2.age);

