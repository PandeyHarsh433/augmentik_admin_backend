import cardModel from "../models/cardModel.js";

export const getCardsController = async (req, res) => {
  try {
    const cards = await cardModel.find();
    res.json(cards);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const editCardController = async (req, res) => {
  try {
    const card = await cardModel.findOne({ _id: req.params.id });
    if (req.body.cardNum != null) {
      card.cardNum = req.body.cardNum;
    }
    if (req.body.title != null) {
      card.title = req.body.title;
    }
    if (req.body.date != null) {
      card.date = req.body.date;
    }
    if (req.body.desc != null) {
      card.desc = req.body.desc;
    }
    if (req.body.tag != null) {
      card.tag = req.body.tag;
    }
    if (req.body.image != null) {
      card.image = req.body.image;
    }
    const updatedCard = await card.save();
    res.json(updatedCard);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
