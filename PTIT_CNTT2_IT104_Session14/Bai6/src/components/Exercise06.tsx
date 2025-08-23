import React, { Component } from "react";

interface Exersice06State {
  gender: string; // luwu radio
  result: string;
}
class Exersice06 extends Component<object, Exersice06State> {
  constructor(props: object) {
    super(props);
    this.state = {
      gender: "",
      result: "",
    };
  }
  // radio
  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ gender: event.target.value });
  };
  //  form
  handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    this.setState({ result: this.state.gender });
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <p>Giới tính:</p>
          <label>
            <input
              type="radio"
              name="gender"
              value="Nam"
              checked={this.state.gender === "Nam"}
              onChange={this.handleChange}
            />
            Nam
          </label>
          <br />
          <label>
            <input
              type="radio"
              name="gender"
              value="Nữ"
              checked={this.state.gender === "Nữ"}
              onChange={this.handleChange}
            />
            Nữ
          </label>
          <br />
          <label>
            <input
              type="radio"
              name="gender"
              value="Khác"
              checked={this.state.gender === "Khác"}
              onChange={this.handleChange}
            />
            Khác
          </label>
          <br />
          <button type="submit">Submit</button>
        </form>
        {this.state.result && <h3>Giới tính đã chọn: {this.state.result}</h3>}
      </div>
    );
  }
}
export default Exersice06;
