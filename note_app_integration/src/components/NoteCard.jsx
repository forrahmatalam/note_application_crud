import React from "react";

const NoteCard = ({ note, deleteNote, updateNote }) => {
  return (
    <div className="w-[320px] rounded-xl border border-gray-700 bg-gray-900 p-5 shadow-lg">
      {/* Title */}
      <h3 className="mb-2 text-xl font-semibold leading-tight text-white">
        {note.title}
      </h3>

      {/* Description */}
      <p className="mb-4 min-h-[48px] text-sm leading-6 text-gray-400">
        {note.description.length > 20
          ? note.description.substring(0, 20) + "..."
          : note.description}
      </p>

      {/* Action Buttons */}
      <div className="flex items-center gap-3">
        <button
          onClick={() => updateNote(note)}
          className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-700 active:scale-95"
        >
          Edit
        </button>

        <button
          onClick={() => deleteNote(note._id)}
          className="rounded-lg bg-red-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-red-700 active:scale-95"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default NoteCard;