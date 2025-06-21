const jwt = require ( 'jsonwebtoken');
const {promisify} = require('util');
const User = require ('../models/userModel');

exports.protect = async (req, res, next) => {
let token;

//1.Get token from headers
if(
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
){
    token = req.headers.authorization.split(' ')[1];
}

if(!token){
    return res.status(401).json({
        status:'fail',
        message:'You are not logged in!'
    });
}



//2.Verify token
const decoded = await promisify(jwt.verify)(token,process.env.JWT_SECRET);

//3. Check if user still exists
const currentUser = await User.findById(decoded.id);
if(!currentUser){
    return res.status(401).json({
        status:'fail',
        message:'The user no longer exists.'
    });
}

req.user = currentUser;
next();
};

const signToken = id => {
    return jwt.sign({id},process.env.JWT_SECRET,{
        expiresIn:'7d'
    });
};

exports.signup = async (req, res) => {
    try {
        const newUser = await User.create(req.body);
        const token = signToken(newUser._id);
        res.status(201).json({
            status:'success',
            token
        });
    }
    catch(err) {
        res.status(400).json({status:'fail', message: err.message});
    }
};

exports.login = async ( req, res) => {
    const {email, password} = req.body;

    if(!email || !password){
        return res.status(400).json({
            status:'fail',
            message:'Please provide email or password'
        });
    }
    
    const user = await User.findOne({email}).select('+password');
    if(!user || !(await user.correctPassword(password, user.password))){
        return res.status(401).json({
            status:'fail',
            message: 'Incorrect email or password'
        });
    }

    const token = signToken(user._id);
    res.status(200).json({status:'success', token});
};