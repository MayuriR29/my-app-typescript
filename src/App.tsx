import * as React from "react";
import "./App.css";
import Form from "./Form";

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <Form text="Hello" />
      </div>
    );
  }
}

export default App;
