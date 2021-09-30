//read a file, captalize every word and write the file.

let minimist = require('minimist');
let args  = minimist(process.argv);

//here we use another module that is allready present in node that is file system = fs
let fs = require("fs");
let stext = fs.readFileSync(args.source, "utf-8");

//aab eak eak word ko capital krne wale hn
let words = stext.split(" ");


for(let i = 0; i < words.length; i++)
{
    words[i] = words[i].toUpperCase();

}
let dtext = words.join(" ");
fs.writeFileSync(args.dest, dtext, "utf-8");



//node firstFiles.js --source=f1.txt --dest=f2.txt