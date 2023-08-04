import React, { useContext, useState } from "react";
import MyContext from "../../context/MyContext";

const CompleteItem = ({ type, text, todoItem }) => {
  const {
    todoActive,
    todoComplete,
    setTodoComplete,
    setTodoActive,
    setTodo,
    todo,
    onClickItem,
  } = useContext(MyContext);

  return (
    <div>
      <div className="mb-3 form-check">
        <input type={type} className="form-check-input" checked />
        <label className="form-check-label">
          <del>{text}</del>
        </label>
      </div>
    </div>
  );
};

export default CompleteItem;
