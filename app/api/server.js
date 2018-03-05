import express from 'express';
import Sequelize from 'sequelize';
import {getDb} from './helpers/dbHelper';
import PirateModel from './models/pirateModel';
import PirateRouter from './routes/pirateRoutes';

const app = express();

// connecting to sqlite database
const db = getDb();

// defining a model
const Pirate = PirateModel(db);

// syncing db to the model changes
db.sync();

// router
const pirateRouter = PirateRouter(Pirate);

// parse request body as json
app.use(express.json());

// using the router at /api/pirates
app.use('/api/pirates', pirateRouter);

app.listen(5000, () => console.log('App running on port 5000'));
