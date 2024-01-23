import Card from "./components/Card/Card";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import { FaPlusCircle } from "react-icons/fa";
import { useState } from "react";
import "./App.css";
import Modal from "./components/Modals/TeamsModal/Modal";

function App() {
  const [teams, setTeams] = useState([]);
  const [currentTeam, setCurrentTeam] = useState({});

  return (
    <div>
      <Header />
      <Sidebar
        teams={teams}
        setTeams={setTeams}
        currentTeam={currentTeam}
        setCurrentTeam={setCurrentTeam}
      />
      <main className="cards">
        {Object.keys(currentTeam).length === 0 ? (
          <AddNewTeamBoard
            teams={teams}
            setTeams={setTeams}
            setCurrentTeam={setCurrentTeam}
          />
        ) : (
          <>
            {["ToDo", "In Progress", "Done"].map((title, index) => {
              return (
                <Card
                  key={index}
                  title={title}
                  teams={teams}
                  setTeams={setTeams}
                  currentTeam={currentTeam}
                  setCurrentTeam={setCurrentTeam}
                />
              );
            })}
          </>
        )}
      </main>
    </div>
  );
}

export default App;

function AddNewTeamBoard({ teams, setTeams, setCurrentTeam }) {
  const [isActiveModal, setIsActiveModal] = useState(false);
  return (
    <>
      <div className="add_new_team" onClick={() => setIsActiveModal(true)}>
        <FaPlusCircle size={25} />
        <h1>Add a new team to start working</h1>
      </div>
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
