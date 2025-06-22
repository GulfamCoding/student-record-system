
const mongoose = require('mongoose');
const express = require('express');
const app = express ();
const authRoutes = require ('./routes/authRoutes');
const studentRoutes = require('./routes/studentRoutes');

app.use(express.json());
app.use('/api/v1/auth',authRoutes);
app.use('/api/v1/students',studentRoutes);

app.get('/', (req, res) => {
  res.send('Student Record System API is live 🚀');
});

app.get('/api/v1/status',(req ,res)=>{
    res.json({status: 'running'});
});

require('dotenv').config();
console.log('MONGO_URI:', process.env.MONGO_URI); // temporary line for debugging

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
const PORT = process.env.PORT || 3000;
app.listen (PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
});
