import express from "express";

const router = express.Router();

router.get("/send", (req, res) => {
  // Logic to send a message
  res.send("Message sent");
});


export default router;