const express = require("express");
// const path = require("path");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();

const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI || "mongodb+srv://mikecarleson:Tavern07@beer-app-r4lpu.mongodb.net/test?retryWrites=true&w=majority");

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  // app.get('*', (req, res) => {
  //   res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  // });
}

app.use(routes);

app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
