import dotenv from 'dotenv';
import cors from 'cors';

// eslint-disable-next-line no-unused-vars
import database from './database/connection';

dotenv.config();

const { errors } = require('celebrate');

import express from 'express';
import userRoutes from './routes/userRoutes';
import pedestrianRoutes from './routes/pedestrianRoutes';
import vehicleRoutes from './routes/vehicleRoutes';
import controlRoutes from './routes/controlRoutes';
import tokenRoutes from './routes/tokenRoutes';


class App {
    constructor() {
        this.app = express();
        this.middlewares();
        this.routes();
    }

    middlewares() {
        this.app.use(cors());
        this.app.use(express.urlencoded({ extended: true }));
        this.app.use(express.json());
    }

    routes() {
        this.app.use('/users/', userRoutes);
        this.app.use('/pedestrians/', pedestrianRoutes);
        this.app.use('/vehicles/', vehicleRoutes);
        this.app.use('/controls/', controlRoutes);
        this.app.use('/tokens/', tokenRoutes);
        this.app.use(errors());
    }
}

export default new App().app;
