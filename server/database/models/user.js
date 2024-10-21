import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    name: {type: String , required: true , unique: true}, 
    socialhandle: { type: String, required: true, unique: true },
    photo: {type: Buffer } ,
    createdAt: {
        type:Date , 
        default: new Date(),
    },
});

const User = mongoose.model('User' , UserSchema);

export default User ; 