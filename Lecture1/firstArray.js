let clargs = process.argv;
let n = parseInt(clargs[2]);

let arr = [];
for(let i = 0; i < n; i++)
{
    let val = parseInt(clargs[i + 3]);
    arr.push(val);
}
for( let i = 0; i < n; i++)
{
    console.log(arr[i]);
}