import express from "express";
const app = express()

app.listen(port,(port)=> {
    console.log(`server successfully running in ${port}...`)
})

export default app