import Absentlist from "../Modals/AddEmp.js";
import express from 'express';
const router = express.Router();

router.post('/', async (req, res) => {
  const { name, email, number, Designation, skills, gender, img } = req.body;

  try {
    // Check if the user exists by email
    const existingUser = await Absentlist.findOne({ email });
    console.log(existingUser);
    if (!existingUser) {
      return res.status(404).send({ status: false, msg: 'User not found' });
    }

    const updatedUser = await Absentlist.findOneAndUpdate(
      { email }, 
      { name, number, Designation, skills, gender, img }, // Fields to update
      { new: true } // Return the updated document
    );

    res.status(200).send({ status: true, msg: 'User updated successfully', data: updatedUser });
  } catch (e) {
    console.log(e.message);
    res.status(500).send({ status: false, msg: 'Internal Error' });
  }
});

export default router;
