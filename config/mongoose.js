const mongoose = require('mongoose');

const url = 'mongodb+srv://suzel786:SuzelK786@cluster0.iiamqxx.mongodb.net/?retryWrites=true&w=majorit';
mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
 }).then(()=>{
     console.log(`connection to database established`)
 }).catch(err=>{
     console.log(`db error ${err.message}`);
     process.exit(-1)
 })

const db = mongoose.connection;

db.on('error', console.error.bind(console, "Error connecting to MongoDB"));

db.once('open', function(){
    console.log('Connected to Database :: MongoDB');
});


module.exports = db;