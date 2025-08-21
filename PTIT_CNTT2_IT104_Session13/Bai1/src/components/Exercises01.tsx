import { Component } from "react";
class Exercises01 extends Component {
  state = {
    name: "Nguyễn Minh Sơn",
  };

  render() {
    return (
      <div>
        <h1>Bài 1</h1>
        <h2>Họ và tên: {this.state.name}</h2>
      </div>
    );
  }
}
export default Exercises01;
