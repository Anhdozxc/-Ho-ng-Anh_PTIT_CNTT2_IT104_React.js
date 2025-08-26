import { Component } from "react";
import Button from "./components/Button";

export default class App extends Component {
  render() {
    return (
      <div style={{ padding: "20px" }}>
        <Button label="Primary" type="primary" />
        <Button label="Secondary" type="secondary" />
        <Button label="Success" type="success" />
        <Button label="Warning" type="warning" />
        <Button label="Danger" type="danger" />
        <Button label="Info" type="info" />
        <Button label="Light" type="light" />
        <Button label="Dark" type="dark" />
        <Button label="Link" type="link" />
      </div>
    );
  }
}
