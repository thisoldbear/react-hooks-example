import React from "react";
import ReactDOM from "react-dom";

import "./styles.scss";

import Form from "./components/form";

function App() {
  return (
    <div className="app">
      <Form />
    </div>
  );
}

const rootElement = document.getElementById("root");

ReactDOM.render(<App />, rootElement);
