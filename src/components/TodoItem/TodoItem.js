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
  const [check, setCheck] = useState(false);
  const onClick = () => {
    if (check === false) {
      setCheck(true);
      setTodoComplete([...todo, { ...todoItem, check: true }]);
      console.log([...todo, { ...todoItem, check: true }]);
      console.log(todoItem);
    } else {
      setTodoActive([...todo, { ...todoItem, check: false }]);
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
