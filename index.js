import express from 'express';
import dotenv from 'dotenv';
import DB from './configuration/dbConfiguration.js';
import router from './router/mainRouter.js';
import session from 'express-session';
import passport from 'passport';
import Passport_local from './Auth/passport_local.js'


dotenv.config();
const PORT = process.env.PORT;

const app = express();

app.use(session({
    secret:'Alock',
    name:'Node_API',
    resave:false,
    cookie:{
        maxAge: (1000*60*100)
    }
}));

app.use(passport.initialize());
app.use(passport.session())

express.json();
app.use('/',router);


app.listen(PORT,(err)=>{
    if(err){
        return console.log(`Error occure ${err}`);
    }
    console.log("Node Started");
})
