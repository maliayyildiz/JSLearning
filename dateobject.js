const { connect } = require("puppeteer");

//create date object
let d = new Date();
//console.log(d);

//console.log(d.getDate()); //1-31 day
//console.log(d.getMonth());//0 -11 month (if you put +1 will get exact month)
//console.log(d.getFullYear());//returns current year
//console.log(d.getDate()+" "+d.getMonth()+" "+d.getFullYear()); //get current date

//console.log(d.getHours());//0-23
// console.log(d.getMinutes()); //0-59
// console.log(d.getSeconds()); //0-59

console.log(d.getHours()+" "+d.getMinutes()+" "+d.getSeconds());
