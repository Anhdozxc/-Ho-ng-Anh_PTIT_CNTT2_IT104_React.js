import { Component } from "react";
interface Exersice01State {
  userName: string;
}

class Exersice01 extends Component<object, Exersice01State> {
  constructor(props: object) {
    super(props);
    // Tạo state
    this.state = {
      userName: "Thầy",
    };
  }
  render() {
    return (
      <div>
        <h1>Xin chào, {this.state.userName}</h1>
      </div>
    );
  }
}
export default Exersice01;
