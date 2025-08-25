import { Component } from "react";

type State = { time: Date };

export default class Ex7 extends Component<object, State> {
  timer: number = 0;
  constructor(props: object) {
    super(props);
    this.state = { time: new Date() };
  }
  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({ time: new Date() });
    }, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timer);
  }
  render() {
    const t = this.state.time;
    return (
      <h2>
        Thời gian hiện tại: {t.getHours()} : {t.getMinutes()} : {t.getSeconds()}
      </h2>
    );
  }
}
