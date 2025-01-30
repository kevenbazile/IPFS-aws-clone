import express from "express";
const router = express.Router();

router.get("/:cid", (req, res) => {
  const { cid } = req.params;
  res.redirect(`https://ipfs.io/ipfs/${cid}`);
});

export default router;
