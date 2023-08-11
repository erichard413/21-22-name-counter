import { useState } from "react";
import NameCounter from "./NameCounter";
import { NameCounterClass } from "./NameCounterClass";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Unit 21: Counter with Name Project</h1>
      <ol>
        <li>Create a new function component that has state for name and age</li>
        <li>
          Create a text input that when updated will update the name state
        </li>
        <li>
          Create a plus and minus button that will update the age state and
          display the state between the two buttons
        </li>
        <li>
          Display the string My name is 'name' and I am 'age' years old in your
          JSX
        </li>
        <li>
          Repeat but for a class component instead of a function component
        </li>
      </ol>
      <NameCounter />
      <NameCounterClass />
    </div>
  );
}

export default App;
