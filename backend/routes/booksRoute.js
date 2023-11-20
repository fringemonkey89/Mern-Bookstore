const express = require('express')
const Book = require('../models/bookModels.js')

const router = express.Router();

app.get('/', (req, res) => {
    console.log(req)
    return res.status(234).send('Welcome to Mern stack tutorial')
})

app.post('/', async (req, res) => {
     
    try{

        if(
            !req.body.title ||
            !req.body.author ||
            !req.body.publishYear
        ) {
            return res.status(400).send({
                message: 'enter all required fields!'
            })
        }
        const newBook = {
            title: req.body.title,
            author: req.body.author,
            publishYear: req.body.publishYear,
        }

        const book = await Book.create(newBook);
        return res.status(201).send(book)
    }

    catch(error){
        console.log(error.message);
        res.status(500)
    }
})

app.get('/books', async (req, res) => {
    try{
       const books = await Book.find({});
       return res.status(200).json({
        count: books.length,
        data: books
       })
    } catch(error) {
    console.log(error.message);
    res.status(500)    
    }

})

app.get('/:id', async (req, res) => {
    try{
        const { id } = req.params;

       const book = await Book.findOne({ id});

       return res.status(200).json(book)
    } catch(error) {
    console.log(error.message);
    res.status(500).send({ message: error.emssage})    
    }
});

app.put('/:id', async (req, res) => {
     
    try{

        if(
            !req.body.title ||
            !req.body.author ||
            !req.body.publishYear
        ) {
            return res.status(400).send({
                message: 'enter all required fields!'
            })
        }
        const { id } = req.params;

       const result = await Book.findByIdAndUpdate(id, req.body);

       if(!result) {
        return res.status(404).json({ message: 'book not found!'})
       }
       return res.status(200).send({ message: 'book updated successfully'})
       
        }

    catch(error){
        console.log(error.message);
        res.status(500)
    }
})


app.delete('/:id', async (req, res) => {
    try{
        const { id} = req.params;

        const result = await Book.findByIdAndDelete(id)

        if (!result) {
            return res.status(404).json({ message: ' Book not found'})
        }
        
        return res(200).send({ message: 'book deleted successfully' })

    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message})
    }
})