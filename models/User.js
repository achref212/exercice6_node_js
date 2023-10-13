import mongoose from "mongoose";
const { Schema, model } = mongoose;
const userSchema = Schema(
    {
        userName: {
            type: String,

        },
        password: {
            type: String
        },
        wallet: {
            type: Number
        }


    }
)
export default model('User', userSchema)