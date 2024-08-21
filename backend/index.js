import express, { request, response } from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from 'mongoose';
import { Event } from "./models/eventModel.js";
import eventsRoute from './routes/eventsRoute.js';
import cors from 'cors';

const app = express();

// Middleware for parsing request body
app.use(express.json());

app.use(cors());

app.get('/', (request, response) => {
    console.log(request)
    return response.status(234).send('welcome to mern stack crud opperation')
});

app.use('/events',  eventsRoute);


mongoose
.connect(mongoDBURL)
.then(() => {
    console.log('App connected to Database');
    app.listen(PORT, () => {
        console.log(`App is listening to port: ${PORT}`);
    });
})
.catch((error) => {
    console.log(error);
});
