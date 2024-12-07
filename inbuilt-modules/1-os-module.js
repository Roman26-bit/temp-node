
// deals with the os of the system
const os = require('os')
const user = os.userInfo();

console.log(user);


const currentos={
  name: os.type(),
  release: os.release(),
  totalmem: os.totalmem(),
  freemem: os.freemem(),
}


console.log(currentos);