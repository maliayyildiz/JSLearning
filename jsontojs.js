let text ='{ "employees" : [' +
'{ "firstName" : "John" , "lastName" : "Doe" }, ' +
'{ "firstName": "Anna" , "lastName" : "Smith" },' +
'{ "fisrtName" : "Peter" , "lastName" : "Jones" } ]}';

//how to convert json to JS
let obj = JSON.parse(text);
//extract data
console.log(obj.employees[1].firstName + "  "+ obj.employees[1].lastName);


