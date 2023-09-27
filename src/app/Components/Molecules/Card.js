"use client";
import React, { useState } from "react";
import CardIconList from "./CardIconList";

export default function Card({ viewonly, onSave, savedData }) {
  const [title, setTitle] = useState(savedData ? savedData.title : "");
  const [taskDescription, setTaskDescription] = useState(
    savedData ? savedData.description : ""
  );

  const handleSave = () => {
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
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            disabled={viewonly}
            className="card-textarea"
            placeholder="take a note..."
            value={taskDescription}
            onChange={(e) => setTaskDescription(e.target.value)}
          />
        </div>
        <div className="card-footer">
          <CardIconList viewonly={viewonly} />
          {!viewonly && (
            <button className="card-button" onClick={handleSave}>
              close
            </button>
          )}
        </div>
      </div>
    </>
  );
}
