const  express = require ('express')
const PORT = 5555
const app = express();



app.listen(PORT, () => {
    console.log(`server is listening to port: ${PORT}`)
})