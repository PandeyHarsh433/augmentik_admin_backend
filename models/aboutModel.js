import mongoose from "mongoose";

const AboutSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  title2: {
    type: String,
    required: true,
  },
  title3: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
});

export default mongoose.model("about", AboutSchema);
