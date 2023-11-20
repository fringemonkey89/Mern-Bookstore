const  express = require ('express')
const mongoose = require('mongoose')
const PORT = 5555
const app = express();

app.use(express.json())

mongoose.connect('mongodb://127.0.0.1:27017/books-collection', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
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



