const express = require('express');
const cors = require("cors");
const bodyParser = require('body-parser');

// create express app
const app = express();
app.use(cors());

// setup the server port
const port = process.env.PORT || 5000;

// parse request data content type application/x-www-form-rulencoded
app.use(bodyParser.urlencoded({extended: false}));

// parse request data content type application/json
app.use(bodyParser.json());

// define root route
app.get('/', (req, res)=>{
    res.send('Hello World');
});

const employeeRoutes = require('./src/routes/employee.route');
const tournamentRoutes = require('./src/routes/tournament.route');
const tatamiRoutes = require('./src/routes/tatami.route');
const categoryRoutes = require('./src/routes/category.route');
// const competitorRoutes = require('./src/routes/competitor.route');

app.use('/api/v1/employee', employeeRoutes);
app.use('/api/v1/tournament', tournamentRoutes);
app.use('/api/v1/tournament', tatamiRoutes);
app.use('/api/v1/tournament', categoryRoutes);
// app.use('/api/v1/tournament', competitorRoutes);

// listen to the port
app.listen(port, ()=>{
    console.log(`Express is running at port ${port}`);
});