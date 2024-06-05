import express from "express";
import movieClass2 from "../controller/movieController2.js";

const {addMovie1} = new movieClass2();

const router1 = express();

router1.use(express.json());

router1.post('/movie/creareNewMovie',addMovie1);
export default router1;