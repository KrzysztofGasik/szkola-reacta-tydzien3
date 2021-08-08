import React from "react";

import { Button, Input, TextArea } from "./components/Form";
import Card from "./components/Card";
import "./App.css";
import Menu from "./components/Menu/Menu";

function App() {
  return (
    <div className="App">
      <Input />
      <TextArea />
      <Button bgColor='carminepink' color="coastalbreeze"/>
      <Card />
      <Menu />
    </div>
  );
}

export default App;
