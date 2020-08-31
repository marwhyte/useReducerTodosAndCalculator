import React, { useState } from "react";
import { ACTIONS } from "./App";
const Todo = (props) => {
  return (
    <div
      style={
        props.todo.completed
          ? { backgroundColor: "lightgrey" }
          : { backgroundColor: "lightblue" }
      }
    >
      <p>{props.todo.name} </p>
      <button
        onClick={() =>
          props.dispatch({
            type: ACTIONS.DELETE_TODO,
            payload: { id: props.todo.id },
          })
        }
      >
        Delete task
      </button>
      <button
        onClick={() =>
          props.dispatch({
            type: ACTIONS.MARK_COMPLETE,
            payload: { id: props.todo.id },
          })
        }
      >
        Mark Complete
      </button>
    </div>
  );
};

export default Todo;
