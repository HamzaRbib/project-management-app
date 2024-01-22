import React from "react";
import { useState } from "react";
import "../TeamsModal/modal.css";

function Modal({ setIsModalActive, todos, setTodos }) {
  const [todo, setTodo] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    setIsModalActive(false);
    // setTodos([...todos, todo]);
  }
  return (
    <div className="modal">
      <div className="modal_content">
        <p>Add To-DO</p>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={todo}
            placeholder="To-DO"
            required
            onChange={(e) => setTodo(e.target.value)}
          />
          <br />
          <button>Save</button>
          <button type="button" onClick={() => setIsModalActive(false)}>
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
}

export default Modal;
