import React from "react";
import Card from "./components/Card";
import ButtonGroup from "./components/Button";
import CardGrid from "./components/CardGrid";
import Navbar from "./components/Navbar";
import LoginForm from "./components/LoginForm";

function App() {
  return (
    <main>
      <Card />
      <ButtonGroup />
      <CardGrid />
      <Navbar />
      <LoginForm />
    </main>
  );
}

export default App;
