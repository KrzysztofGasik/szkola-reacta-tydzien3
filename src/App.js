import React from "react";

import { Button, Input, TextArea } from "./components/Form";
import Card from "./components/Card";
import "./App.css";
import Menu from "./components/Menu/Menu";
import Employees from "./components/Employees/Employees";

function App() {
  return (
    <div className="App">
      <Input />
      <TextArea />
      <Button bgColor='carminepink' color="coastalbreeze"/>
      <Card />
      <Menu />
      <Employees />
    </div>
  );
}

export default App;
