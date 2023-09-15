import "dotenv/config"
import express from 'express'
import cors from 'cors'

import diariesRouter from './routes/diaries'
import materialsRouter from './routes/materials'

const PORT = process.env.PORT || 3001; 

const app = express();
app.use(express.json()); // Middleware
app.use(cors()); // 

app.get('/ping', ( _req , res) => {
    console.log("ping !! Date: " + new Date().toLocaleDateString())
    res.send('pong')
});

app.listen(PORT, () => {
    console.log("server runnig port  " + PORT)  
});

// ------------------------------ ROUTES

app.use('/api/diaries', diariesRouter)
app.use('/api/materials', materialsRouter)


