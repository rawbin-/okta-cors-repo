const http = require('http')

http.createServer((request,response) => {
    console.log('okta-mock:',request.url)
    response.writeHead(200,{
        "Access-Control-Allow-Origin":"*",   // set this to allow cross origin
        "Access-Control-Allow-Methods":'GET,POST,HEAD,DELETE,PUT',
        "Content-Type": 'application/json'
    });
    response.write(JSON.stringify({
        success:true,
        msg:"okta-mock response"
    }));
    response.end();
}).listen(20002);

process.on('uncaughtException', (e)=>{
    console.error('process error is:', e.message);
});