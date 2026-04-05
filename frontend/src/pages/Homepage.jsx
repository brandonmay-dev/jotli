import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import Navbar from "../components/Navbar";
import RateLimitedUI from "../components/RateLimitedUI";
import NoteCard from "../components/NoteCard";

const Homepage = () => {
  const [isRateLimited, setIsRateLimited] = useState(false);
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchNotes = async () => {
    try {
      setLoading(true);
      setIsRateLimited(false);

      const res = await axios.get("http://localhost:3000/api/notes");
      setNotes(res.data);
    } catch (error) {
      if (error.response?.status === 429) {
        setIsRateLimited(true);
      } else {
        toast.error("Error fetching notes");
        console.error("Error fetching notes:", error);
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  return (
    <div className="min-h-screen bg-base-100">
      <Navbar />

      {isRateLimited ? (
        <RateLimitedUI />
      ) : (
        <div className="max-w-6xl mx-auto p-4">
          <h2 className="text-2xl font-bold mb-4">All Notes</h2>

          <button onClick={fetchNotes} className="btn btn-primary mb-4">
            Refresh Notes
          </button>

          {loading ? (
            <p>Loading...</p>
          ) : notes.length === 0 ? (
            <p>No notes yet...</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {notes.map((note) => (
                <NoteCard key={note._id} note={note} />
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Homepage;
