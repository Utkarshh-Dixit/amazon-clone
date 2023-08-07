/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

const {onRequest} = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");

const express = require("express");

const cors = require("cors");

const stripe = require("stripe")('sk_test_51NbiYJSGAe30jpUNW3ZWMupLozmBh9T89Rofr07WkgVeMsR4mul2tiXEmaQ6puCnynJceNCYyRTKDeImYwDUXoG2005ZbXojzg');

//API

//App config
const app = express();

//Middlewares
app.use(cors({ origin: true}));
app.use(express.json());

//API Routes
app.get('/', (request, response) => response.status(200).send('Hello world'))

//Listen command
exports.api = functions.https.onRequest(app)