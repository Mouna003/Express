import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import "./config/mongoose.config.js"; // make sure this file exists
import bookRoutes from "./routes/book.routes.js"; // make sure this file exists

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());
app.use("/api/books", bookRoutes);

app.listen(PORT, () => console.log(`📚 Server running on port ${PORT}`));
