// const {readFileSync,writeFileSync} = require('fs')
// const first = readFileSync('./for-path/inner-file/first.txt','utf8')
// const second = readFileSync('./for-path/inner-file/second.txt','utf8')
// console.log(first);
// console.log(second);
// writeFileSync('./for-path/both.txt', `${first} \n\n${second}`);



//=============================================or=============================



// const mad = require('fs')
// const first = mad.readFileSync('./for-path/inner-file/first.txt','utf8')
// const second = mad.readFileSync('./for-path/inner-file/second.txt','utf8')
// console.log(first);
// console.log(second);
// mad.writeFileSync('./for-path/both.txt', `${first} \n\n${second}`);



//=============================================or=============================


// const mad = require('fs')
// mad.readFile('./for-path/inner-file/first.txt','utf8',(err,result)=>{
//     if(err){console.log(err);return;
//     }
//     const first = result;
//     console.log(first);
//     mad.readFile('./for-path/inner-file/second.txt','utf8',(err,result)=>{
//         if(err){console.log(err);return;}
//         console.log(result);
//         mad.writeFile('./for-path/both.txt','utf8',(err,result)=>{
//             if(err){console.log(err);return;}
//             console.log(result);
//         })
//     })
// })








function readFileAsyncSimulation(callback) {
    setTimeout(() => {
        callback("File content");
    }, 2000); // Simulate a 2-second delay
}

console.log("Start");

readFileAsyncSimulation((data) => {
    console.log("File content:", data); // Callback is executed after 2 seconds
});

console.log("End");