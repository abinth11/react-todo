import React from "react";

const RadioButton = ({ id, label, name, value, checked, onChange }) => {
  return (
    <label htmlFor={id}>
      <input
        id={id}
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
      />
    </label>
  );
};

export default RadioButton;
