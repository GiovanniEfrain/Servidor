import express from 'express'

import diaries from './routes/diaries'

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


// ---------------------------------------------
app.use('api/diaries', diaries)


