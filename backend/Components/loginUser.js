import express from 'express';
import Absentlist from "../Modals/addUser.js";
const router=express.Router();
router.post('/', async (req, res) => {
    const {email} = req.body;
    try {
      const users = await Absentlist.findOne({email}); 
      console.log(users)
      if(!users)
      {
        return res.status(204).send({ status: false, msg: 'User not found' });  // User not found in the database  // User not found in the database  // User not found in the database  // User not found in the database  // User not found in the database  // User not found in the database  // User not found in the database  // User not found in the database  // User not found in the database  // User not found in the database  // User not found in the database  // User not found in the database  // User not found in the database  // User not found in the database  // User not found in the database  // User not found in the database  // User not found in the database  // User not found in the database  // User not found in the database  // User not found in the database  // User not found in the database  // User not found in the database
      }
      res.status(200).send({ status: true, data: users });
    } catch (e) {
      console.log(e.message);
      res.status(501).send({ status: false, msg: 'Internal Error' });
    }
  });
  
  export default router;