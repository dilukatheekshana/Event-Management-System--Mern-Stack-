import express from 'express'

import { Event } from '../models/eventModel.js';

const router = express.Router();

//Route for save a new Event
router.post('/', async (request, response) => {
    try{
        if(
            !request.body.title ||
            !request.body.description ||
            !request.body.location ||
            !request.body.date
        ){
            return response.status(400).send({
                message: 'Send all required fields: title, description, location, date',
            });
        }
        const newEvent={
            title: request.body.title,
            description: request.body.description,
            location: request.body.location,
            date: request.body.date,
        };

        const event = await Event.create(newEvent);
        return response.status(201).send(event);
    }catch (error) {
        console.log(error.message);
        response.status(500).send({  message: error.message });
    }
});

// Route for Get All Events From Database
router.get('/', async (request, response) => {
    try{
        const events = await Event.find({});

        return response.status(200).json({
            count:  events.length,
            data: events
        });
    }catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

// Route for Get All Events From Database  by id
router.get('/:id', async (request, response) => {
    try{

        const { id } =  request.params;

        const event = await Event.findById(id);

        return response.status(200).json(event);
    }catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

//Route for Update Event
router.put('/:id', async (request, response) => {
    try {
        if(
            !request.body.title ||
            !request.body.description ||
            !request.body.location ||
            !request.body.date
        ){
            return response.status(400).send({
                message: 'Send all required fields: title, description, location, date',
            });
        }

        const { id } = request.params;
        const result = await Event.findByIdAndUpdate(id, request.body);

        if(!result) {
            return response.status(404).json({ message: 'Event not Found' });
        }

        return  response.status(200).send({ message: 'Event Update Successfully'});

    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message});
    }
});

// Route for Delete a Event
router.delete('/:id', async (request, response) => {
    try {
        const { id } = request.params;

        const result = await Book.findByIdAndDelete(id);

        if(!result) {
            return response.status(404).json({ message: 'Event not found' });
        }

        return response.status(200).send({ message: 'Event deleted successfully' });

    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

export default router;