console.log("jai shree krishna")

const fs = require('node:fs');

// ---------------------write file--------------------------------
fs.writeFile("hey.txt","bolo jai shree krishna",function(err){
    if(err){console.error(err)}
    else {console.log("done")}
})
//----------------append file-------------------------------------
fs.appendFile("hey.txt","  radhe radhe shri hari sharnam ",function(err){
if(err){console.error(err)}
else{console.log("done")}
})



// --------------------------rename file -----------------------

// terminal commamd for this file: cd "e:\code file\Web_Development\Backend\Sherian_coding\Lecture2"; node script.js