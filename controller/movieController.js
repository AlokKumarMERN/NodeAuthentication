import Movie from "../model/movieSchima.js";


export default class movieClass {
    
    goLogin = (req,res)=>{
        return res.json({"User":req.user})
    }


    addMovie = async (req, res) => {
        try {
            // console.log(req.body);
            const addedData = await Movie.create(req.body);
            return res.status(201).json(addedData)
        }
        catch (err) {
            return res.status(401).json({ Error: `Error in addMovie ${err}` })
        }
    }

    allMovie = async (req, res) => {
        try {
            const allMovies = await Movie.find({});
            return res.status(201).json(allMovies);
        }
        catch (err) {
            return res.status(401).json({ Error: `error occure in allMovies ${err}` })
        }
    }

    singleMovie = async (req, res) => {
        try {
            // console.log(req.params.id);
            const singleMovie = await Movie.findById(req.params.id);
            return res.status(201).json(singleMovie);
        }
        catch (err) {
            return res.status(401).json({ Error: `error occure ${err}` });
        }
    }

    deleteSingleValue = async (req, res) => {
        try {
            const singleDeleteMovie = await Movie.findOneAndDelete(req.params.title);
            return res.status(201).json(singleDeleteMovie);
        }
        catch (err) {
            return res.status(401).json({ error: "error occured".err });
        }
    }

    updateSingleValue = async (req, res) => {
        try {
            const updatesingleValue = await Movie.findOneAndUpdate({ title: req.params.title }, {
                $set: {
                    budget: '22222',
                    title: "updated title"
                }
            })
            return res.status(201).json(updatesingleValue);
        }
        catch (err) {
            return res.status(401).json({Error:'error occure',err})

        }
    }

};

