import React from "react";

export class NameCounterClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      age: 0,
      name: "",
    };
  }

  render() {
    return (
      <div className="NameCounter">
        <h2>Class Component</h2>
        <input
          type="text"
          value={this.state.name}
          onChange={e => this.setState({ name: e.target.value })}
        />
        <button
          onClick={() =>
            this.setState(currState => {
              return {
                age: currState.age - 1,
              };
            })
          }
        >
          -
        </button>
        {this.state.age}
        <button
          onClick={() =>
            this.setState(currState => {
              return {
                age: currState.age + 1,
              };
            })
          }
        >
          +
        </button>
        <p>
          My name is {this.state.name || "blah"} and I am {this.state.age} years
          old
        </p>
      </div>
    );
  }
}
