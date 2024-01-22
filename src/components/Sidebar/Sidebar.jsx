import { useState } from "react";
import "./sidebar.css";
import { FaUsers } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import Modal from "../Modals/TeamsModal/Modal";

function Sidebar({ teams, setTeams }) {
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
        {teams.map((team) => {
          return <li>{team.name}</li>;
        })}
      </aside>
      {isActiveModal && (
        <Modal
          setIsActiveModal={setIsActiveModal}
          teams={teams}
          setTeams={setTeams}
        />
      )}
    </>
  );
}

export default Sidebar;
