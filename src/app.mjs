import express from "express";
const app = express();
const port = 7777;

app.listen(port,(port)=>{
    console.log(`server is sucessfully running in port ${port}`)
})
export default app;