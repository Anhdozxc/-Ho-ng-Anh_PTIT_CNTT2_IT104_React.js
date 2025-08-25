import { Component } from "react";

type State = { count: number };

export default class Ex8 extends Component<object, State> {
  timer: number = 0;
  constructor(props: object) {
    super(props);
    this.state = { count: 0 };
  }
  componentDidMount() {
    this.timer = window.setInterval(() => {
      this.setState((prev) => ({
        count: prev.count === 10 ? 0 : prev.count + 1,
      }));
    }, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timer);
  }
  render() {
    return (
      <div>
        <h2>Counter tự động</h2>
        <p>Giá trị: {this.state.count}</p>
      </div>
    );
  }
}
