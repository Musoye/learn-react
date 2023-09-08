import dotenv from 'dotenv';
import express from 'express';

import router from './routes/index.js';
import globalErrorHandler from './middlewares/globalErrorHandler.js';

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', router);


// global error handler
app.use(globalErrorHandler);

export default app;
