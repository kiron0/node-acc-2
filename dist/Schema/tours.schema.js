"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const TourSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: [true, "Please enter tour name"],
        trim: true,
        maxLength: [100, "Tour name cannot exceed 100 characters"],
        minLength: [3, "Tour name cannot be less than 3 characters"],
        unique: true,
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
        minLength: [0, "Price cannot be less than 0"],
    },
    duration: {
        type: Number,
        required: true,
        minLength: [0, "Duration cannot be less than 0"],
        validate: {
            validator: Number.isInteger,
            message: "{VALUE} is not an integer value",
        },
    },
    status: {
        type: String,
        required: true,
        enum: {
            values: ["available", "unavailable"],
            message: "Please select the correct status for tour, it must be either available or unavailable",
        },
    },
}, {
    timestamps: true,
});
exports.default = TourSchema;
