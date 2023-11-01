import React from 'react';
import './App.css';

import Navbar from "./components/Navbar/Navbar";
import ScrollUpButton from "./components/ScrollUpButton/ScrollUpButton";
import ButtonLink from "./components/ButtonLink/ButtonLink";
import OrgsContainer from "./components/OrgLists/OrgsContainer";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
        <h1>Contribute your first open source here!!</h1>
      </header>
      <ScrollUpButton />
      <ButtonLink />
      <OrgsContainer />
      <Footer />
    </div>
  );
}

export default App;
