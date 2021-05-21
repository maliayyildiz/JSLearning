let person = 
{
    firstname:"Ali",
    lastname:"Veli",
    age:35,
    weight:90
}

//how can i access the object
// we need to specify properties name
console.log(person["firstname"])//Ali
console.log(person.age);//35
//add new propertiy the existing object
person["heignt"]=5.5;  //or  person.height = 5,5
console.log(person.heignt);
//update existing property
person["weight"]=95;
console.log(person.weight);//95
//remove property from object
delete person["age"];
console.log(person.age);//undefined

//hoe to read object property
//for /in loop 
console.log("+++++")
for(let x in person)
{
    //console.log(x);//print only property names
    //console.log(person[x]);//print only property value
    console.log(x+" "+person[x]);//it will print property and value
}







