const http = require('http')

const server = http.createServer((req,res)=>{
    if(req.url==='/'){
        res.end('obito : welcome to home page')
    }
    if(req.url==='/aboutus'){
        res.end('obito : welcome to about page')
    }
    res.end(`
        <h1>Oops!</h1>
        <p>We cant seem to find the page you are looking for</p>
        <a href="/">back home</a>
    `)
    })
server.listen(3000) 

