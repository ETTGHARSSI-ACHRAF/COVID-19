require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors({
    origin : '*',
    methods : ['GET','POST','DELETE','PATCH']
}));

app.use(express.urlencoded({extended:false}));
app.use(express.json());


// connction with monogodb
const mongoose = require('mongoose');
mongoose.connect(process.env.DATABASE_URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
},
(err)=>{
    if(err) return console.error(err)
    console.log('connected to mongoose')
});

// pathe of personne
const personne = require('./routers/personneApi');
app.use('/api/personne', personne);

// pathe of region
const region = require('./routers/regionApi');
app.use('/api/region', region);

// pathe of admin
const admin = require('./routers/adminApi');
app.use('/api/admin', admin);

// pathe of centre
const centre = require('./routers/centreApi');
app.use('/api/centre', centre);


// start server with any port or 4000(cmd:npm run start)
const port = process.env.PORT || 4000;
app.listen(port,()=>{console.log(`started on port ${port}`)});