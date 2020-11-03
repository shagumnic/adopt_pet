import express from 'express';
import bodyParser from 'body-parser';

import animalsRoutes from './routes/animals.js';

import resultsRoutes from './routes/results.js';

const app = express();
const PORT = 5000;

app.use(bodyParser.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.use('/animals', animalsRoutes);

app.use('/results', resultsRoutes);

app.get('/', (req, res) => {
    console.log('TEST!');

    res.send('Hello from Homepage. ');
});

app.listen(PORT, () =>console.log(`Server running on port: http://localhost:${PORT}`));
