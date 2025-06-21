const mongoose = require('mongoose');
const bcrypt = require ('bcryptjs');

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true, 'User must have a name'],

    },
    email: {
        type: String,
        required:[true, 'User must have an email'],
        unique:true,
        lowercase: true,
    },
    password:{
        type:String,
        required:[true, 'Password is required'],
        minlength: 6,
        select:false
    },
    role:{
        type:String,
        enum:['admin', 'teacher'],
        default: 'teacher'
    }
});

userSchema.pre('save', async function (next){
    if (!this.isModified('password')) return next();
    this.password = await bcrypt.hash(this.password, 12);
    next();
});

userSchema.methods.correctPassword = async function (candidate, actual){
    return await bcrypt.compare(candidate,actual);
};

module.exports = mongoose.model('User', userSchema);