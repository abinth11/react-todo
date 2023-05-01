import React, { useState } from "react";
import { FaEdit, FaTrash, FaCheck } from "react-icons/fa";
import RadioButton from "./radioButton";

const List = ({ items, removeItem, editItem }) => {
  const [completedItems, setCompletedItems] = useState(
    Array(items.length).fill(false)
  );

  const toggleCompleted = (index) => {
    const updatedCompletedItems = [...completedItems];
    updatedCompletedItems[index] = !updatedCompletedItems[index];
    setCompletedItems(updatedCompletedItems);
  };

  return (
    <div className="container">
      <ul className="list-group list-group-flush">
        {items.map((item, index) => {
          const { id, title } = item;
          const isCompleted = completedItems[index];
          const listItemStyle = isCompleted ? { textDecoration: "line-through", color: "gray" } : {};
          return (
            <li
              key={id}
              className={`list-group-item d-flex justify-content-between align-items-center ${isCompleted ? "completed" : ""}`}
              style={{ display: "flex", alignItems: "center" }}
            >
              <span className="d-flex flex-grow-1 align-items-center">
                <button className="tick-btn" onClick={() => toggleCompleted(index)}>
                  {isCompleted ? <FaCheck /> : <RadioButton
                    id={id}
                    label="Option 1"
                    name="radio-group"
                    value="option1"
                    checked={false}
                    onChange={() => toggleCompleted(index)}
                  />}
                </button>
                <p style={{ margin: "0", marginLeft: "10px", ...listItemStyle }}>{title}</p>
              </span>
              <div style={{ float: "right" }}>
                <button
                  type="button"
                  className="edit-btn"
                  onClick={() => editItem(id)}
                >
                  <FaEdit />
                </button>
                <button
                  type="button"
                  className="delete-btn"
                  onClick={() => removeItem(id)}
                >
                  <FaTrash />
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default List;
