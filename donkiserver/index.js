import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';


import postRoutes from './routes/posts.js'

const app = express();

app.use(bodyParser.json({limit: "30mb", extender : true}));
app.use(bodyParser.urlencoded({limit: "30mb", extender : true}));
app.use(cors());

/// must use this after cors
app.use ('/posts', postRoutes)

const MONGO_URL = 'mongodb+srv://donkininja:donkininja123@cluster0.ztlfx.mongodb.net/Donki_Database?retryWrites=true&w=majority'
const PORT = process.env.PORT || 5000; 

mongoose.connect(MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true})
    .then(()=> app.listen(PORT, ()=> console.log(`Server is live on port : ${PORT}`)))
    .catch((error)=> console.log(error.message));

    mongoose.set('useFindAndModify',false);