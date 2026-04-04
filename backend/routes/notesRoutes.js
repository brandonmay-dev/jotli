import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json({ message: "Get all notes" });
});

router.post("/", (req, res) => {
  res.status(201).json({ message: "Create a note" });
});

router.put("/:id", (req, res) => {
  res.status(200).json({ message: "Update a note" });
});

router.delete("/:id", (req, res) => {
  res.status(200).json({ message: "Delete a note" });
});

export default router;
