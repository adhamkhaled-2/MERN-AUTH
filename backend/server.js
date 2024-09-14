import express from "express";
import path from "path";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import userRoutes from "./routes/userRoutes.js";
import { notFound, errorHandler } from "./middleware/errorMiddleWare.js";
import connectDB from "./config/db.js";
dotenv.config();

connectDB();

const app = express();

app.use(express.json());

app.use(cookieParser());

app.use(express.urlencoded({ extended: true }));

app.use("/api/users", userRoutes);

app.use(notFound);

app.use(errorHandler);

if (process.env.NODE_ENV === "production") {
  const _dirname = path.resolve();
  app.use(express.static(path.join(_dirname, "frontend/dist")));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(_dirname, "frontend/dist", "index.html"));
  });
} else {
  app.get("/", (req, res) => {
    res.send("Server Is Ready");
  });
}

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
