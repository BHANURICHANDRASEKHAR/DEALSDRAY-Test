import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import env from 'dotenv';
import firebase from "./Components/firebaseconnection.js";
import MongooDB from './dataBase.js';
import imageRoute from './Components/imgUpload.js'
import getUsers from './Components/getEmp.js'
import EditEmployee from './Components/EditEmpolyee.js'
import DeleteRoute from './Components/deleteEmployee.js'
import ADDUser from './Components/addUser.js'
import LoginUser from './Components/loginUser.js'
const app = express();
env.config();
MongooDB();
firebase();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({
    origin: '*',
    credentials: true,
    optionsSuccessStatus: 200, 
}));

import route from './Components/AddEmployee.js';
app.get('/', (req, res) => {
    res.send('Hello World');
});
app.use('/addEmployee', route);
app.use('/image',imageRoute);
app.use('/getEmployees', getUsers);
app.use('/editEmployee',EditEmployee)
app.use('/deleteEmployee',DeleteRoute)
app.use('/adduser',ADDUser);
app.use('/getUsers', LoginUser);
var port=process.env.port || 5000


import functions from 'firebase-functions';

app.listen(port, () => {
    console.log(`Listening on port 5000`);
});
