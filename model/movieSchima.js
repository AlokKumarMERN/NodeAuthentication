import mongoose from 'mongoose';

const movieSchema = new mongoose.Schema( {
    image:{
       type:String,
       required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    discription:{
        type:String,
        required:true
    },
    length:{
        type:String,
        required:true
    },
    budget:{
        type:String,
        required:true
    },
    revenue:{
        type:String,
        required:true
    },
    tagline:{
        type:String,
        required:true
    }
} ,{timestamps:true});

const Movie = mongoose.model("movieSchimaDB",movieSchema)

export default Movie;