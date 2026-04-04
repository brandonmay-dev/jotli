import express from "express";

export function getAllNotes(req, res) {
  res.status(200).json({ message: "Get all notes" });
}

export function createNote(req, res) {
  res.status(201).json({ message: "Create a new note" });
}

export function updateNote(req, res) {
  res.status(200).json({ message: "Update a note" });
}

export function deleteNote(req, res) {
  res.status(200).json({ message: "Delete a note" });
}
