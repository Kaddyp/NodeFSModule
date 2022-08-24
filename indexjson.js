//JSON
var fs = require('fs');
//Open JSON
var jsObj = {
    title : 'Harry Potter and the Chamber of Secrets',
    author : 'J.K. Rowling'
};

var stringifiedJSON = JSON.stringify(jsObj);
console.log(stringifiedJSON);

var parsedJsonString = JSON.parse(stringifiedJSON);
console.log(parsedJsonString);

//Write JSON
fs.writeFile('json_out.json', stringifiedJSON, function(err) {
    if (err) {
        console.log(err);
    }
    else{
        console.log('JSON File Written Successfully!');
    }
});

//Read JSON
fs.readFile('json_out.json', function(err, data) {
    if (err) {
        console.log(err);
    }
    else{
        console.log('JSON File Read Successfully!');
        console.log("As is data: ", data.toString());
        console.log("Parsed data: ", JSON.parse(data.toString()));
        console.log("A property on parsed data - Title: ", JSON.parse(data).title);
    }
});

//Edit JSON
var jsObjFromFile = JSON.parse(fs.readFileSync('json_out.json').toString());
jsObjFromFile.title = "Harry";
fs.writeFileSync('js_out.json', JSON.stringify(jsObjFromFile));