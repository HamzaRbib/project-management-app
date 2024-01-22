import Card from "./components/Card/Card";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import { useState } from "react";
import './App.css'
function App() {
  const [teams, setTeams] = useState([]);

  return (
    <div>
      <Header />
      <Sidebar teams={teams} setTeams={setTeams} />
      <main className="cards">
        <Card title={"To-Do"} />
        <Card title={"In Progress"} />
        <Card title={"Done"} />
      </main>
    </div>
  );
}

export default App;
