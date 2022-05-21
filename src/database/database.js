const mongoose = require('mongoose');

const connectToDatabase = () => {
  mongoose.connect('mongodb://localhost:27017/palettes-db', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log('MongoDB CONNECT!'))
    .catch((error) =>
      console.log(`Error on conect with MongoDB, erro : ${error}`),
    );
};

module.exports = connectToDatabase;
