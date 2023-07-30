import express from "express";
import {
  editAboutController,
  getAboutController,
} from "./../controllers/aboutControllers.js";

const router = express.Router();

router.get("/about", getAboutController);

router.patch("/about", editAboutController);

export default router;
