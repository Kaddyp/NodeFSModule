//File
var fs = require('fs');
//Open File
fs.open('sample.txt', 'r+', function (err, fd) {
  if (err) {
    console.log(err);
  }
  else{ 
    console.log('File Opened Successfully!');
  } 
});
//Getting info
fs.stat('sample.txt', 'r+', function (err, stats) {
    if (err) {
      console.log(err);
    }
    else{ 
      console.log('Is File ? ', stats.isFile());
      console.log('Is Directory ? ', stats.isDirectory());
      console.log('Size: ', stats.size);
      console.log(stats.isBlockDevice(), stats.isCharacterDevice(), stats.isSymbolicLink(), stats.isFIFO(), stats.isSocket());
    } 
  });

//WriteFile (Overwrite)
fs.writeFile('sample_write.txt', 'Data Written to file!', function (err) {
    if (err) {
        console.log(err);
    }
    else{ 
        console.log('File Written Successfully!');
    } 
});
//ReadFile
fs.readFile('sample_write.txt', function (err, data) {
    if (err) {
        console.log(err);
    }
    else{ 
        console.log('Data: \n', data.toString());
    } 
});
//Rename
fs.rename('sample_write.txt', 'sample_write_renamed.txt', function (err) {
    if (err) {
        console.log(err);
    }
    else{ 
        console.log('Renamed Successfully!');
    } 
});
//Append
fs.appendFile('sample_append.txt', 'Data Appended to File. \n', function (err) {
    if (err) {
        console.log(err);
    }
    else{ 
        console.log('Appended Successfully!');
    } 
});
//Delete
fs.unlink('sample.txt', function (err) {
    if (err) {
        console.log(err);
    }
    else{ 
        console.log('Deleted Successfully!');
    } 
});