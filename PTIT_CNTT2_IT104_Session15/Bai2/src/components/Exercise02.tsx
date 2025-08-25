import { Component } from "react";
type State = {
  color: string;
  submitted: string;
};

export default class Exercise02 extends Component<object, State> {
  constructor(props: object) {
    super(props);
    this.state = {
      color: "#000000",
      submitted: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ color: e.target.value });
  }
  handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    this.setState({ submitted: this.state.color });
  }
  render() {
    return (
      <div>
        <h2>Color: {this.state.submitted || ""}</h2>
        <h3>Form</h3>
        <form onSubmit={this.handleSubmit}>
          <label>Màu sắc</label>
          <br />
          <input
            type="color"
            value={this.state.color}
            onChange={this.handleChange}
          />
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
