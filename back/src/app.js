import express from 'express';
import tasksRouter from './routes/task';
import cors from 'cors';
import morgan from 'morgan';

import swaggerJSDoc from 'swagger-jsdoc';
import SwaggerUi from 'swagger-ui-express';

const app = express();

app.use(cors());
app.use(morgan("dev")); 
app.use(express.json());
app.use('/', tasksRouter);


export default app;