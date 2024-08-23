import mongoose from 'mongoose';

//creating user model
const userSchema = new mongoose.Schema({
    email:{
        type: String,
        required: true,
        unique: true,
    },
    password:{
        type: String,
        required: true,
    }
}, {timestamps: true});

const User = mongoose.model('User', userSchema);

export default User;