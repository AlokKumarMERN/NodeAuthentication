// import bodyParser from "body-parser";
import Movie from "../model/movieSchima.js";


export default class movieClass2 {
    addMovie1 = async (req,res) => {
       try{
        console.log(`testing of another router controller`);
       }
       catch(err){
        return res.status(401).json({Error:`Error in addMovie ${err}`})
       }
    }

   
};