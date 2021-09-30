//npm install minimist
//npm install axios -> for downloading htlm of page by using url

//node firstDownload.js --url="https://www.espncricinfo.com/series/icc-cricket-world-cup-2019-1144415/match-results" --dest="download.html"

let minimist = require("minimist");
let axios = require("axios");
let fs = require("fs");
let args = minimist(process.argv);

//downloading 
let dldPromise = axios.get(args.url);
dldPromise.then(function(response){
    let html = response.data;
    fs.writeFileSync(args.dest,html, "utf-8");
}).catch(function(err)
{
    console.log(err);
})