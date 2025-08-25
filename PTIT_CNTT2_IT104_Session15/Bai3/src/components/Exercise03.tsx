import { Component } from "react";
type State = {
  birthday: string;
  submitted: string;
};
export default class Exercise03 extends Component<object, State> {
  constructor(props: object) {
    super(props);
    this.state = {
      birthday: "",
      submitted: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ birthday: e.target.value });
  }
  handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    this.setState({ submitted: this.state.birthday });
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Ngày sinh: {this.state.submitted ? this.state.submitted : ""}
          </label>
          <br />
          <input
            type="date"
            value={this.state.birthday}
            onChange={this.handleChange}
          />
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
