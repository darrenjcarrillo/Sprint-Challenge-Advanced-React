import React from "react";
import "./App.css";
import ClassComponent from "./components/ClassComponent";
import NavBar from "./components/Hooks/NavBar.jsx";

function App() {
  return (
    <div className="App">
      <NavBar />
      <ClassComponent />
    </div>
  );
}

export default App;
