import express from 'express';
import cors from 'cors';
import routes from '../src/routes';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use('/api', routes);

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});