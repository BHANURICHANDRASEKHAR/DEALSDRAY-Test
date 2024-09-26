import Absentlist from "../Modals/AddEmp.js";
import express from 'express';
const router = express.Router();

router.post('/', async (req, res) => {
  const { email } = req.body; 

  try {
   
    const existingUser = await Absentlist.findOne({ email });
    
    if (!existingUser) {
      return res.status(404).send({ status: false, msg: 'User not found' });
    }

   
    const deletedUser = await Absentlist.findOneAndDelete({ email });

    res.status(200).send({ status: true, msg: 'User deleted successfully', data: deletedUser });
  } catch (e) {
    console.log(e.message);
    res.status(500).send({ status: false, msg: 'Internal Error' });
  }
});

export default router;
