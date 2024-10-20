import "dotenv/config"
import express from 'express'
import cors from 'cors'
import db from "./config/mongo"

import routes from "./routes"

// Declaracion de variables 

const PORT = process.env.PORT || 3001; 

const app = express(); // Express 
app.use(express.json()); // Middleware
app.use(cors()); // Cors

// ----------------------------- Remote DB
// MongoDB 

db(

).then( () => console.log('Conexion Ready') );

// ----------------------------- Test API Ping

app.get('/ping', ( _req , res) => {
    console.log("ping !! Date: " + new Date().toLocaleDateString())
    res.send('pong')
});

app.listen(PORT, () => {
    console.log("server runnig port  " + PORT)  
});

// ------------------------------ Routes
app.use('/', routes)

// app.use('/api/diaries', diariesRouter)
// app.use('/api/materials', materialsRouter)
