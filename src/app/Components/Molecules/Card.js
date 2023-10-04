"use client";
import React, { useState } from "react";
import CardIconList from "./CardIconList";
import delete_button from "../img/delete_button.svg";

export default function Card({ viewonly, onSave, savedData, onDelete, id }) {
  const [title, setTitle] = useState(savedData ? savedData.title : "");
  const [taskDescription, setTaskDescription] = useState(
    savedData ? savedData.description : ""
  );

  const handleSave = (e) => {
    onSave({
      title: title,
      description: taskDescription
    });
    setTitle("");
    setTaskDescription("");

    console.log(title, taskDescription);
  };

  return (
    <>
      <div className="card-outline">
        <div className="card-text">
          <input
            className="card-input"
            disabled={viewonly}
            placeholder="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            className="card-textarea"
            placeholder="Take a note..."
            value={taskDescription}
            onChange={(e) => setTaskDescription(e.target.value)}
          />
        </div>
        <div className="card-footer">
          <CardIconList viewonly={viewonly} />

          {viewonly && (
            <button className="Del-Button" onClick={() => onDelete(id)}>
              Delete
            </button>
          )}
          {!viewonly && (
            <button className="card-button" onClick={handleSave}>
              save
            </button>
          )}
        </div>
      </div>
    </>
  );
}
