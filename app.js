import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoute.js";
import aboutRoutes from "./routes/aboutRoutes.js";
import cardRoutes from "./routes/cardRoutes.js";
import cors from "cors";

//configure env
dotenv.config();

//databse config
connectDB();

//rest object
const app = express();

//middelwares
app.use(cors());
app.use(express.json());

//routes
app.use("/api/v1/auth", authRoutes);

app.use("/app", aboutRoutes);

app.use("/", cardRoutes);

//rest api
app.get("/", (req, res) => {
  res.send("<h1>Hello there...!  Welcome to ecommerce app</h1>");
});

//PORT
const PORT = process.env.PORT || 8080;

//run listen
app.listen(PORT, () => {
  console.log("Server Running on port ", PORT);
});
