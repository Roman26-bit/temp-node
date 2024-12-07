// it deales with the paths fo the files or folders

const path = require('path')
console.log(path.sep);


const filepath = path.join('/for-path','inner-file','first.txt');
console.log(filepath);

const base = path.basename(filepath);
console.log(base);

const absolute = path.resolve(__dirname,'for-path')
console.log(absolute);




