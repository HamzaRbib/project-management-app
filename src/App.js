import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import { useState } from "react";
function App() {
  const [teams, setTeams] = useState([]);

  return (
    <div>
      <Header />
      <Sidebar teams={teams} setTeams={setTeams} />
    </div>
  );
}

export default App;
