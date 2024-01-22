import React, { useState } from "react";
import "./modal.css";

function Modal({ setIsActiveModal, teams, setTeams }) {
  const [teamName, setTeamName] = useState("");
  const [teamDesciption, setTeamDescription] = useState("");
  function handleClick(e) {
    e.preventDefault();
    setIsActiveModal(false)
    setTeams([...teams, {name: teamName, description: teamDesciption}])
  }
  return (
    <div className="modal">
      <div className="modal_content">
        <p>Add a team</p>
        <form onSubmit={handleClick}>
          <input
            type="text"
            name="teamName"
            value={teamName}
            placeholder="Team name"
            required
            onChange={(e) => setTeamName(e.target.value)}
          />
          <br />
          <textarea
            name="teamDescription"
            value={teamDesciption}
            cols="50"
            rows="5"
            placeholder="Team description"
            required
            onChange={(e) => setTeamDescription(e.target.value)}
          ></textarea>
          <br />
          <button>Save</button>
          <button type="button" onClick={() => setIsActiveModal(false)}>
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
}

export default Modal;
