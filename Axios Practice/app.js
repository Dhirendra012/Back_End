const express = require('express');
const app = express();
require('express-async-errors');

const connectDB = require('./db/connect');
require('dotenv').config();
app.use(express.json());

const notFoundMiddleware = require('./middle_ware/not-found');
const errorHandlerMiddleware = require('./middle_ware/error-handler');

// Routes
app.use(express.static('./public'))
const testRouter = require('./routes/tasks');
app.use('/api/v1' , testRouter);

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URL);
        app.listen(3000 , () => {
            console.log(`Server is listening on port no 3000...`);
        });
    }
    catch ( error ){
        console.log(error);
    }
};

start();