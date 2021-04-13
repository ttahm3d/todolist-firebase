import React, { useState, useEffect } from "react";
import Todo from "../Todo/Todo";
import firebase from "firebase";
import { Header, TodoContainer, FormContainer } from "./TodoList.styles";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { db } from "../../firebase.config";

const TodoList = () => {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState(null);

  useEffect(() => {
    getTodos();
  }, []);

  function getTodos() {
    db.collection("todos").onSnapshot(function (querySnapshot) {
      setTodos(
        querySnapshot.docs.map((doc) => ({
          id: doc.id,
          todo: doc.data().todo,
          isDone: doc.data().isDone,
        }))
      );
    });
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    db.collection("todos").add({
      todo: input,
      isDone: false,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setInput("");
  };

  return (
    <div>
      <Header>
        <nav>
          <h1>
            To<span>do</span>
          </h1>
        </nav>
      </Header>
      <FormContainer>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={input}
            placeholder="What are you going to do?"
            onChange={(e) => setInput(e.target.value)}
          />
          <button type="submit">
            <AiOutlinePlusCircle />
          </button>
        </form>
      </FormContainer>
      <TodoContainer>
        {todos && todos.map((todo) => <Todo key={todo.id} {...todo} />)}
      </TodoContainer>
    </div>
  );
};

export default TodoList;
