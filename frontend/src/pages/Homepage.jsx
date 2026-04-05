import React, { useState } from "react";
import Navbar from "../components/Navbar";
import RateLimitedUI from "../components/RateLimitedUI";

const Homepage = () => {
  const [isRateLimited, setIsRateLimited] = useState(false);

  return (
    <div className="min-h-screen bg-base-100">
      <Navbar />

      {isRateLimited ? (
        <RateLimitedUI />
      ) : (
        <div className="max-w-6xl mx-auto p-4">
          <h2 className="text-2xl font-bold mb-4">All Notes</h2>
          <div>No notes yet...</div>
        </div>
      )}
    </div>
  );
};

export default Homepage;
