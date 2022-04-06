const http=require("http")

const server=http.createServer((req,res)=>
{
    console.log("Request has been made from browser");
})

server.listen(300,"localhost",()=>
{
    console.log("server is runnig on port 3000");
})