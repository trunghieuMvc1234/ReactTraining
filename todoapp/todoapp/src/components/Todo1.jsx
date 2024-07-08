import { useState } from "react";
import TodoItem from "./TodoItem";

export default function Todo1() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  function handleSubmit(e) {
    e.preventDefault();
    setTodos([...todos, todo]);
  }
  return (
    <div>
      <h2>lession 31: Todo App Part 4 Submitting Todo Items</h2>
      <h2>lession 32: Todo App Part 5 Displaying Todos</h2>
      <form onSubmit={handleSubmit}>
        <input
          onChange={(e) => setTodo(e.target.value)}
          value={todo}
          type="text"
        />
        <button type="submit">Add</button>
      </form>
      {todos.map((item) => (
        <TodoItem item={item} />
      ))}
    </div>
  );
}
