import express from "express";
import movieClass from "../controller/movieController.js";
import passport from "passport";
import Passporrt_local from '../Auth/passport_local.js'

const {addMovie, allMovie,singleMovie,deleteSingleValue,updateSingleValue,goLogin} = new movieClass();

const router = express.Router();
router.get('/movie/getAllMovies',passport.cheakAuthentication,allMovie);
router.get('/movie/getSingleMovie/:id',singleMovie);
router.post('/movie/creareNewMovie',addMovie);
router.delete('/movie/deleteByTitle/:title',deleteSingleValue);
router.put('/movie/updateOneValue/:title',updateSingleValue);

router.post('/user/login',passport.authenticate('local',{failureRedirect:'/user/faild',session:true}),goLogin);
router.get('/user/logout',(req,res)=>{
    req.logout(()=>{
        return res.json("User LogOut")
    })
})

export default router;

