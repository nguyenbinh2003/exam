import React, { useContext } from "react";
import TodoItem from "../TodoItem/TodoItem";
import MyContext from "../../context/MyContext";

const Complete = () => {
  const { todo, formik, todoActive, todoComplete, setTodo } =
    useContext(MyContext);
  const { handleSubmit, handleChange, values } = formik;
  const filter = todo.filter((todoItem) => {
    return todoItem.check === true;
  });
  console.log(filter);
  return (
    <>
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

export default Complete;
