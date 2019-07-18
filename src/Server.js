import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import router from './routes';


const express = require('express');

const app = express();
const uri = 'mongodb://admin:admin1@cluster0-shard-00-00-42ibx.mongodb.net:27017,cluster0-shard-00-01-42ibx.mongodb.net:27017,cluster0-shard-00-02-42ibx.mongodb.net:27017/test?replicaSet=Cluster0-shard-0&ssl=true&authSource=admin';
const option = {
  user: 'admin',
  pass: 'admin',
  useNewUrlParser: true,
  dbName: 'movies',
};
mongoose.connect(uri, option);

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(router);

mongoose.connection.on('connected', () => {
  console.info('Mongoose connection has been connected.');
});

app.listen(8081, () => {
  console.log('Start server at port 8081.');
});
