const express = require(`express`);
const mongoose = require(`mongoose`);

const UserSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true, unique: true },
    idAr: { type: String, default: "none", unique: true },
    ubicacion: { type: String, default: "none" }
});


module.exports = mongoose.model(`User`, UserSchema);