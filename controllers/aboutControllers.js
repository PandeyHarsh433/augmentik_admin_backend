import aboutModel from "./../models/aboutModel.js";

export const getAboutController = async (req, res) => {
  try {
    const about = await aboutModel.findOne();
    res.json(about);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const editAboutController = async (req, res) => {
  try {
    const contact = await aboutModel.findOne();
    if (req.body.title != null) {
      contact.title = req.body.title;
    }
    if (req.body.title2 != null) {
      contact.title2 = req.body.title2;
    }
    if (req.body.title3 != null) {
      contact.title3 = req.body.title3;
    }
    if (req.body.desc != null) {
      contact.desc = req.body.desc;
    }
    const updatedContact = await contact.save();
    res.json(updatedContact);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
