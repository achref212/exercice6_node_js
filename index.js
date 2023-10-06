//import
import express from 'express';
import mongoose from 'mongoose';

//import router
import userRoute from './routes/user.js'

//const
const app = express()
const hostanme = "127.0.0.1"
const port = 3000
//DB
mongoose.set('debug', true)
mongoose.Promise = global.Promise;
mongoose
    .connect('mongodb://127.0.0.1:27017/Exercice6')
    .then(() => console.log("Connected to MongoDB"))
    .catch(err => {
        console.log(err);
    })


app.use(express.json())
app.use('/user', userRoute)
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});