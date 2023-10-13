//import
import express, { urlencoded } from 'express';
import mongoose from 'mongoose';
import morgan from 'morgan';
import cors from 'cors';
//import router
import userRoute from './routes/user.js'
import { errorHandler, notFoundError } from './middlewares/error-handler.js';
//const

const app = express()
const hostanme = "127.0.0.1"
const port = 3000


app.use(express.urlencoded({ extended: true }))
//DB
mongoose.set('debug', true)
mongoose.Promise = global.Promise;
mongoose
    .connect('mongodb://127.0.0.1:27017/Exercice6')
    .then(() => console.log("Connected to MongoDB"))
    .catch(err => {
        console.log(err);
    })



app.use('/user', userRoute)
//app.use('/buy', achatRoutes)
//app.use('/game', gameRoutes)
//app.use
app.use(cors())
app.use(express.json())
// app.use(notFoundError)
// app.use(errorHandler)
app.use(morgan('dev'))


app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});