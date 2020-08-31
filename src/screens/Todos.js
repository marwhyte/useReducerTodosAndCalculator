import React, { useState, useReducer } from "react";
import Todo from "../components/Todo";
import { Link } from "react-router-dom";

export const ACTIONS = {
  ADD_TODO: "add-todo",
  MARK_COMPLETE: "mark-complete",
  DELETE_TODO: "delete-todo",
};
const reducer = (todos, action) => {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return [...todos, addTodo(action.payload.name)];
    case ACTIONS.MARK_COMPLETE:
      return todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, completed: !todo.completed };
        } else {
          return todo;
        }
      });
    case ACTIONS.DELETE_TODO:
      return todos.filter((todo) => todo.id !== action.payload.id);
    default:
      return todos;
  }
};
function addTodo(name) {
  return { id: Math.random(), name: name, completed: false };
}

function Todos() {
  const [todos, dispatch] = useReducer(reducer, []);
  const [name, setName] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    dispatch({ type: ACTIONS.ADD_TODO, payload: { name: name } });
    setName("");
  }
  console.log(todos);
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input type="submit" />
      </form>

      {todos.map((todo) => {
        return <Todo todo={todo} dispatch={dispatch} />;
      })}
      <Link to="/useContext">Switch to class</Link>
    </div>
  );
}

export default Todos;
