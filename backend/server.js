import express from "express";

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Routes
app.get("/api/notes", (req, res) => {
  res.status(200).json({ message: "Fetched notes successfully!" });
});

app.post("/api/notes", (req, res) => {
  res.status(201).json({ message: "Note created successfully!" });
});

app.put("/api/notes/:id", (req, res) => {
  res.status(200).json({ message: "Note updated successfully!" });
});

app.delete("/api/notes/:id", (req, res) => {
  res.status(200).json({ message: "Note deleted successfully!" });
});

// Server listener
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
