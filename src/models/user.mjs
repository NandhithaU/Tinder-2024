import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    firstname : {
        type : String
    },
    lastname : {
        type : String
    },
    emailId : {
        type : String
    },
    password : {
        type : String
    },
    gender : {
        type : String
    },
    age : {
        type : Number
    }
})

export const User = mongoose.model('User',userSchema)