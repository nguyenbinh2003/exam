import "./App.css";
import Active from "./components/Active/Active";
import All from "./components/All/All";
import Complete from "./components/Complete/Complete";
import Header from "./components/Header/Header";
import { Routes, Route } from "react-router-dom";
import MyContext from "./context/MyContext";
import { useState } from "react";
import { useFormik } from "formik";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [todo, setTodo] = useState([]);
  const [todoActive, setTodoActive] = useState([]);
  const [todoComplete, setTodoComplete] = useState([]);

  const formik = useFormik({
    initialValues: {
      text: "",
      type: "checkbox",
      check: false,
      uuidv4: uuidv4(),
    },
    onSubmit: (values) => {
      console.log(values);
      setTodo([...todo, values]);
    },
  });

  const onClickItem = (todoItem) => {
    const filters = todo.filter((item) => {
      return todo[0].id !== item.id;
    });
    setTodo(filters);
  };
  return (
    <MyContext.Provider
      value={{
        todo: todo,
        formik: formik,
        todoActive: todoActive,
        todoComplete: todoComplete,
        setTodoComplete,
        setTodoActive,
        setTodo,
        onClickItem,
      }}
    >
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<All />} />
          <Route path="/active" element={<Active />} />
          <Route path="/complete" element={<Complete />} />
        </Routes>
      </div>
      <button type="button" className="text-danger" onClick={onClickItem}>
        delete all
      </button>
    </MyContext.Provider>
  );
}

export default App;
