const mongoose = require("mongoose");
mongoose.connect(
  "mongodb://localhost/studentdb",
  () => {
    console.log("connected");
  },
  (e) => console.log(error)
);
