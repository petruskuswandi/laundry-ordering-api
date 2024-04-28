const { default: mongoose } = require("mongoose");

const mongodbUrl =
  "mongodb+srv://petruskuswandi1:Pp1e8SeE7W5mov8r@cluster0.dwb3qtb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

async function connectDB() {
  return mongoose.connect(mongodbUrl);
}

module.exports = connectDB
