import React, { useContext, useState } from "react";
import MyContext from "../../context/MyContext";

const TodoItem = ({ type, text, todoItem, }) => {
  const {
    todoActive,
    todoComplete,
    setTodoComplete,
    setTodoActive,
    setTodo,
    todo,
    onClickItem
  } = useContext(MyContext);
  console.log(onClickItem);
  const [check, setCheck] = useState(false);
  const onClick = () => {
    if (check === false) {
      setCheck(true);
      setTodo([...todo, { ...todoItem, check: true }]);
      console.log(todoActive);
      console.log(todoItem);
    } else {
      setTodo([...todo, { ...todoItem, check: false }]);
      setCheck(false);
      console.log(todoActive);
      console.log(todoItem);
    }
  };

  return (
    <div>
      <div className="mb-3 form-check">
        <input type={type} className="form-check-input" onClick={onClick} />
        <label className="form-check-label">
          {check === false ? <span>{text}</span> : <del>{text}</del>}
        </label>
      </div>
    </div>
  );
};

export default TodoItem;
