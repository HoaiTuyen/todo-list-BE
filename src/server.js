const express = require('express'); 
const { createServer } = require('node:http');
const { getHomepage } = require('./controllers/homeController');
const configViewEngine = require('./config/viewEngine');
const app = express();
const cors = require('cors')
const connection = require('./config/database');
const apiRouter  = require('./routes/api')
const hostname = '127.0.0.1';
const port = 3001;

app.use(express.json()) // for json
app.use(express.urlencoded({ extended: true })) // for form data

//config template engine
configViewEngine(app);
//config cors
app.use(cors());
//khai báo route
app.use('/v1/api/', apiRouter);
app.use('/', getHomepage);

(async () => {
    try {
        //using mongoose
        await connection();

        app.listen(port, () => {
            console.log(`Backend Nodejs App listening on port ${port}`)
        })
    } catch (error) {
        console.log(">>> Error connect to DB: ", error)
    }
})()