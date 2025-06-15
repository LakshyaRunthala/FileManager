const path = require('path');
const fs = require('fs');


const filePath = path.join(__dirname,'file.txt');

//create a file
function createFile(content){
    fs.writeFile(filePath,content,(err) =>{
        if(err)
           return console.error('error in creting file', err);
        console.log(' File Created Successfully!');
    });
}

//read a file
function readFile() {
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) 
            return console.error('Error in reading file:', err);
        console.log(' File content:\n', data);
    });
}

//delete a file
function deleteFile(){
    fs.unlink(filePath,(err) =>{
        if(err) 
            return console.error('Error in deleting the file:',err);
        console.log('File deleted successfully!');
    });
}
//createFile("This is a test file!");
readFile();
//deleteFile();