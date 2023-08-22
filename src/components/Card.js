import React from "react";
import { FaTimes } from "react-icons/fa";

const Card = ({ task, deletTask }) => {
  return (
    <div
      style={{
        background: "white",
        borderRadius: "10px",
        padding: "10px",
        marginBottom: "10px",
        wordBreak: "break-all"
      }}
    >
      <h3
        style={{
          margin: 0,
          marginBottom: "10px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <span>{task}</span>
        <FaTimes
          onClick={() => {
            deletTask(task);
          }}
          style={{ color: "red", cursor: "pointer" }}
        />
      </h3>
      <div>More Details</div>
    </div>
  );
};

export default Card;