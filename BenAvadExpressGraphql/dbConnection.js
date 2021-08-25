import mongoose from "mongoose";

mongoose
  .connect("mongodb://localhost:27017/BenAvadGraphQl", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log(`Connected To DataBase`))
  .catch((error) => console.log(error));
