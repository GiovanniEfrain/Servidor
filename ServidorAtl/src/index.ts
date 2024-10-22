import express, { Application, json, Request, Response } from 'express'; 
import cors from "cors";

// Constants 
const app = express();
const port = process.env.PORT || 5000;

//app.use(cors());
app.use(express.json()); 

// Get 
app.get('/', (req: Request, res: Response) => {
    res.send('API RUNNIG...');
});

app.get('/casa', (req: Request, res: Response) => {
    res.send('API CASA...');
});

app.listen(port, () => { 
    console.log(
       `Server running at http://localhost:${port}/`
    )
});
