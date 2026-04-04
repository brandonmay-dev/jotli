import Note from "../models/Note.js";

export async function getAllNotes(req, res) {
  try {
    const notes = await Note.find();
    res.status(200).json(notes);
  } catch (error) {
    res.status(500).json({ message: "Error fetching notes", error });
  }
}

export async function createNote(req, res) {
  try {
    const { title, content } = req.body;
    const note = new Note({ title, content });
    await note.save();
    res.status(201).json(note);
  } catch (error) {
    res.status(500).json({ message: "Error creating note", error });
  }
}

export async function updateNote(req, res) {
  try {
    const { id } = req.params;
    const { title, content } = req.body;
    const note = await Note.findByIdAndUpdate(id, { title, content }, { new: true });
    res.status(200).json(note);
  } catch (error) {
    res.status(500).json({ message: "Error updating note", error });
  }
}

export async function deleteNote(req, res) {
  try {
    const { id } = req.params;
    const note = await Note.findByIdAndDelete(id);
    res.status(200).json(note);
  } catch (error) {
    res.status(500).json({ message: "Error deleting note", error });
  }
}
