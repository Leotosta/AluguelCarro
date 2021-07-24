import express from 'express';
import mongoose from 'mongoose';
import morgan from 'morgan';
import helmet from 'helmet';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import routes from './router/Router';

class App {

    public app: express.Application;

    constructor () {
        this.app = express();
        this.config();
        this.routes();
        this.db();

    }

    private config(): void {
        this.app.use(express.json());
        this.app.use(cookieParser());
        this.app.use(cors());
        this.app.use(helmet());
        this.app.use(morgan('tiny'));

    }

    private routes(): void {
        this.app.use('/', routes);
    }

    private db(): void {
        const connection = 'mongodb://mongo:27017/aluguel';

        mongoose.connect(connection, { useNewUrlParser: true , useUnifiedTopology: true }).catch((e) => {
            console.error('Connection error', e.message);
        });

    }

}

export default new App().app;


