import mongoose from "mongoose";

const CardSchema = new mongoose.Schema({
  cardNum: {
    type: Number,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  tag: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
});

export default mongoose.model("card", CardSchema);
