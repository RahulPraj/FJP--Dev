//creating big file to use in callback
//node createBigfile.js --dest=big.data

let minimist = require("minimist");
let fs = require("fs");
let args = minimist(process.argv);

let arr = [];
for(let i = 0; i<5000000; i++)
{
    arr.push(i);
}

//here we joining the array and creating a string

let str = arr.join("\n");
fs.writeFileSync(args.dest,str, "utf-8");
fs.appendFileSync(args.dest, str, "utf-8");
fs.appendFileSync(args.dest, str, "utf-8");
fs.appendFileSync(args.dest, str, "utf-8");
fs.appendFileSync(args.dest, str, "utf-8");
fs.appendFileSync(args.dest, str, "utf-8");
fs.appendFileSync(args.dest, str, "utf-8");