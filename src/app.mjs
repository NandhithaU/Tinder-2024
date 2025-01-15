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
        res.status(400).json ({error:`something went wrong :${err.message}`})
    }

})

//Get all users
app.get('/feed',async (req,res) =>{

    try {
        const users = await User.find({})
        res.status(200).send(users)
    } catch (err) {
        res.status(400).json ({error:`something went wrong :${err.message}`})
    }

})

//Get single user
app.get('/user',async (req,res) =>{
    const emailId = req.body.emailId

    try {
        const users = await User.find({emailId})
        res.status(200).send(users)
    } catch (err) {
        res.status(400).json ({error:`something went wrong :${err.message}`})
    }
    
})

//update a user
app.patch('/user', async (req,res) => {
    const userId = req.body.userId  
    const data   = req.body
    
    try{
        await User.findByIdAndUpdate({_id : userId},data)
        const result = await User.find({_id:userId})
        res.status(200).json({ message: "User updated successfully", result: result });
    } catch (err) {
        res.status(400).json ({error:`something went wrong :${err.message}`})
    }
})

//Delete a user
app.delete('/user', async(req,res)=>{
    const userId = req.body.userId
    
    try {
        await User.findByIdAndDelete(userId)
        res.status(200).json({message:"User deleted successfully"})
    } catch (err) {
        res.status(400).json ({error:`something went wrong :${err.message}`})
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