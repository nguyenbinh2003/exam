import React, { useContext } from "react";
import TodoItem from "../TodoItem/TodoItem";
import MyContext from "../../context/MyContext";

const Active = () => {
  const { todo, formik, todoActive, todoComplete } = useContext(MyContext);
  const { handleSubmit, handleChange, values } = formik;
  const filter = todo.filter((todoItem) => {
    return todoItem.check === false;
  });
  console.log(filter);
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
        {filter === 0
          ? ""
          : filter.map((todoItem) => {
              return (
                <TodoItem
                  text={todoItem.text}
                  type={todoItem.type}
                  checkTodo={todoItem.check}
                />
              );
            })}
      </div>
    </>
  );
};

export default Active;
