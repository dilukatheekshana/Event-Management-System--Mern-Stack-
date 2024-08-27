import mongoose from "mongoose";

const eventSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        date: {
            type: String,
            required: true, 
        },
    },
    {
        timestamps: true,
    }
);

export const Event = mongoose.model('Event',eventSchema);