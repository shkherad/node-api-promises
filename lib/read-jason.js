'use strict';

const fs = require('fs');

const readJSON = function(filename, callback) {
  new Promise(function(resolve, reject){
    fs.readFile(filename, {encoding: 'utf8'}, function(err, res){
      if (err) {reject(err)};
      resolve(res);
    })
  })
  .then(function(data){
    JSON.parse(data);
  })
  .then(function(data){
    callback(null, data);
  })
  .catch(function(error){
    callback(error);
  });
};
