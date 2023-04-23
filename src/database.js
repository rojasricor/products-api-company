import mongoose from "mongoose";

mongoose
  .connect(
    "mongodb+srv://rojasricor:65701167@cluster0.ge2te5x.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => console.log("Db is connected"))
  .catch((err) => console.log(err));
