import { Component } from "react";
import "./Button.css";

interface Props {
  label: string;
  type: string;
}
export default class Button extends Component<Props> {
  render() {
    return (
      <button className={`btn ${this.props.type}`}>{this.props.label}</button>
    );
  }
}
