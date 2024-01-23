import { useState } from "react";
import "./sidebar.css";
import { FaUsers } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import Modal from "../Modals/TeamsModal/Modal";

function Sidebar({ teams, setTeams, currentTeam, setCurrentTeam }) {
  const [isActiveModal, setIsActiveModal] = useState(false);
  return (
    <>
      <aside className="sidebar">
        <div className="title">
          <div className="team">
            <FaUsers className="users_icon" size={"1.5rem"} />
            <p>Teams</p>
          </div>
          <FaPlus
            className="plus_icon"
            onClick={() => setIsActiveModal(!isActiveModal)}
          />
        </div>
        <hr />
        {teams.map((team, index) => {
          return <p key={index} className={`created_team ${team.name === currentTeam.name ? "selected_team" : ""}`} onClick={() => setCurrentTeam(team)}>{team.name}</p>;
        })}
      </aside>
      {isActiveModal && (
        <Modal
          setIsActiveModal={setIsActiveModal}
          teams={teams}
          setTeams={setTeams}
          setCurrentTeam={setCurrentTeam}
        />
      )}
    </>
  );
}

export default Sidebar;
