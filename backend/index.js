const  express = require ('express')
const mongoose = require('mongoose')
const PORT = 5555
const app = express();
const booksRoute = require('./routes/booksRoute.js')

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    next();
  });
  

app.use(express.json())
app.use('/books', booksRoute)


app.get('/', (req, res) => {
    console.log(req)
    return res.status(234).send('Welcome to Mern stack tutorial')
})

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


