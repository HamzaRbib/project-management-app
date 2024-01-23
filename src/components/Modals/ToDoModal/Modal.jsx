import React from "react";
import { useState } from "react";
import "../TeamsModal/modal.css";

function Modal({
  setIsModalActive,
  teams,
  setTeams,
  currentTeam,
  setCurrentTeam,
  edit,
  setEdit,
}) {
  const [todo, setTodo] = useState(edit.todo.todo);
  function handleSubmit(e) {
    e.preventDefault();
    if (edit.isEdit) {
      setIsModalActive(false);
      setEdit({ isEdit: false, todo: "" });
      setTeams(
        teams.map((team) => {
          return team.name === currentTeam.name
            ? {
                ...team,
                todos: team.todos.map((thisTodo) =>
                  thisTodo.todo === edit.todo.todo ? {todo: todo, status: thisTodo.status} : thisTodo
                ),
              }
            : team;
        })
      );
      setCurrentTeam({
        ...currentTeam,
        todos: currentTeam.todos.map((thisTodo) =>
          thisTodo.todo === edit.todo.todo ? {todo: todo, status: thisTodo.status} : thisTodo
        ),
      });
      return;
    }
    setIsModalActive(false);
    setTeams(
      teams.map((team) => {
        return team.name === currentTeam.name
          ? {
              ...team,
              todos: [...team.todos, { todo: todo, status: "todo" }],
            }
          : team;
      })
    );
    setCurrentTeam({
      ...currentTeam,
      todos: [...currentTeam?.todos, { todo: todo, status: "todo" }],
    });
  }
  return (
    <div className="modal">
      <div className="modal_content">
        <p>Add To-DO</p>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={todo}
            placeholder="To-Do"
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
