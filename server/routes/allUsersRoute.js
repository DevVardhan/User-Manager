import express from 'express';
import User from '../database/models/user.js'; // Adjust the import path as needed

const router = express.Router();

// GET route to fetch all users
router.get('/', async (req, res) => {
  try {
    const users = await User.find(); // Fetch all users from the User model
    res.status(200).json(users); // Send the users as a response
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ message: 'Failed to fetch users' });
  }
});

export default router;
