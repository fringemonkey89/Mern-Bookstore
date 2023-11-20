const  express = require ('express')
const mongoose = require('mongoose')
const PORT = 5555
const app = express();
const Book = require('./models/bookModels')

app.use(express.json())

mongoose.connect('mongodb://127.0.0.1:27017/books-collection', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('app connected to database!')
    app.listen(PORT, () => {
        console.log(`server is listening to port: ${PORT}`)
    })
})
.catch((error) => {
    console.log(error)
})

mongoose.set('debug', true )


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

