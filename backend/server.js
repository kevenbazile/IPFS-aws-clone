import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import uploadRouter from "./routes/upload.js";
import retrieveRouter from "./routes/retrieve.js"; // Import retrieve route

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use("/upload", uploadRouter);
app.use("/file", retrieveRouter); // Use retrieve route

app.listen(PORT, () => {
  console.log(`🚀 Backend running on http://localhost:${PORT}`);
});
