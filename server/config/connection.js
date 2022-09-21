const mongoose = require("mongoose");
//Global connection
mongoose.connect(
  "mongodb+srv://jama:Jamam2522@cluster0.i8i1o.mongodb.net/test?retryWrites=true&w=majority"
);

// mongoose.connect('mongodb://localhost:27017/mern', { useNewUrlParser: true }, (err) => {
//     if (!err) {
//         console.log('Database connected successfully')
//     } else {
//         console.log('Database connection failed', err)
//     }
// })
