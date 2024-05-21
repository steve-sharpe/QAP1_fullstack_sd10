// Path Object

const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'input.txt');

// Check if file exists, if not, create it
if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, 'Initial file content');
}

// Create a readable stream
const readableStream = fs.createReadStream(path.join(__dirname, 'input.txt'));

// Create a writable stream
const writableStream = fs.createWriteStream(path.join(__dirname, 'output.txt'));

// Pipe the read and write operations
readableStream.pipe(writableStream);

// Print the output
console.log('File is being read and written to output.txt');