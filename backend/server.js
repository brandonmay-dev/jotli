import express from "express";

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());

// Routes
app.get("/api", (req, res) => {
  res.json({ message: "Hello from the backend!" });
});

// Server listener
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
