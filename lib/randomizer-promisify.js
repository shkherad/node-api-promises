'use strict';
const fs = require('fs');

let inFile = process.argv[2];

// 1. reaf file
// 2. split by \n
// 3. pop off last element
// 4. callback function
    //console.log result

    new Promise((resolve, reject)=> {
      fs.readFile(inFile, { encoding: 'utf8' }, (error, data) => {
        if (error) { reject(error); }
        resolve(data);
      });
    })
    .then((data)=>{
      return data.split('\n')
    })
    .then((data)=>{
      data.pop();
      return data
    })
    .then((data)=>{
      data.sort(() => {
        0.5 - Math.random();
      })
      return data
    })
    .then((data)=>{
      data.forEach((line) => {
        console.log(line);
    })
  })
    .catch((error)=>{
      console.error(error.stack);
    });


//
//
// fs.readFile(inFile, { encoding: 'utf8' }, (error, content) => {
//   //first thing is check error
//   if (error) {
//     console.error(error);
//   }
//
//   let lines = content.split('\n');
//
//   //clean up the array
//   lines.pop();
//
//   let randomLines = lines.sort(function () {
//     return 0.5 - Math.random();
//   });
//
//   randomLines.forEach((line) => {
//     console.log(line);
//   });
// });
