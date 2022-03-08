require('dotenv').config();
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const covid =require('./router/userApi')
const cors = require('cors')


app.use(cors({
    origin: ['http://localhost:3000'],
    credentials: true,
    methods: ['GET', 'POST', 'DELETE', 'PUT','PATCH']
}));


app.use(express.urlencoded({extended:false}));
app.use(express.json())

// set up server
app.listen(process.env.APP_PORT, () => console.log(`started on port ', ${process.env.APP_PORT}`));

// connect mongoose
mongoose.connect(process.env.MDB_CONNECT, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    },
    (err) => {
        if (err) return console.error(err)
        console.log('connected to mongoose')
    });
// pathe of personne
const personne = require('./router/userApi');
app.use('/api/personne', personne);

// pathe of region
const region = require('./router/regionApi');
app.use('/api/region', region);

// pathe of admin
const admin = require('./router/adminApi');
app.use('/api/admin', admin);

// pathe of centre
const centre = require('./router/centreApi');
app.use('/api/centre', centre);

    app.use('/covid-data', covid );



