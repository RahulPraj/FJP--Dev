// first module -> minimist(use for cmd line argument)

let parser = require('minimist');
let args = parser(process.argv);


let name = args.name;
let age = args.age;

if(age > 30){
    console.log("my name is " + name + " i am below 30 and my age is " +age );
}
else
{
    console.log(" my name is " + name + " i am above 30 and my age is " );
}