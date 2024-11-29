import express from 'express';
import morgan from 'morgan';
import { authenticateToken } from './middlewares/authenticate.middleware.js';

import usersRoutes from './routes/users.routes.js';
import authRoutes from './routes/auth.routes.js';
import tasksRouter from './routes/tasks.routes.js'


const app = express();

// Middlewares
app.use(morgan('dev'));
app.use(express.json());


//Routes
app.use('/api/login',authRoutes);
app.use('/api/users',usersRoutes);
app.use('/api/tasks',authenticateToken, tasksRouter);

export default app;