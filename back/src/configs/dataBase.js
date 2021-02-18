const mongoose = require('mongoose');
const { mongoUri } = require('./vars')

mongoose.connect(mongoUri , {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
}, (err) => {
    if (err) throw err;
    console.log("connected");
})
