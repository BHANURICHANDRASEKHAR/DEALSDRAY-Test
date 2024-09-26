import Absentlist from "../Modals/AddEmp.js";
import express from 'express';
import fileupload from './imgUpload.js';
const router = express.Router();

export default router.post('/', async (req, res) => {
  const { name, email, number, Designation, skills, gender,img } = req.body;

  try {
    // Check if the user is already in the database by email or number
    const existingUser = await Absentlist.findOne({ email: email });
    
    if (existingUser) {
      
      return res.status(200).send({ status: false, msg: 'User already exists' });
    }

    // If the user does not exist, proceed to create a new record
    const newUser = await Absentlist.create({
      name,
      email,
      number,
      Date: new Date(),
      Designation,
      skills,
      img, 
      gender
    });

    res.status(200).send({ status: true, msg: 'User added successfully', data: newUser });
  } catch (e) {
    console.log(e.message);
    res.status(501).send({ status: false, msg: 'Internal Error' });
  }
});
