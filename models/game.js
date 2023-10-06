import mongoose from "mongoose";
const { Schema, model } = mongoose;
const gameSchema = Schema(
    {
        title: {
            type: String,
            required: true
        },
        discription: {
            type: String, required: true
        },

        price: {
            type: Number, required: true
        },

        quantity: {
            type: Number, required: true
        }


    }
)
export default model('Game', gameSchema)