import Absentlist from "../Modals/addUser.js";
import express from 'express';
const router = express.Router();

export default router.post('/', async (req, res) => {
  const { username, email, password } = req.body;

  try {
    // Check if the user is already in the database by email or number
    const existingUser = await Absentlist.findOne({ email: email });
    
    if (existingUser) {
      
      return res.status(200).send({ status: false, msg: 'User already exists' });
    }

    const newUser = await Absentlist.create({
        username,
        email,
        password,
    
    });

    res.status(200).send({ status: true, msg: 'User added successfully', data: newUser });
  } catch (e) {
    console.log(e.message);
    res.status(501).send({ status: false, msg: 'Internal Error' });
  }
});
