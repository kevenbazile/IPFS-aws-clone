import express from "express";
import { create } from "ipfs-http-client"; // Correct import
import pool from "../database.js"; // Ensure .js extension is included

const router = express.Router();

// Connect to IPFS
const ipfs = create({ host: "localhost", port: 5001, protocol: "http" });

router.post("/", async (req, res) => {
  try {
    const { fileData } = req.body;

    // Upload file to IPFS
    const { cid } = await ipfs.add(fileData);

    // Store the CID in PostgreSQL
    await pool.query("INSERT INTO ipfs_files (cid, filename) VALUES ($1, $2)", [
      cid.toString(),
      "uploaded_file",
    ]);

    res.json({ success: true, cid: cid.toString() });
  } catch (error) {
    console.error("Error uploading to IPFS:", error.message);
    res.status(500).json({ error: error.message });
  }
});

export default router; // Use ES module export
