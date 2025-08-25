import { Component } from "react";
type State = {
  email: string;
};

export default class Exercise01 extends Component<object, State> {
  constructor(props: object) {
    super(props);
    this.state = {
      email: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ email: e.target.value });
  }

  handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    console.log({ email: this.state.email });
  }
  render() {
    return (
      <div>
        <h2>Form</h2>
        <form onSubmit={this.handleSubmit}>
          <label>Email</label>
          <br />
          <input
            type="text"
            value={this.state.email}
            onChange={this.handleChange}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
