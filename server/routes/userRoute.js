import express from 'express';
import multer from 'multer';
import User from '../database/models/user.js'
const app = express();
const router = express.Router();

// Multer setup for image uploads
const storage = multer.memoryStorage();
const upload = multer({ storage });


router.post('/', upload.single('photo'), async (req, res) =>{
    
    try {
        const { name, socialhandle } = req.body;
        const photo = req.file ? req.file.buffer : null;
        
        const existingUser = await User.findOne({
            $or: [
                { name: name },
                { socialhandle: socialhandle },
              ],
        });
        if(existingUser){
            res.status(200).json({
                message: "User Already Exist"
            });
            return ;
        }
        const newUser = new User({
          name,
          socialhandle,
          photo,
        });
    
        await newUser.save();
    
        res.status(201).json({ message: 'User created successfully', name: newUser.name });
      } catch (error) {
        console.error('Error saving user:', error);
        res.status(500).json({ message: 'Failed to create user' });
      }
    });

export default router ; 
