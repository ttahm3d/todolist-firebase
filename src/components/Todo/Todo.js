import React from "react";
import { TodoWrapper } from "./Todo.styles";
import { BsCheckCircle } from "react-icons/bs";
import { AiOutlineDelete } from "react-icons/ai";
import { db } from "../../firebase.config";

const Todo = ({ todo, id, isDone }) => {
  const markComplete = () => {
    db.collection("todos").doc(id).update({
      isDone: !isDone,
    });
  };

  const deleteTodo = () => {
    db.collection("todos").doc(id).delete();
  };

  return (
    <TodoWrapper>
      <div>
        <p
          style={
            isDone
              ? { textDecoration: "line-through", color: "#333" }
              : { textDecoration: "none", fontWeight: "bold" }
          }
        >
          {todo}
        </p>
      </div>
      <div className="buttons">
        <button
          style={isDone ? { color: "green" } : { color: "black" }}
          onClick={markComplete}
        >
          <BsCheckCircle />
        </button>
        <button style={{ color: "red" }} onClick={deleteTodo}>
          <AiOutlineDelete />
        </button>
      </div>
    </TodoWrapper>
  );
};

export default Todo;
