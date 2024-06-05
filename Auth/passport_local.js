import passport from "passport";
import {Strategy as PassportStrategy} from 'passport-local';
import Movie from "../model/movieSchima.js";


passport.use(new PassportStrategy({
    usernameField:'email'
},async (email,password,done)=>{
    try{
        const user = await Movie.findOne({'email':email});
        if(!user || user.password!=password){
           return done(null,false);
        }
   
        return done(null,user);
    }catch(err){
        console.log("there is Error ",err);
    }
}));


// serilize object into session in index file
passport.serializeUser((user,done)=>{
   return done(null,user._id);
});


passport.deserializeUser(async (id,done)=>{
    try{
      const data = await Movie.findById(id);
      return done(null,data)
    }catch(err){
        console.log("There is error ",err);
    }
});


passport.cheakAuthentication = (req,res,next)=>{
    if(req.isAuthenticated()){
        return next();
    }
     return res.json({"Message":"User Not Login"})
}

passport.setAuthenticatedUser = (req,res,next)=>{
    if(req.isAuthenticated()){
        res.locals.user = req.user;
    }
}

export default passport;