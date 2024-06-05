import express from "express";
import movieRouter from './movieRouter.js';
import Movie2Router from "./Movie2Router.js";


const router = express.Router();

router.use(express.json());

router.use('/',movieRouter)
router.use('/rout',Movie2Router);


export default router;

