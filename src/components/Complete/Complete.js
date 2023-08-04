import React, { useContext } from "react";
import TodoItem from "../TodoItem/TodoItem";
import MyContext from "../../context/MyContext";
import CompleteItem from "../CompleteItem/CompleteItem";

const Complete = () => {
  const { todo, formik, todoActive, todoComplete, setTodo } =
    useContext(MyContext);
  const { handleSubmit, handleChange, values } = formik;
  const filter = todoComplete.filter((todoItem) => {
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
                <CompleteItem
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
