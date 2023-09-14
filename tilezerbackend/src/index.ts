import express from 'express'

import diaries from './routes/diaries'
import materials from './routes/menu/materials'

const app = express()
app.use(express.json()) // Middleware
const PORT = 3000

app.get('/ping', ( _req , res) => {
    console.log("ping !! Date: " + new Date().toLocaleDateString())
    res.send('pong')
})

app.listen(PORT, () => {
    console.log("server runnig port  " + PORT)  
})

// ------------------------------ ROUTES

app.use('/api/diaries', diaries)

app.use('/api/materials', materials)


