"use strict";

let name1 = prompt("Please enter your name", "");
let name2 = prompt("Please enter your name", "");
let name3 = prompt("Please enter your name", "");
// let name1 = "Joe";
// let name2 = "Katrina";
// let name3 = "Mikal";


//equal in length
if (name1.length===name2.length && name3.length===name2.length)
{
  console.log (`All three names, ${name1}, ${name3}, ${name2} are the same length.`);
} 
//longest name
else if (name2.length > name1.length && name2.length > name3.length) {
console.log (`${name2} has the longest name.`);
}

else if (name1.length > name2.length && name1.length > name3.length) {
console.log(`${name1} has the longest name.`);
}

else if (name3.length > name1.length && name3.length > name2.length) {
console.log (`${name3} has the longest name.`);
}

//multiple ties
//console.log is what users will see ... "and" ... //while the computer...uses && is operating
else if (name1.length===name2.length && name1.length>name3.length) {
  console.log (`${name1} and ${name2} tied for the longest`);
}

else if (name2.length===name3.length && name2.length>name1.length) {
  console.log (`${name2} and ${name3} tied for the longest`);
}

else if (name3.length===name1.length && name3.length>name2.length) {
  console.log (`${name3} and ${name1} tied for the longest`);
}









