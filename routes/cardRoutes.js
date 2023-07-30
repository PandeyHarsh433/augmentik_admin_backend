import express from "express";
import {
  getCardsController,
  editCardController,
} from "../controllers/cardControllers.js";

const router = express.Router();

router.get("/cards", getCardsController);

router.patch("/card/:id?", editCardController);

export default router;
