import mongoose from "mongoose";

const CatSchema = mongoose.Schema({
  name: String,
  owner: String,
});

const CatModel = mongoose.model("Cat", CatSchema);

export default CatModel;
