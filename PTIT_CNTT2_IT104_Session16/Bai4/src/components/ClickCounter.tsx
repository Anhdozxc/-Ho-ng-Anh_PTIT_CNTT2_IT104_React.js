import { Component } from "react";

interface State {
  count: number;
}

export default class ClickCounter extends Component<object, State> {
  constructor(props: object) {
    super(props);

    this.state = { count: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ count: this.state.count + 1 });
  }
  render() {
    return (
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <h2>Số lần click: {this.state.count}</h2>
        <button onClick={this.handleClick}>Click me</button>
      </div>
    );
  }
}
