const express= require('express')
const router= express.Router();
const { mongoose } = require("mongoose");
const Movies= require('../models/moviesModel')



router.post('/createMovie', async(req,res)=>{

    const {name,dir,year}=req.body;
    const newMovie= new Movies({name,dir,year});

    try{
        newMovie.save();
        res.send("Completed Saving a Movie-Data")
    }
    catch(e){
        return res.status(400).json({message:e})
    }
} )

router.get('/getMoviebyID/:id', async (req,res)=>{

    const {id}=req.params;
    console.log('Movie id: '+id);
    try{
        const movie=await Movies.findById(id);
        console.log(movie);
        res.send(movie)
    }
    catch(e){
        console.log(e);
    }
})

router.get('/getAllmovies', async (req,res)=>{
    try{
        const movies=await Movies.find({})
        console.log(movies);
        res.send(movies)
    }
    catch(e){
        console.log(e);
    }
})

router.patch('/updateMovie/:id', async(req,res)=>{
    const {id}=req.params;
    const {name,dir,year}=req.body;
    const newMovie= new Movies({_id:id,name,dir,year});

    console.log('id '+id+'\n dir: '+dir);
    try {
        await Movies.findByIdAndUpdate(id,newMovie).exec();
        return res.status(200).send('Movie ' + id + ' Updated')
    } catch (error) {
        console.log(error);
    }
})

router.delete('/deleteMovie/:id', async(req,res)=>{
    const {id}=req.params;
    console.log('id '+id);
    try {
        await Movies.findByIdAndDelete(id).exec();
        return res.status(200).send('Movie'+ id +'Deleted')

    } catch (error) {
        console.log(error);
    }
})

router.delete('/deleteMovie/', async(req,res)=>{
   
    try {
        await Movies.deleteMany({});
        return res.status(200).send('All Movies Deleted')

    } catch (error) {
        console.log(error);
    }
})

module.exports=router;
