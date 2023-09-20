const mongoose = require('mongoose');
const dotenv = require('dotenv')

dotenv.config();
const url = process.env.MONGO_URL;

mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
});

const db = mongoose.connection;

db.on("error", console.error.bind(console, "Connection error:"));
db.once('open', () => {
    console.log('Ah, we have our first user!');
    console.log("Database connected");
});