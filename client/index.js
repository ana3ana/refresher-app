//Importing dependencies, axios and express
import axios from 'axios';
import express from 'express';

//creating an express http server
const app = express();

//asigning a dinamic port -not set in stone
const PORT = process.env.PORT || 5000;

//instruct app to listen on port 
app.listen(PORT, () => console.log(`Listen on port ${PORT}`));
