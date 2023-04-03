const http = require('http')

http.createServer((request,response) => {
    console.log('gateway-mock:',request.url)
    // success response
    // response.writeHead(200,{
    //     "Content-Type": 'application/json'
    // });
    // response.write(JSON.stringify({
    //     success:true,
    //     msg:"gateway-mock response"
    // }));

    // redirect response
    response.writeHead(302,{
        "Location": 'http://localhost:20002/api/authorize'
    });
    response.end();
}).listen(10001);

process.on('uncaughtException', (e)=>{
    console.error('process error is:', e.message);
});