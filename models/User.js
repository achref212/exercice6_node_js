import mongoose from "mongoose";
const { Schema, model } = mongoose;
const userSchema = Schema(
    {
        userName: {
            type: String,
            required: true
        },
        password: {
            type: String, required: true
        },
        wallet: {
            type: Number, required: true
        }


    }
)
export default model('User', userSchema)