import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import Mangas from "./components/Contacts";
import ModalComp from "./components/ModalContacts";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Mangas />
        <ModalComp editMode={false} />
      </header>
    </div>
  );
}

export default App;