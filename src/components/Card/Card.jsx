import React, { useState } from "react";
import { FaPlusCircle } from "react-icons/fa";
import Modal from "../Modals/ToDoModal/Modal";
import "./card.css";

function Card({ title, teams, setTeams, currentTeam, setCurrentTeam }) {
  const [isActiveModal, setIsActiveModal] = useState(false);
  const [isEdit, setIsEdit] = useState({ isEdit: false, todo: "" });

  function handleEditClick(todo) {
    setIsEdit({ isEdit: true, todo: todo });
    setIsActiveModal(true);
  }

  function handleDeleteClick(todo) {
    setCurrentTeam({
      ...currentTeam,
      todos: currentTeam.todos.filter((thisTodo) => thisTodo.todo !== todo),
    });
    setTeams(
      teams.map((team) =>
        team.name === currentTeam.name
          ? {
              ...currentTeam,
              todos: currentTeam.todos.filter(
                (thisTodo) => thisTodo.todo !== todo
              ),
            }
          : team
      )
    );
  }

  function drop(e, title) {
    e.preventDefault();
    let data = e.dataTransfer.getData("task");
    setTeams(
      teams.map((team) => {
        return team.name === currentTeam.name
          ? {
              ...team,
              todos: team.todos.map((thisTodo) =>
                thisTodo.todo === data
                  ? { todo: data, status: title }
                  : thisTodo
              ),
            }
          : team;
      })
    );
    setCurrentTeam({
      ...currentTeam,
      todos: currentTeam.todos.map((thisTodo) =>
        thisTodo.todo === data ? { todo: data, status: title } : thisTodo
      ),
    });
  }

  function allowDrop(e) {
    e.preventDefault();
  }

  function drag(e, todo) {
    e.dataTransfer.setData("task", todo);
  }

  return (
    <div className={`${title}_card card`} onDrop={(e) => drop(e, title)} onDragOver={allowDrop}>
      <h1 className="title">{title}</h1>
      <div>
        {currentTeam.todos
          .filter((todo) => todo.status.toLowerCase() === title.toLowerCase())
          .map((todo, index) => {
            return (
              <div
                key={index}
                id={todo.todo}
                className="todo"
                draggable={true}
                onDragStart={(e) => drag(e, todo.todo)}
              >
                <p>{todo.todo}</p>
                <button
                  className="edit_btn"
                  onClick={() => handleEditClick(todo)}
                >
                  Edit
                </button>
                <button
                  className="delete_btn"
                  onClick={() => handleDeleteClick(todo.todo)}
                >
                  Delete
                </button>
              </div>
            );
          })}
        {title === "ToDo" && (
          <div className="add_btn" onClick={() => setIsActiveModal(true)}>
            <FaPlusCircle size={20} />
            <p>Add To-Do</p>
          </div>
        )}
      </div>
      {isActiveModal && (
        <Modal
          setIsModalActive={setIsActiveModal}
          teams={teams}
          setTeams={setTeams}
          currentTeam={currentTeam}
          setCurrentTeam={setCurrentTeam}
          edit={isEdit}
          setEdit={setIsEdit}
        />
      )}
    </div>
  );
}

export default Card;
