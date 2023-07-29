import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import product from "./routes/product.js";
import user from "./routes/user.js";
import { notFound, errorHandler } from "./middleware/errorHandler.js";
import cookieParser from "cookie-parser";

dotenv.config();
const PORT = process.env.PORT || 7000;
const app = express();
connectDB();

app.get("/api/v1", (req, res) => {
  res.send("ecommerce-MERN API is Running..!");
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cookieParser());

app.use("/api/v1/products", product);
app.use("/api/v1/users", user);
app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => console.log(`Server is up and running on port ${PORT}`));
