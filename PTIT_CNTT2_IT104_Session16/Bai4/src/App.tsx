import { Component } from "react";
import ClickCounter from "./components/ClickCounter";

export default class App extends Component {
  render() {
    return (
      <div>
        <h3>Bài tập</h3>
        <ClickCounter />
      </div>
    );
  }
}
