import React, { useContext } from "react";
import MyContext from "../../context/MyContext";
import TodoItem from "../TodoItem/TodoItem";

const All = () => {
  const { todo, formik } = useContext(MyContext);
  const { handleSubmit, handleChange, values } = formik;
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="add details"
            name="text"
            value={values.text}
            onChange={handleChange}
          />
          <button type="submit">Add</button>
        </div>
      </form>
      <div>
        {todo === 0
          ? ""
          : todo.map((todoItem) => {
              return (
                <TodoItem
                  todoItem={todoItem}
                  text={todoItem.text}
                  type={todoItem.type}
                />
              );
            })}
      </div>
    </>
  );
};

export default All;
