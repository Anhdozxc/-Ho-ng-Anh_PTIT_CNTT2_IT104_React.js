import { Component } from "react";
interface CompanyState {
  company: string;
}
class Company extends Component<Record<string, never>, CompanyState> {
  constructor(props: Record<string, never>) {
    super(props);
    this.state = {
      company: "Rikkei Academy",
    };
  }

  handleChangeState = () => {
    this.setState({
      company: "RikkeiSoft",
    });
  };
  render() {
    return (
      <div>
        <h1>Company: {this.state.company}</h1>
        <button onClick={this.handleChangeState}>Change state</button>
      </div>
    );
  }
}
export default Company;
