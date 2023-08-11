import React, { useState } from "react";

function NameCounter() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleAgeChange(dir) {
    if (dir === "-")
      setAge(currAge => {
        return currAge - 1;
      });
    if (dir === "+")
      setAge(currAge => {
        return currAge + 1;
      });
  }

  return (
    <div className="NameCounter">
      <h2>Functional Component</h2>
      <input type="text" value={name} onChange={handleNameChange} />
      <button onClick={() => handleAgeChange("-")}>-</button>
      {age}
      <button onClick={() => handleAgeChange("+")}>+</button>
      <p>
        My name is {name || "blah"} and I am {age} years old
      </p>
    </div>
  );
}

export default NameCounter;

{
  /* <li>Create a new function component that has state for name and age</li>
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
        </li> */
}
