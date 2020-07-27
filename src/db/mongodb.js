const mongoose = require('mongoose')
const mongodbUrl = 'mongodb+srv://rakeshranjan920:Rakesh@920@cluster0.3ehe6.mongodb.net/test' 

const connectDB = async () => {
    const connection = await mongoose.connect(mongodbUrl, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true
    });

    console.log(`MongoDB connected ${connection.connection.host}`)
};

module.exports = connectDB;
