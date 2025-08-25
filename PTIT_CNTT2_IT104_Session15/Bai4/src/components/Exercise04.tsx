import { Component } from "react";
type State = {
  progress: number;
  submitted?: number;
};

export default class Exercise04 extends Component<object, State> {
  constructor(props: object) {
    super(props);
    this.state = { progress: 0, submitted: undefined };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    //  ép thành number
    this.setState({ progress: Number(e.target.value) });
  }
  handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    this.setState({ submitted: this.state.progress });
  }
  render() {
    return (
      <div>
        <h2>
          Tiến độ hoàn thành:{" "}
          {this.state.submitted !== undefined
            ? `${this.state.submitted} %`
            : "%"}
        </h2>

        <form onSubmit={this.handleSubmit}>
          <input
            type="range"
            min={0}
            max={100}
            step={1}
            value={this.state.progress}
            onChange={this.handleChange}
          />
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
