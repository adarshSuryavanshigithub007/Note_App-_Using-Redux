const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const dotenv = require('dotenv');
const colors = require('colors');
const connectionDB = require('./config/db');
const { errorHandler, notFoundMidware } = require('./middleware/ErrorHandler');


const app = express()
//.env
dotenv.config()

app.use(cors())

//database connection
connectionDB()

// middleweres
app.use(express.json())
app.use(morgan('dev'))


//routes
app.get('/',(res,req)=>{
    res.status(200).send({
        message: '8080'
    })
})

//routes
app.use('/api/v1/user',require('./routes/userRoutes'))

app.use(errorHandler);
app.use(notFoundMidware);
//Listen port
const port = process.env.PORT || 8080

app.listen(port,()=>{
    console.log(`Server is running on dev mode ${process.env.NODE_MODE}  Server is running on port http://localhost: ${process.env.PORT}`.bgCyan.white)
    
})