import express from "express";
import {connectDb} from "./config/database.mjs"
import {User} from "./models/user.mjs"
const app  = express()

const port = 7777;
app.use(express.json()); 

app.post('/signup',async (req,res) => {

    //creating a new instance of the user model
    let user =  new User(req.body)

    try {
        await user.save()
        res.status(200).send(`User created successfully`)
    } catch (err) {
        res.status(400).send (`Error saving the user :${err.message}`)
    }

})


connectDb.then(()=>{
    console.log(`Database connection successfully established..`)
    app.listen(port,()=> {
        console.log(`server successfully running in ${port}...`)
    })
}).catch((err) => {
    console.log(`Error in connecting database : ${err}`)
})