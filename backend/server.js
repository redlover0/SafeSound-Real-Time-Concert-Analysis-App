import express from 'express';
import cors from 'cors';
import "dotenv";

const requestHandler = express();

requestHandler.use(cors());

requestHandler.use(express.json());

const port = process.env.PORT || 5000;
console.log(port);

requestHandler.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    console.log(`http://localhost:${port}`);
})

requestHandler.get('/api/v1/system-data', (req, res) => {
    res.send('Hello World');
})