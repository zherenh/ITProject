const http = require("http");
// const moduleRenderHTML = require("./module/renderHTML");
const moduleRenderStatus = require("./module/renderStatus");

const server = http.createServer();
server.on("request",(req,res)=>{
    const myURL = new URL(req.url, 'http://127.0.0.1:5555');
    console.log(myURL);
    const pathname  = myURL.pathname;

    // res.writeHead(moduleRenderStatus.renderStatus(pathname),{"Content-Type":"text/html"})
    res.write(`
        <html>
            <p>this is a html</p>
        </html>
    `)
    // res.write(module.moduleRenderHTML(pathname))
    res.end();
}).listen(5555,()=>{
    console.log("listen")
})