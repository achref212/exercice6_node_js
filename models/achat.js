import mongoose from "mongoose";
const { Schema, model } = mongoose;
const achatSchema = Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        },
        gameId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Game'
        },
        bought: {
            type: Date, required: true
        }

    }
)
export default model('Achat', achatSchema)