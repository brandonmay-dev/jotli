import React from "react";
import Navbar from "../components/Navbar";

const Homepage = () => {
  return (
    <div className="min-h-screen bg-base-100">
      <Navbar />

      <div className="max-w-6xl mx-auto p-4">
        <h2 className="text-2xl font-bold mb-4">All Notes</h2>

        <div>No notes yet...</div>
      </div>
    </div>
  );
};

export default Homepage;
