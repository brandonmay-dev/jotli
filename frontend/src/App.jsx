import React from "react";
import { Routes, Route } from "react-router";
import HomePage from "./pages/HomePage";
import CreatePage from "./pages/CreatePage";
import NoteDetailPage from "./pages/NoteDetailPage";
import toast from "react-hot-toast";
import "./index.css";

const App = () => {
  return (
    <div>
      <button
        onClick={() => toast.success("Note created successfully!")}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Create Note
      </button>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="/note/:id" element={<NoteDetailPage />} />
      </Routes>
    </div>
  );
};

export default App;
