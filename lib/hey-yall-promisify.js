'use strict';

const fs = require('fs');

// 1. READ file
// 2. Spllit by name
// 3. Delete last item in returned array
// 4. Console.log('Hello' + name)
let inFile = process.argv[2];


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
  data.forEach((name) => {
    console.log('Hello, ' + name + '!');
  })
})
.catch((error)=>{
  console.error(error.stack);
});






//
//
// fs.readFile(inFile, { encoding: 'utf8' }, (error, content) => {
//   if (error) {
//     console.error(error);
//   }
//
//   // 'Billy\nJames\nNick\n' --> ['Billy', 'James', 'Nick']
//
//   let lines = content.split('\n');
//
//   // clean up the array by removing the empty line
//   lines.pop();
//
//   lines.forEach((line) => {
//     console.log('Hello, ' + line + '!');
//   });
// });
