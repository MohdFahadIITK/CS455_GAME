import express from 'express';
import cors from 'cors';
import routes from './routes';
import dotenv from 'dotenv';
import {config} from './config/config'

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.disable('x-powered-by');

const allowedOrigins = process.env.ALLOWED_ORIGINS ? process.env.ALLOWED_ORIGINS.split(',') : [];

const corsOptions = {
    origin: allowedOrigins,
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
    optionsSuccessStatus: 204,
};

app.use(cors(corsOptions));
app.use(express.json());

app.use('/api', routes);

app.get('/', async (req: express.Request, res: express.Response)=>{
    res.status(200).json({message : "Hello"});
})

app.listen(config.server.port, () => {
    console.log(`Server listening on port ${config.server.port}`);
});
