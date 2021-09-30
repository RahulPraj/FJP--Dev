// Task 1 read a file.(disk)
//Task 2 calculate prime(cpu)
//task 2 is done in parallel with t1.

//node firstCallback.js --source=f1.txt --dest=f2.txt --n=40000

let minimist = require("minimist");
let fs = require("fs");
let args = minimist(process.argv);

//function for IsPrime
function IsPrime(x)
{
    let isPrime = true;
    for(let div = 2; div * div <= x; div++)
    {
        if(div % 2 == 0)
        {
            isPrime = false;
            break;
        }
        return isPrime;
    }
}

//task 1 begin from here
let t1 = Date.now();
console.log("starting task1 at " + t1 % 100000);

fs.readFile(args.source, function(data){
    let t2 = Date.now();
    console.log("finishing task1 at " + t2 % 100000);
    console.log(t2-t1);
})
//task1 end here.

//task2 begin from here
let t3 = Date.now();
console.log("starting task2 at" + t3 % 100000);

let arr = [];
for(let i = 2; i < args.n; i++)
{
    let isPrime = IsPrime(i);
    if(isPrime == true)
    {
        arr.push(i);
    }
}
let t4 = Date.now();
console.log("finishing task2 at" + t4 % 100000);
console.log(t4-t3);
