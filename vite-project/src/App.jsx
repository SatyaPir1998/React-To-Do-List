import React, { useState } from "react";
import InputContener from "../components/InputContener";
import TaskContener from "../components/TaskContener";
import "./App.css";

function App() {
  const [Inputval, SetInputval] = useState('');
  const [todos, setTodo] = useState([]);

  function handleInput(e){
    SetInputval(e.target.value);
  };

  function addTodo() {
    if (Inputval != "") {
      setTodo((prevTodos) => [...prevTodos, Inputval]);
      SetInputval('');
    }
  }

  function delTodo(todoIndex) {
    setTodo((prevTodos) =>
      prevTodos.filter((prevTodos, prevTodosIndex) => {
        return prevTodosIndex != todoIndex;
      })
    );
  }

  return (
    <>
      <main>
        <h1>The To-Do List</h1>
        <InputContener
          Inputval={Inputval}
          handleInput={handleInput}
          addTodo={addTodo}
        />
        <TaskContener todos={todos} delTodo={delTodo} />
      </main>
    </>
  );
}

export default App;
